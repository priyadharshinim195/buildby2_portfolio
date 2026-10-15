import { SITE, SOCIALS } from '../content';

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">Contact</p>
      <h2 className="display contact__title">Let's make something quietly unforgettable.</h2>
      <a className="contact__email" href={`mailto:${SITE.email}`}>
        {SITE.email}
      </a>
      <ul className="socials">
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
