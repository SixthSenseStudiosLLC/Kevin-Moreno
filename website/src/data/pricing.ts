// Set shoot rates (all-in: filming plus edited video). Shown on the Services page and in the FAQ.
export const EDITS = {
  long: 'One long-form video (up to 10 minutes) for YouTube',
  clips: 'Three short clips (30–60 seconds, vertical) for Instagram, TikTok and Reels',
};

export const SHOOT_RATES = [
  {
    name: 'Half day',
    price: '$500',
    time: 'Up to 4 hours on site',
    summary: 'We come out and capture what is happening: your event, your property, your space, your work.',
    includes: ['Filming at one location'],
    choice: [EDITS.long, EDITS.clips], // the client picks one
  },
  {
    name: 'Full day',
    price: '$1,100',
    time: 'Up to 8 hours on site',
    summary: 'A little planning up front, then we film your business and sit down with you to ask a few questions.',
    includes: ['A short planning call before the shoot', 'Filming your business at one location', 'A sit-down Q&A with the owner', EDITS.long, EDITS.clips],
  },
  {
    name: 'Drone add-on',
    price: '+$300',
    time: 'Added to a half or full day',
    summary: 'Aerial footage of your property, building or event, worked into your edits.',
    includes: [],
  },
] as { name: string; price: string; time: string; summary: string; includes: string[]; choice?: string[] }[];

export const RATE_INCLUDES = [
  'Two cameras, lenses, tripods, lighting and mics',
  'Licensed music in every edit',
  'One round of revisions',
  'Raw footage available on request',
  'Delivery in 2–3 weeks',
];

export const NOT_INCLUDED = [
  'Scripts, storyboards or multi-day shoots',
  'Voiceover, captions or motion graphics',
  'More than one location, or more videos than listed',
  'Extra revision rounds or time beyond your booked hours',
];

export const RATE_TERMS = [
  'Rates are set, so every client gets the same fair price.',
  'Anything beyond what is listed is quoted before work begins.',
  'Rush delivery is not offered.',
];
