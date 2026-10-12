// Drone clips hosted on the site itself. Make each one with scripts/add-video.sh (it writes
// public/videos/<name>.mp4 plus a <name>.jpg poster), then list it here.
// wide = landscape clip; tall = vertical clip. section picks the heading it appears under.
export type DroneClip = {
  name: string;
  title: string;
  town: string;
  shape: 'wide' | 'tall';
  section: 'homes' | 'city' | 'job';
};

export const DRONE_CLIPS: DroneClip[] = [
  { name: 'tenafly', title: 'Colonial with a creek', town: 'Tenafly', shape: 'wide', section: 'homes' },
  { name: 'woodcliff-lake', title: 'Finished exterior', town: 'Woodcliff Lake', shape: 'wide', section: 'homes' },
  { name: 'bloomfield', title: 'Cape Cod roof and siding', town: 'Bloomfield', shape: 'wide', section: 'homes' },
  { name: 'maywood', title: 'Siding and roof', town: 'Maywood', shape: 'wide', section: 'homes' },
  { name: 'new-milford', title: 'New siding', town: 'New Milford', shape: 'wide', section: 'homes' },
  { name: 'ramsey', title: 'Two-story siding', town: 'Ramsey', shape: 'wide', section: 'homes' },
  { name: 'kinnelon', title: 'Back of the house', town: 'Kinnelon', shape: 'wide', section: 'homes' },
  { name: 'fair-lawn-roof', title: 'Finished roof', town: 'Fair Lawn', shape: 'wide', section: 'homes' },
  { name: 'fair-lawn-side', title: 'Roofline up close', town: 'Fair Lawn', shape: 'wide', section: 'homes' },
  { name: 'north-jersey-ranch', title: 'Ranch, new roof', town: 'North Jersey', shape: 'wide', section: 'homes' },
  { name: 'jc-skyline', title: 'Downtown to the Manhattan skyline', town: 'Jersey City', shape: 'wide', section: 'city' },
  { name: 'jc-park', title: 'Brownstones around the park', town: 'Jersey City', shape: 'wide', section: 'city' },
  { name: 'jc-waterfront', title: 'Toward the waterfront', town: 'Jersey City', shape: 'wide', section: 'city' },
  { name: 'jc-towers', title: 'Between the towers', town: 'Jersey City', shape: 'wide', section: 'city' },
  { name: 'jc-avenue', title: 'Down the avenue', town: 'Jersey City', shape: 'tall', section: 'city' },
  { name: 'jc-street', title: 'Above the bike lanes', town: 'Jersey City', shape: 'tall', section: 'city' },
  { name: 'roof-crew-overhead', title: 'Crew from overhead', town: 'North Jersey', shape: 'tall', section: 'job' },
  { name: 'shingle-install', title: 'Shingles going down', town: 'North Jersey', shape: 'tall', section: 'job' },
  { name: 'ridge-install', title: 'On the ridge', town: 'North Jersey', shape: 'tall', section: 'job' },
  { name: 'mahwah-aerial', title: 'Roofline from above', town: 'Mahwah', shape: 'tall', section: 'job' },
];

// Clip that plays across the top of the Drone page (its .jpg is the still shown while it loads).
// drone-banner is a 21s loop dissolving between Woodcliff Lake, Fair Lawn, Tenafly, Bloomfield
// and New Milford; it ends on its own first frame so the loop is seamless.
export const DRONE_BANNER = 'drone-banner';
