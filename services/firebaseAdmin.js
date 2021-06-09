import admin from 'firebase-admin'
import serviceAccount from '../secrets.json'

export const verifyIdToken = (token) => {
    if(!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            //databaseURL: "https://nextjs-and-firebase-default-rtdb.firebaseio.com/",
        });
    }
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        })
};