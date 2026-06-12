## Setup

- Set up a firebase project
- Set up a web app in the new firebase project
- Replace the exported config object in src/firebase.ts with the one provided while creating the web app
- Initialize firestore with test permission rules
- Initialize authentication with Google SSO

- Install dependencies
  `npm run init`

- Run the cms
  `npm run cms`

- In the cms, add a page in the Pages collection with a slug value of 'home'.
  Without this, the home page will not load.

- In a separate terminal, run the app
  `npm run dev`
