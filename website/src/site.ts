// One place for business details. Anything marked TODO still needs real info.
export const SITE = {
  name: 'Sixth Sense Studios',
  tagline: 'Video content, events coverage and podcasts. Full context storytelling for North Jersey.',
  description:
    'Sixth Sense Studios films towns, local businesses and trade companies across North Jersey. Video that builds trust: the work, the people and the town around it.',
  email: 'sixthsensestudiosllc@gmail.com',
  phone: '(973) 820-5511',
  hours: 'By appointment. We come to you.', // no storefront
  area: 'North Jersey',
  // Leave a URL empty to hide that icon.
  socials: {
    instagram: 'https://www.instagram.com/reliable_kev/',
    tiktok: '',
    youtube: '', // coming: channel under One Brick Media
    facebook: 'https://www.facebook.com/profile.php?id=61595018734943',
    linkedin: 'https://www.linkedin.com/in/kevin-moreno-649294161/'
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
    title: 'Podcast / Q&A',
    inline: 'podcasts and Q&As', // how it reads mid-sentence
    slide: 'Your story, in your words',
    short: 'A podcast-style conversation or Q&A, filmed at your business or a local partner venue, then cut into clips.',
    points: [
      'Filmed where you work, or at a local coffee and cocktail bar we partner with',
      'Full episode plus short clips from every recording',
      'Relaxed and conversational, no camera experience needed',
    ],
  },
  {
    id: 'events',
    title: 'Events Coverage',
    slide: 'Events coverage your town will remember',
    short: 'Openings, festivals, town events and ribbon cuttings, captured from start to finish.',
    points: [
      'Grand openings, festivals, fundraisers and town events',
      'A recap edit that captures the energy of the day',
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
  { href: '/drone', label: 'Drone' },
  { href: '/work', label: 'Work' },
  { href: '/diy', label: 'DIY' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/stories', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
