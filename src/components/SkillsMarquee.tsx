import { SKILLS } from '../content';

/**
 * Two identical groups sit side by side. The track animates by exactly one group's
 * width (-50%), so the loop joins without a visible gap or jump. Each group carries
 * trailing padding equal to the gap, which keeps the spacing even across the seam.
 */
export function SkillsMarquee() {
  const renderGroup = (hidden: boolean) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {SKILLS.map((skill) => (
        <li key={skill} className="marquee__item">
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <section id="skills" className="marquee" aria-label="Tech stack and expertise">
      <p className="marquee__label">TECH STACK &amp; EXPERTISE</p>
      <div className="marquee__viewport">
        <div className="marquee__track">
          {renderGroup(false)}
          {renderGroup(true)}
        </div>
      </div>
    </section>
  );
}
