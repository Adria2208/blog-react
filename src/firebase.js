import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCaF6TkK6k7RrQkQ2Oxx5qrSFVBsPV6ZF0",
    authDomain: "react-blog-9295e.firebaseapp.com",
    databaseURL: "https://react-blog-9295e-default-rtdb.firebaseio.com",
    projectId: "react-blog-9295e",
    storageBucket: "react-blog-9295e.appspot.com",
    messagingSenderId: "263853646173",
    appId: "1:263853646173:web:c14fcfd5c0a7724ab388b4"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export default firebase