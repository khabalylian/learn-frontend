import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAd-_Ul1mfk6R8HdK-jq2yumlK4TyyDfKw',
    authDomain: 'learn-frontend-fd632.firebaseapp.com',
    projectId: 'learn-frontend-fd632',
    storageBucket: 'learn-frontend-fd632.appspot.com',
    messagingSenderId: '624958409911',
    appId: '1:624958409911:web:2ea4462cdbee006ca59132',
    measurementId: 'G-BEMPD0LXD6'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }