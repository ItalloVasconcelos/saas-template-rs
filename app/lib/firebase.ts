import {cert, getApps, initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
//import { getStorage } from "firebase-admin/storage";
import "server-only"

// if(!process.env.FIREBASE_PRIVATE_KEY_BASE64) {
//     throw new Error("FIREBASE_PRIVATE_KEY_BASE64 is not set!");
// }


export const firebaseCert = cert ({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY_BASE64,
});

if(!getApps().length) {
    initializeApp({
        credential: firebaseCert,
        //storageBucket: process.env.FIREBASE_STORAGE_Bucket,
    });
}


export const db = getFirestore();
//export const storage = getStorage().bucket();
