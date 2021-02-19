import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxsxnYw884Xwy52GK8bK0GtA3Jgcq2A9c",
  authDomain: "talktive-6c393.firebaseapp.com",
  projectId: "talktive-6c393",
  storageBucket: "talktive-6c393.appspot.com",
  messagingSenderId: "71011831049",
  appId: "1:71011831049:web:f66e45d099cade118517d8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider };
export default db;