// All editable copy and data lives here.

export const SITE = {
  name: 'builtbytw2',
  descriptor: 'Studio',
  email: 'builtbytw2@gmail.com',
};

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Placeholder used until a real demo URL exists. Buttons pointing here are
 * rendered as "pending" and never open an external site.
 * Replace each project's demoUrl with the live address when it is ready.
 */
export const DEMO_PENDING = '#demo-pending';

export type ProjectSize = 'feature' | 'side' | 'third' | 'half';
export type VisualPattern = 'rings' | 'grid' | 'bars' | 'wave' | 'blocks' | 'arc' | 'dots';
export type ProjectVariant = 'split' | 'frame' | 'invert' | 'ribbon' | 'tinted' | 'overlay' | 'minimal';

export type Project = {
  /** Stable identifier used to link reviews to this project. */
  id: string;
  title: string;
  category: string;
  description: string;
  /**
   * Thumbnail path: public/images/projects/project-01.jpg … project-07.jpg.
   * Leave undefined to show the CSS visual.
   */
  image?: string;
  technologies: string[];
  demoUrl: string;
  /** Controls grid span on desktop: feature 7/12, side 5/12, third 4/12, half 6/12. */
  size: ProjectSize;
  /** Accent colour for this card's visual, muted to suit the palette. */
  accent: string;
  pattern: VisualPattern;
  /** Card layout style. Each project uses a different one. */
  variant: ProjectVariant;
};

export const PROJECTS: Project[] = [
  {
    id: 'creative-studio-portfolio',
    title: 'Maison Aurelle',
    category: 'Business Website',
    description:
      'A luxury hair salon website with service listings, online booking, and a stylist showcase.',
    image: '/images/projects/project-01.jpg',
    technologies: ['React', 'TypeScript', 'CSS'],
    demoUrl: 'https://salonsite-rw96.vercel.app/',
    size: 'feature',
    accent: '#8a7a5c',
    pattern: 'rings',
    variant: 'split',
  },
  {
    id: 'e-commerce-experience',
    title: 'Maison Noir',
    category: 'E-Commerce',
    description:
      "A premium men's fashion store with a refined product presentation and a smooth shopping experience.",
    image: '/images/projects/project-02.jpg',
    technologies: ['Next.js', 'React', 'Stripe'],
    demoUrl: 'https://ecommerce-menswear-mauve.vercel.app/',
    size: 'side',
    accent: '#6b7a5a',
    pattern: 'grid',
    variant: 'frame',
  },
  {
    id: 'developer-dashboard',
    title: 'iPhone 17 Pro Max',
    category: 'Product Landing Page',
    description:
      'A concept landing page with scroll-led sections, detailed specs, and a colour and storage picker.',
    image: '/images/projects/project-03.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://phone-landing-page-6lmk.vercel.app/',
    size: 'third',
    accent: '#5b6470',
    pattern: 'bars',
    variant: 'invert',
  },
  {
    id: 'agency-landing-page',
    title: "Lumière d'Or",
    category: 'Product Landing Page',
    description:
      'A luxury skincare landing page with editorial storytelling, a product showcase, and a calm, minimal layout.',
    image: '/images/projects/project-04.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://priyadharshinim195.github.io/site/',
    size: 'third',
    accent: '#a0664b',
    pattern: 'wave',
    variant: 'ribbon',
  },
  {
    id: 'Interiors — Redefining Spaces',
    title: 'Atelier Nirmaan',
    category: 'Interior Design & Home Decor',
    description:
      'Transform ordinary spaces into extraordinary living experiences with elegant designs and modern interiors.',
    image: '/images/projects/project-05.jpg',
    technologies: ['React', 'Express', 'MongoDB'],
    demoUrl: 'https://interior-site-wine.vercel.app/',
    size: 'third',
    accent: '#7d6b4f',
    pattern: 'blocks',
    variant: 'tinted',
  },
  {
    id: 'restaurant-website',
    title: 'Maison Burger',
    category: 'Restaurant Website',
    description:
      'A gourmet burger restaurant website with an elegant brand presence and a clean, menu-focused layout.',
    image: '/images/projects/project-06.jpg',
    technologies: ['Next.js', 'Tailwind CSS'],
    demoUrl: 'https://restaurant-app-jovm.vercel.app/',
    size: 'half',
    accent: '#8c5a4a',
    pattern: 'arc',
    variant: 'overlay',
  },
  {
    id: 'custom-web-application',
    title: 'Velvet Nails',
    category: 'Business Website',
    description:
      'A premium nail art studio website with a polished gallery and a clean, mobile-first layout.',
    image: '/images/projects/project-07.jpg',
    technologies: ['TypeScript', 'React', 'Node.js'],
    demoUrl: 'https://nail-art-7eg4.vercel.app/',
    size: 'half',
    accent: '#9a8a6a',
    pattern: 'dots',
    variant: 'minimal',
  },
];

export const SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Responsive Web Design',
];

export type ServiceIcon = 'web' | 'stack' | 'cart' | 'custom';

export const SERVICES: { title: string; text: string; icon: ServiceIcon }[] = [
  {
    title: 'Web Development',
    text: 'Build fast, responsive, visually polished websites optimized for desktop, tablet, and mobile experiences.',
    icon: 'web',
  },
  {
    title: 'Full-Stack Development',
    text: 'Develop complete web applications, combining interactive frontend experiences with secure backend systems, databases, APIs, and authentication.',
    icon: 'stack',
  },
  {
    title: 'E-Commerce Development',
    text: 'Create scalable online stores with product catalogs, shopping carts, checkout flows, payment integrations, and intuitive customer experiences.',
    icon: 'cart',
  },
  {
    title: 'Custom Development',
    text: 'Build tailored websites, dashboards, business tools, and web applications based on unique business requirements.',
    icon: 'custom',
  },
];

export const ABOUT = {
  /**
   * About background photo: public/images/about.jpg. Leave undefined to use the olive background.
   */
  image: '/images/about.jpg' as string | undefined,
  statement:
    'We are an independent studio shaping brands, films and digital spaces with a patient, editorial eye.',
  body: [
    'Founded on the belief that restraint is a form of confidence, Ostra works with a small circle of clients who value craft over noise. Every project begins with listening and ends with the details most people only feel.',
    'Our team brings together designers, directors and developers who collaborate closely from first sketch to final frame.',
  ],
};
export const WHATSAPP = {
  // Country code + number, no + or spaces
  number: '917448944820',
  message:
    "Hi! I found your work on builtbytw2 Studio and I'd like to discuss a project. Could you share more about your services and availability?",
};
export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  {
    label: 'Whatsapp',
    href: `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`,
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}
