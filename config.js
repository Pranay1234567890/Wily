import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyBZ1naacHxhbQJrxV917Kar3jSySCGAe5Y",
    authDomain: "finalwillyapp.firebaseapp.com",
    projectId: "finalwillyapp",
    storageBucket: "finalwillyapp.appspot.com",
    messagingSenderId: "118336766552",
    appId: "1:118336766552:web:cbbcc292693a028368402d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export default firebase.firestore();