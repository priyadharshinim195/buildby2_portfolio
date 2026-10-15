import { NAV_LINKS, SITE } from '../content';

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {SITE.name} {SITE.descriptor}. All rights reserved.</p>
      <nav aria-label="Footer">
        <ul className="footer__nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
