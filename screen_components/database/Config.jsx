import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSsJ_3tTZCK2r_Hw-eXnUnIR5NfO70m20",
  authDomain: "crm-database-7a960.firebaseapp.com",
  projectId: "crm-database-7a960",
  storageBucket: "crm-database-7a960.appspot.com",
  messagingSenderId: "945935683545",
  appId: "1:945935683545:web:0d9986101475ad584a93c8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { firebase };

