import { useRef, type CSSProperties } from 'react';
import { PROJECTS } from '../content';
import { useReveal } from '../hooks/useReveal';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="work" className="section projects" ref={ref}>
      <header className="section__head" data-reveal>
        <p className="eyebrow">Recent Projects</p>
        <h2 className="display section__title">Selected Work.</h2>
        <p className="section__lede">
          A collection of digital experiences built with creativity, precision, and purpose.
        </p>
      </header>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={`projects__item projects__item--${project.size}`}
            data-reveal
            style={{ '--delay': `${(i % 3) * 90}ms` } as CSSProperties}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
