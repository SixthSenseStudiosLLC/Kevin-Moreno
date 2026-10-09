// Drone clips hosted on the site itself. Put the compressed .mp4 and its poster .jpg in
// public/videos/ and list them here. When this list has clips, the Drone page shows them
// instead of the Instagram posts below.
export type DroneClip = { file: string; poster: string; title: string; town?: string };

export const DRONE_CLIPS: DroneClip[] = [];

// Shown only while DRONE_CLIPS is empty.
export const DRONE_POSTS = [
  'https://www.instagram.com/p/DeNfspCMaXR/',
  'https://www.instagram.com/p/DeKY3VlJnwO/',
  'https://www.instagram.com/p/Dd434UIstUs/',
  'https://www.instagram.com/p/Ddj-1aZJZqo/',
  'https://www.instagram.com/p/DdWvAO2xpol/',
  'https://www.instagram.com/p/DdHv_S-JX-y/',
  'https://www.instagram.com/p/Dc6MgZ_x0J5/',
  'https://www.instagram.com/p/Dc1gj-dpY0S/',
];
