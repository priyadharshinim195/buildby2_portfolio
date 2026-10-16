import { useEffect, type RefObject } from 'react';
import { HERO, framePath } from '../config';

const FRAME_SECONDS = HERO.duration / HERO.frameCount;
/** Caps the per-tick time step so a backgrounded tab resumes without a jump. */
const MAX_STEP_SECONDS = 0.1;

/**
 * Plays the JPG sequence on a canvas, driven by rAF timestamps.
 * Works entirely with refs and the canvas API, so no React state changes
 * (and therefore no re-renders) happen while the animation runs.
 */
export function useFrameSequence(canvasRef: RefObject<HTMLCanvasElement>): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const { frameCount, duration, eagerCount, concurrency, maxDpr, staticFrame } = HERO;
    const frames = new Array<HTMLImageElement | undefined>(frameCount);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let disposed = false;
    let rafId = 0;
    let lastTs: number | null = null;
    let playhead = 0; // seconds, always within [0, duration)
    let shownIndex = -1;
    let current: HTMLImageElement | undefined;

    /** Draws an image with "cover" fit: uniform scale, centred, never stretched. */
        const paint = (img: HTMLImageElement) => {
      if (!img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const focus = window.matchMedia('(max-width: 600px)').matches
        ? HERO.mobileFocusX
        : HERO.focusX;
      ctx.drawImage(img, (cw - w) * focus, (ch - h) / 2, w, h);
      current = img;
      canvas.dataset.ready = 'true';
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width === w && canvas.height === h) return;
      canvas.width = w;
      canvas.height = h;
      shownIndex = -1; // force a repaint on the next tick
      if (current) paint(current);
    };

    const tick = (ts: number) => {
      if (lastTs !== null) {
        const step = Math.min((ts - lastTs) / 1000, MAX_STEP_SECONDS);
        playhead = (playhead + step) % duration;
      }
      lastTs = ts;

      // Frame index 0 = frame-001. Modulo wraps the last frame straight into the first.
      const index = Math.floor(playhead / FRAME_SECONDS) % frameCount;
      const img = frames[index];
      // If a frame has not arrived yet, the previous frame stays on screen (no blank flash).
      if (img && index !== shownIndex) {
        paint(img);
        shownIndex = index;
      }
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafId) return;
      lastTs = null;
      shownIndex = -1;
      rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onMotionChange = () => {
      if (motion.matches) {
        stop();
        const img = frames[staticFrame - 1];
        if (img) paint(img);
      } else {
        start();
      }
    };

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        const store = () => {
          if (!disposed) {
            frames[i] = img;
            if (i === staticFrame - 1 && motion.matches) paint(img);
          }
          resolve();
        };
        // Decode off the main thread before the frame is used, to avoid jank during playback.
        img.onload = () => {
          img.decode().then(store, store);
        };
        // A missing or broken frame is skipped; playback holds the previous frame.
        img.onerror = () => resolve();
        img.src = framePath(i + 1);
      });

    const run = async () => {
      // Load the opening frames immediately…
      await Promise.all(Array.from({ length: eagerCount }, (_, i) => load(i)));
      // …then stream the rest with limited concurrency.
      let next = eagerCount;
      const worker = async () => {
        while (!disposed && next < frameCount) {
          const i = next++;
          await load(i);
        }
      };
      await Promise.all(Array.from({ length: concurrency }, worker));
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    motion.addEventListener('change', onMotionChange);
    void run();
    if (!motion.matches) start();

    return () => {
      disposed = true;
      stop();
      observer.disconnect();
      motion.removeEventListener('change', onMotionChange);
    };
  }, [canvasRef]);
}
