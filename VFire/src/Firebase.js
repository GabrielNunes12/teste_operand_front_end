import firebase from 'firebase';

const firebaseConfig  = {
        apiKey: "AIzaSyBDWnEjj0OJayCxR4kJl4iDn9LocDGVcw8",
        authDomain: "operand-teste-front-end.firebaseapp.com",
        databaseURL: "https://operand-teste-front-end.firebaseio.com",
        projectId: "operand-teste-front-end",
        storageBucket: "operand-teste-front-end.appspot.com",
        messagingSenderId: "648371507080",
        appId: "1:648371507080:web:6030b3583a933b69e2b43d",
        measurementId: "G-RN0RCH48Y4"
    }
    const firebaseApp = firebase.initializeApp(firebaseConfig)

    export const db = firebaseApp.database()
    export const namesRef = db.ref('names');

