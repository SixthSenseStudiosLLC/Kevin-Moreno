import { FOUNDED, GEAR, TURNAROUND } from './business';
import { SHOOT_RATES } from './pricing';

const [half, full, drone] = SHOOT_RATES;

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
    a: `Shoot rates are set: a half day (up to 4 hours) is ${half.price}, a full day (up to 8 hours) is ${full.price}, and adding drone footage is ${drone.price.replace("+", "")} more. Each includes filming and one edited video with music. Brand films, the podcast and monthly content get a custom quote.`,
  },
  {
    q: 'Do I get the raw footage?',
    a: 'Yes, on request. Your rate includes one edited video with music, and the raw footage is yours if you ask for it.',
  },
  {
    q: 'Can I get my video faster?',
    a: `Every project gets the same care, so edited videos are delivered in ${TURNAROUND}. Rush delivery is not offered.`,
  },
  {
    q: 'Can I add more videos or hours?',
    a: 'Yes. Anything beyond what is included, like extra videos, extra hours or extra revisions, is quoted before any work begins, so you always know the price up front.',
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
