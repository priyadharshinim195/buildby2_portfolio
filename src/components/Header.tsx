import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, SITE } from '../content';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className="header">
      <a href="#top" className="logo" onClick={closeMenu}>
        {SITE.name}
        <span>{SITE.descriptor}</span>
      </a>

      <nav id="primary-nav" className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  );
}
