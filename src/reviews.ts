// Single source of review data. Each review is linked to a project by its `id`.
// The same entries feed the compact review under each project card and the
// Client Reviews section, so editing a review here updates both places.
//
// SAMPLE entries (isPlaceholder: true) show a "Sample" tag on the site.
// Before publishing, replace the name, role, quote and rating with genuine
// feedback and set isPlaceholder to false.
// `avatar` is an optional photo path (e.g. '/images/reviews/name.jpg'). When it is
// not set, the reviewer's initials are shown instead.

export type Review = {
  projectId: string;
  quote: string;
  reviewer: string;
  role?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
  isPlaceholder: boolean;
};

export const REVIEWS: Review[] = [
    {
    projectId: 'creative-studio-portfolio',
    quote: "The salon's feel comes through on the page. Clients mention the site before they book.",
    reviewer: 'Meera Krishnan',
    role: 'Salon owner',
    isPlaceholder: true,
  },
  {
    projectId: 'e-commerce-experience',
    quote: 'The product gallery is clean and quick to browse. Checkout felt smooth on my phone.',
    reviewer: 'Arjun Raman',
    role: 'Store owner',
    isPlaceholder: true,
  },
  {
    projectId: 'developer-dashboard',
    quote: 'The scroll sections explain the phone clearly. The colour and storage picker is a nice touch.',
    reviewer: 'Divya Shanka',
    role: 'Brand manager',
    isPlaceholder: true,
  },
  {
    projectId: 'agency-landing-page',
    quote: 'The soft, minimal layout suits our skincare brand. It feels calm and premium.',
    reviewer: 'Priya Natarajan',
    role: 'Founder, skincare brand',
    isPlaceholder: true,
  },
  {
    projectId: 'task-management-app',
    quote: 'The task view is easy to scan, and the progress tracking keeps the team on track.',
    reviewer: 'Karthik Selvan',
    role: 'Team lead',
    isPlaceholder: true,
  },
  {
    projectId: 'restaurant-website',
    quote: 'The menu is easy to find on mobile, and the booking section is clear. Guests notice how polished it looks.',
    reviewer: 'Anitha Rajan',
    role: 'Restaurant owner',
    isPlaceholder: true,
  },
  {
    projectId: 'custom-web-application',
    quote: 'The gallery shows our nail art well. Clients can book online without calling us.',
    reviewer: 'Sowmya Iyer',
    role: 'Studio owner',
    isPlaceholder: true,
  },
];

export function getReview(projectId: string): Review | undefined {
  return REVIEWS.find((review) => review.projectId === projectId);
}