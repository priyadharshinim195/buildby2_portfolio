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
    /** Horizontal crop focus for the video (0 = left edge, 0.5 = centre, 1 = right edge). */
  focusX: 0.5,
  /** Same, for phones (600px and below). Pushes the crop to the right so the subject stays in view. */
  mobileFocusX: 0.8,
} as const;

/** Returns the public URL for a 1-based frame number. Throws outside 1…frameCount. */
export function framePath(frameNumber: number): string {
  if (!Number.isInteger(frameNumber) || frameNumber < 1 || frameNumber > HERO.frameCount) {
    throw new RangeError(`Frame ${frameNumber} is outside 1–${HERO.frameCount}`);
  }
  return `/frames/frame-${String(frameNumber).padStart(3, '0')}.jpg`;
}
