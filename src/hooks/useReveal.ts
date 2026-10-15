import { useEffect, type RefObject } from 'react';

/**
 * Adds `is-visible` to every [data-reveal] element inside `ref` once it scrolls
 * into view. Each element animates once, then stops being observed.
 */
export function useReveal(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}
