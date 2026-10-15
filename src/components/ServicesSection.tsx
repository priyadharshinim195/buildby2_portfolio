import { useRef, type CSSProperties } from 'react';
import { SERVICES, type ServiceIcon } from '../content';
import { useReveal } from '../hooks/useReveal';

function Icon({ name }: { name: ServiceIcon }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
  };
  switch (name) {
    case 'web':
      return (
        <svg {...common}>
          <rect x="6" y="9" width="36" height="28" rx="2" />
          <path d="M6 16h36M12 12.5h.01M16 12.5h.01" />
          <path d="M16 26l-4 3 4 3M32 26l4 3-4 3M27 24l-6 9" />
        </svg>
      );
    case 'stack':
      return (
        <svg {...common}>
          <path d="M24 7l17 9-17 9-17-9 17-9z" />
          <path d="M7 24l17 9 17-9M7 31l17 9 17-9" />
        </svg>
      );
    case 'cart':
      return (
        <svg {...common}>
          <path d="M8 13h6l4 20h18l4-14H16" />
          <circle cx="20" cy="39" r="2" />
          <circle cx="33" cy="39" r="2" />
        </svg>
      );
    case 'custom':
      return (
        <svg {...common}>
          <path d="M8 14h20M36 14h4M8 34h4M20 34h20" />
          <circle cx="32" cy="14" r="4" />
          <circle cx="16" cy="34" r="4" />
        </svg>
      );
  }
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="services" className="section services" ref={ref}>
      <header className="section__head" data-reveal>
        <p className="eyebrow">Services</p>
        <h2 className="display section__title">What I Do.</h2>
        <p className="section__lede">
          From concept to deployment, I build digital solutions that work beautifully and scale
          intelligently.
        </p>
      </header>

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <article
            key={service.title}
            className="svc"
            data-reveal
            style={{ '--delay': `${(i % 2) * 120}ms` } as CSSProperties}
          >
            <div className="svc__head">
              <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="svc__icon">
                <Icon name={service.icon} />
              </span>
            </div>
            <h3 className="svc__title">{service.title}</h3>
            <p className="svc__text">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
