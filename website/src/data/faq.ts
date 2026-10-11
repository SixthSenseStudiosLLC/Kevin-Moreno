import { FOUNDED, GEAR, TURNAROUND } from './business';

// Questions people ask before booking. Shown on the Services page (/services#faq).
export const FAQ = [
  {
    q: 'How long have you been doing this?',
    a: `Since ${FOUNDED}. I've spent the last few years filming towns, local businesses and trade companies across North Jersey.`,
  },
  {
    q: 'How long until I get my video?',
    a: `Most projects are delivered in ${TURNAROUND}, depending on the scope of work. Bigger projects get a timeline agreed before we start.`,
  },
  {
    q: 'How much does it cost?',
    a: 'Straightforward shoots are priced by the day. Bigger, more hands-on projects like brand films, podcast series and monthly content get a custom quote, so you only pay for what the project actually needs. Tell me what you have in mind and I will send a clear number.',
  },
  {
    q: 'What gear do you use?',
    a: `${GEAR.cameras} with ${GEAR.support.toLowerCase()}, plus a ${GEAR.drone} for aerial shots. Two cameras means interviews and podcasts are covered from two angles.`,
  },
  {
    q: 'Where do you film?',
    a: 'All over North Jersey: Bergen, Passaic, Essex and Morris County. If you are a little outside that, ask.',
  },
  {
    q: 'Do I need to be comfortable on camera?',
    a: 'No. I direct the shoot and keep it relaxed, so you can just talk about what you know. No script and no camera experience needed.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'We start with a free planning call. I learn about your business and what you want people to know, then send you a plan and a price.',
  },
  {
    q: 'Can I combine services?',
    a: 'Yes, and most clients do. A podcast episode can feed a month of clips, and event coverage can turn into a brand film. Drone footage can be added to any of them.',
  },
];
