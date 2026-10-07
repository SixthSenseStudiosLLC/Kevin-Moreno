// One place for business details. Anything marked TODO still needs real info.
export const SITE = {
  name: 'Sixth Sense Studios',
  tagline: 'Video content, events coverage and podcasts. Full context storytelling for North Jersey.',
  description:
    'Sixth Sense Studios films towns, local businesses and trade companies in Bergen and Passaic County. Video that builds trust: the work, the people and the town around it.',
  email: 'hello@example.com', // TODO
  phone: '', // TODO: e.g. (201) 555-0123
  hours: 'Monday - Saturday: 8:00 AM - 7:00 PM', // TODO: confirm
  area: 'Bergen & Passaic County, NJ',
  // Leave a URL empty to hide that icon.
  socials: {
    instagram: '', // TODO: full URL
    tiktok: '', // TODO
    youtube: '', // TODO
    facebook: '', // TODO
    linkedin: '', // TODO
  },
};

// Services drive the Services dropdown, the homepage slider and service grid,
// and the "Interested in" list on every quote form.
export const SERVICES = [
  {
    id: 'monthly-content',
    title: 'Monthly Content',
    slide: 'Monthly content that keeps you top of mind',
    short: 'Short-form clips every month, batched into shoot days so it never eats your week.',
    points: [
      'A plan for the month before anything is filmed',
      'Batched shoot days, minimal disruption to your business',
      'Edited clips delivered ready to post',
    ],
  },
  {
    id: 'podcast',
    title: 'Business Owner Podcast',
    slide: 'Your story, in your words',
    short: 'A podcast episode filmed on location at your business, then cut into clips.',
    points: [
      'Filmed where you work, not in a studio',
      'Full episode plus short clips from every recording',
      'Relaxed and conversational, no camera experience needed',
    ],
  },
  {
    id: 'events',
    title: 'Events Coverage',
    slide: 'Events coverage your town will remember',
    short: 'Openings, festivals, town events and ribbon cuttings. Captured and cut fast.',
    points: [
      'Grand openings, festivals, fundraisers and town events',
      'Fast recap edits while people are still talking about it',
      'Photos and clips for social, press and next year',
    ],
  },
  {
    id: 'projects',
    title: 'Brand Films & Projects',
    slide: 'Brand films with a beginning, a middle and an end',
    short: 'Brand films, launches and one-off pieces that show the whole picture.',
    points: [
      'Brand films and about-us videos',
      'Launches, job-site and before-and-after pieces',
      'Public project updates for towns and municipalities',
    ],
  },
];

type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const NAV: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', children: SERVICES.map((s) => ({ href: `/services#${s.id}`, label: s.title })) },
  { href: '/where-i-work', label: 'Service Areas' },
  { href: '/work', label: 'Work' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/stories', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
