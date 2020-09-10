import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBn8TyIHViaa07_nIbOcl-SCemRg_C6dtU",
    authDomain: "clone-767ff.firebaseapp.com",
    databaseURL: "https://clone-767ff.firebaseio.com",
    projectId: "clone-767ff",
    storageBucket: "clone-767ff.appspot.com",
    messagingSenderId: "897146731680",
    appId: "1:897146731680:web:ac7d85358dedf45d379dc5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export{db, auth}