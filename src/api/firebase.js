import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getDatabase, ref, get, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  return signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에
    const updatedUser = user ? await adminUser(user) : null;

    callback(updatedUser);
  });
}

async function adminUser(user) {
  // 2. 사용자가 어드민 권한을 가지고 있는지 확인!
  //3. {...user, isAdmin: true/false}

  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addNewMaterial(material, materialImgs) {
  const id = uuid();
  set(ref(database, `materials/${id}`), {
    ...material,
    id: id,
    img1: materialImgs[0],
    img2: materialImgs[1],
  });
}

export async function getMaterials() {
  return get(ref(database, 'materials')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
