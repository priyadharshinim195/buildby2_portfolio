import { useRef } from 'react';
import { HERO, framePath } from '../config';
import { useFrameSequence } from '../hooks/useFrameSequence';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useFrameSequence(canvasRef);

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero__media">
        {/* Static poster: visible until the first canvas frame is painted. */}
        <img className="hero__poster" src={framePath(HERO.staticFrame)} alt="" decoding="async" />
        <canvas ref={canvasRef} className="hero__canvas" role="img" aria-label="Looping cinematic film" />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title display">
          Quiet craft,
          <br />
          <em>moving</em> image.
        </h1>
        <p className="hero__lede">Brand · Direction · Digital</p>
      </div>

      <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
        <span className="scroll-cue__line" aria-hidden="true" />
        <span className="scroll-cue__label">Scroll</span>
      </a>
    </section>
  );
}
