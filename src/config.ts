/**
 * Hero animation settings. The frames live in /public/frames as
 * frame-001.jpg … frame-NNN.jpg (zero-padded, 1-based).
 */
export const HERO = {
  /** Number of JPG frames supplied. Playback rate = frameCount / duration. */
  frameCount: 300,
  /** Length of the original clip in seconds. */
  duration: 10,
  /** Frames fetched immediately so the first moments play without waiting. */
  eagerCount: 12,
  /** Parallel requests for the remaining frames. */
  concurrency: 6,
  /** Cap on devicePixelRatio to limit canvas memory on high-density phones. */
  maxDpr: 2,
  /** Frame (1-based) shown for reduced-motion users and as the initial poster. */
  staticFrame: 1,
} as const;

/** Returns the public URL for a 1-based frame number. Throws outside 1…frameCount. */
export function framePath(frameNumber: number): string {
  if (!Number.isInteger(frameNumber) || frameNumber < 1 || frameNumber > HERO.frameCount) {
    throw new RangeError(`Frame ${frameNumber} is outside 1–${HERO.frameCount}`);
  }
  return `/frames/frame-${String(frameNumber).padStart(3, '0')}.jpg`;
}
