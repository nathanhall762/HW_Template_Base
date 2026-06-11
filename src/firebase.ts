import { getAnalytics } from 'firebase/analytics';
import { initializeApp, getApps, getApp } from 'firebase/app';
import type { DocumentData } from 'firebase/firestore';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';

// export const firebaseConfig = {
//   apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
//   authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
//   measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

export const firebaseConfig = {
  apiKey: 'AIzaSyCtRObgRwLfVC2h1XigbP7v7TZ-pB2I4yQ',
  authDomain: 'fart-stack-test.firebaseapp.com',
  projectId: 'fart-stack-test',
  storageBucket: 'fart-stack-test.firebasestorage.app',
  messagingSenderId: '387040268558',
  appId: '1:387040268558:web:dea070943fbfd942c8875f',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export function initAnalytics() {
  if (window !== undefined) {
    getAnalytics(app);
  }
}

export const getData = async (
  collectionName: string,
  slug?: string
): Promise<DocumentData[]> => {
  let q;

  if (slug) {
    // If we're passing a url slug, that means we are getting a Page from the Page collection
    // If a category filter is provided, create a query with a where filter
    q = query(collection(db, collectionName), where('slug', '==', slug));
  } else {
    // Otherwise, we are getting the business information
    q = collection(db, collectionName);
  }

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => doc.data());

  return data;
};
