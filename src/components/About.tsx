import { ABOUT } from '../content';

export function About() {
  return (
    <section id="about" className="section about">
      <div className="about__text">
        <p className="eyebrow">About</p>
        <p className="about__statement display">{ABOUT.statement}</p>
        <div className="about__body">
          {ABOUT.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      {ABOUT.image && (
        <figure className="about__figure">
          <img
            src={ABOUT.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => {
              console.warn(`About image failed to load: ${ABOUT.image}`);
              e.currentTarget.closest('figure')!.style.display = 'none';
            }}
          />
        </figure>
      )}
    </section>
  );
}
