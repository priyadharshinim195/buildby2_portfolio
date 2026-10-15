import type { CSSProperties, ReactNode } from 'react';
import { DEMO_PENDING, type Project } from '../content';
import { getReview } from '../reviews';
import { ProjectReview } from './ProjectReview';

type Props = { project: Project; index: number };

/* ---------- Shared pieces ---------- */

function Visual({ project, number, showNumber }: { project: Project; number: string; showNumber: boolean }) {
  return (
    <div className="pcard__visual">
      <div className={`pcard__art pcard__art--${project.pattern}`} aria-hidden="true">
        {project.image && (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => {
              console.warn(`Project image failed to load: ${project.image}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>
      {showNumber && (
        <span className="pcard__num" aria-hidden="true">
          {number}
        </span>
      )}
    </div>
  );
}

function Cat({ text }: { text: string }) {
  return <p className="pcard__cat">{text}</p>;
}

function Title({ text }: { text: string }) {
  return <h3 className="pcard__title">{text}</h3>;
}

function Desc({ text }: { text: string }) {
  return <p className="pcard__desc">{text}</p>;
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="pcard__tags" aria-label="Technologies">
      {items.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}

function Foot({ project }: { project: Project }) {
  const isPending = project.demoUrl === DEMO_PENDING || project.demoUrl.startsWith('#');
  return (
    <div className="pcard__foot">
      <a
        className="btn-demo"
        href={project.demoUrl}
        {...(isPending ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        aria-disabled={isPending || undefined}
      >
        <span>VIEW DEMO</span>
        <span className="btn-demo__arrow" aria-hidden="true">
          ↗
        </span>
        <span className="visually-hidden"> for {project.title}</span>
      </a>
      {isPending && <span className="pcard__pending">Demo link pending</span>}
    </div>
  );
}

function ReviewSlot({ project }: { project: Project }) {
  const review = getReview(project.id);
  return review ? <ProjectReview review={review} /> : null;
}

/* ---------- Card: each variant has its own markup structure ---------- */

export function ProjectCard({ project, index }: Props) {
  const number = String(index + 1).padStart(2, '0');
  const style = { '--accent': project.accent } as CSSProperties;
  const card = (children: ReactNode) => (
    <article className={`pcard pcard--${project.variant}`} style={style}>
      {children}
    </article>
  );

  switch (project.variant) {
    // 01 — media panel beside the text
    case 'split':
      return card(
        <>
          <div className="pcard__media">
            <Visual project={project} number={number} showNumber />
          </div>
          <div className="pcard__body">
            <Cat text={project.category} />
            <Title text={project.title} />
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
        </>,
      );

    // 02 — image in an accent frame, caption underneath
    case 'frame':
      return card(
        <>
          <figure className="pcard__frame">
            <Visual project={project} number={number} showNumber={false} />
            <figcaption className="pcard__caption">
              <span>{number}</span>
              <span>{project.category}</span>
            </figcaption>
          </figure>
          <div className="pcard__body">
            <Title text={project.title} />
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
        </>,
      );

    // 03 — light card: header bar, title, image, then details
    case 'invert':
      return card(
        <>
          <div className="pcard__topbar">
            <Cat text={project.category} />
            <span className="pcard__index">{number}</span>
          </div>
          <Title text={project.title} />
          <Visual project={project} number={number} showNumber={false} />
          <div className="pcard__body">
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
        </>,
      );

    // 04 — large outlined index above the text, image at the bottom
    case 'ribbon':
      return card(
        <>
          <div className="pcard__body">
            <span className="pcard__index">{number}</span>
            <Cat text={project.category} />
            <Title text={project.title} />
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
          <Visual project={project} number={number} showNumber={false} />
        </>,
      );

    // 05 — title row with the button, image strip, then details
    case 'tinted':
      return card(
        <>
          <div className="pcard__row">
            <div>
              <Cat text={project.category} />
              <Title text={project.title} />
            </div>
            <Foot project={project} />
          </div>
          <Visual project={project} number={number} showNumber={false} />
          <div className="pcard__body">
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <ReviewSlot project={project} />
          </div>
        </>,
      );

    // 06 — full image with the text laid over its bottom edge
    case 'overlay':
      return card(
        <div className="pcard__stage">
          <Visual project={project} number={number} showNumber />
          <div className="pcard__overlay-text">
            <Cat text={project.category} />
            <Title text={project.title} />
            <Desc text={project.description} />
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
        </div>,
      );

    // 07 — open editorial layout with an accent top rule
    case 'minimal':
      return card(
        <>
          <div className="pcard__text">
            <div className="pcard__meta">
              <span className="pcard__index">{number}</span>
              <Cat text={project.category} />
            </div>
            <Title text={project.title} />
            <Desc text={project.description} />
          </div>
          <Visual project={project} number={number} showNumber={false} />
          <div className="pcard__text">
            <Tags items={project.technologies} />
            <Foot project={project} />
            <ReviewSlot project={project} />
          </div>
        </>,
      );
  }
}
