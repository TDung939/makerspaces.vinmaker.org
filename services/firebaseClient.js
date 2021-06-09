import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCT2Oi5wJAdbrEBJsNZfqiG62rZt9xL1js",
    authDomain: "vinuni-makerspace-network.firebaseapp.com",
    projectId: "vinuni-makerspace-network",
    storageBucket: "vinuni-makerspace-network.appspot.com",
    messagingSenderId: "763137464634",
    appId: "1:763137464634:web:fc2225101bac6f8f735803",
    measurementId: "G-50CQ5E3PR9"
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        console.log('Firebase was successfully init.')
    }
}