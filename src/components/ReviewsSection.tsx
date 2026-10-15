import { useRef, type CSSProperties } from 'react';
import { getProject } from '../content';
import { useReveal } from '../hooks/useReveal';
import { REVIEWS, type Review } from '../reviews';
import { Stars } from './Stars';

function ReviewCard({ review }: { review: Review }) {
  const project = getProject(review.projectId);
  const showRating = review.rating !== undefined && !review.isPlaceholder;

  return (
    <article className="rcard">
      {project && <p className="rcard__project">{project.title}</p>}
      <blockquote className="rcard__quote">“{review.quote}”</blockquote>
      <footer className="rcard__foot">
        <div>
          <p className="rcard__name">{review.reviewer}</p>
          {review.role && <p className="rcard__role">{review.role}</p>}
        </div>
        {showRating && review.rating !== undefined && <Stars rating={review.rating} />}
        {review.isPlaceholder && <span className="tag-sample">Sample</span>}
      </footer>
    </article>
  );
}

export function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="reviews" className="section reviews" ref={ref}>
      <header className="section__head" data-reveal>
        <p className="eyebrow">Testimonials</p>
        <h2 className="display section__title">Client Reviews</h2>
        <p className="section__lede">
          Kind words, honest feedback, and experiences from the people I’ve worked with.
        </p>
      </header>

      <div className="reviews__grid">
        {REVIEWS.map((review, i) => (
          <div
            key={review.projectId}
            className="reviews__item"
            data-reveal
            style={{ '--delay': `${(i % 3) * 90}ms` } as CSSProperties}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
}
