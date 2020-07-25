import * as firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDgKVxrtI1vGEwCrxulpv6IS5Cum3bgE3k",
    authDomain: "course-scheduler-7510d.firebaseapp.com",
    databaseURL: "https://course-scheduler-7510d.firebaseio.com",
    projectId: "course-scheduler-7510d",
    storageBucket: "course-scheduler-7510d.appspot.com",
    messagingSenderId: "537642069863",
    appId: "1:537642069863:web:f231b8526fc40b335ec9c2",
    measurementId: "G-FCWEEZNR0T"
  };

  export const app = firebase.initializeApp(firebaseConfig);
