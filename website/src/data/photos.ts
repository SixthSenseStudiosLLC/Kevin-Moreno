// Photo shown in each service section on the homepage (public/images/<file>).
// These are stand-in stills pulled from Kev's footage. Swap in real photos by replacing the files
// (keep the names) or pointing `src` at a new file.
export const SERVICE_PHOTOS: Record<string, { src: string; alt: string }> = {
  'monthly-content': { src: '/images/photo-monthly-content.jpg', alt: 'A vendor behind his branded bar at an event' },
  podcast: { src: '/images/photo-podcast.jpg', alt: 'A business owner speaking during a sit-down interview' },
  events: { src: '/images/photo-events.jpg', alt: 'Guests gathered on a patio at a garden party, seen from the drone' },
  projects: { src: '/images/photo-projects.jpg', alt: 'Flying the drone on location at an event' },
};
