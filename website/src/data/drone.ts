// Drone clips hosted on the site itself. Make each one with scripts/add-video.sh (it writes
// public/videos/<name>.mp4 plus a <name>.jpg poster), then list it here.
// wide = landscape aerial tour; tall = vertical clip from on the job.
export type DroneClip = { name: string; title: string; town: string; shape: 'wide' | 'tall' };

export const DRONE_CLIPS: DroneClip[] = [
  { name: 'tenafly', title: 'Colonial with a creek', town: 'Tenafly', shape: 'wide' },
  { name: 'woodcliff-lake', title: 'Finished exterior', town: 'Woodcliff Lake', shape: 'wide' },
  { name: 'bloomfield', title: 'Cape Cod roof and siding', town: 'Bloomfield', shape: 'wide' },
  { name: 'maywood', title: 'Siding and roof', town: 'Maywood', shape: 'wide' },
  { name: 'new-milford', title: 'New siding', town: 'New Milford', shape: 'wide' },
  { name: 'ramsey', title: 'Two-story siding', town: 'Ramsey', shape: 'wide' },
  { name: 'kinnelon', title: 'Back of the house', town: 'Kinnelon', shape: 'wide' },
  { name: 'fair-lawn-roof', title: 'Finished roof', town: 'Fair Lawn', shape: 'wide' },
  { name: 'fair-lawn-side', title: 'Roofline up close', town: 'Fair Lawn', shape: 'wide' },
  { name: 'north-jersey-ranch', title: 'Ranch, new roof', town: 'North Jersey', shape: 'wide' },
  { name: 'roof-crew-overhead', title: 'Crew from overhead', town: 'North Jersey', shape: 'tall' },
  { name: 'shingle-install', title: 'Shingles going down', town: 'North Jersey', shape: 'tall' },
  { name: 'ridge-install', title: 'On the ridge', town: 'North Jersey', shape: 'tall' },
  { name: 'mahwah-aerial', title: 'Roofline from above', town: 'Mahwah', shape: 'tall' },
];

// Clip that plays across the top of the Drone page (its .jpg is the still shown while it loads).
export const DRONE_BANNER = 'woodcliff-lake-banner';
