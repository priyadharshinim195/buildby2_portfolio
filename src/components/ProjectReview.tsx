import type { Review } from '../reviews';
import { Stars } from './Stars';

/** Compact review shown under a project card's content and button. */
export function ProjectReview({ review }: { review: Review }) {
  const showRating = review.rating !== undefined && !review.isPlaceholder;

  return (
    <aside className="preview" aria-label="Client review">
      <p className="preview__label">
        Client Review
        {review.isPlaceholder && <span className="tag-sample">Sample</span>}
      </p>
      <p className="preview__quote">“{review.quote}”</p>
      <div className="preview__meta">
        <span>{review.reviewer}</span>
        {showRating && review.rating !== undefined && <Stars rating={review.rating} />}
      </div>
    </aside>
  );
}
