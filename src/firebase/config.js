import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCs7gZd2hADN0ugVxP3krD4oRqEN9slvpk",
  authDomain: "vue3-form.firebaseapp.com",
  projectId: "vue3-form",
  storageBucket: "vue3-form.appspot.com",
  messagingSenderId: "853300975733",
  appId: "1:853300975733:web:7a518e4aeb28820a94c03c"
};
  
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  
  export{db,auth}