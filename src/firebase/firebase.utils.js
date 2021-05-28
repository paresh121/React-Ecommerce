import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAxBwPy5IhAZoN8368ywOa2md1iGiJCXYg",
    authDomain: "fashion-ground.firebaseapp.com",
    projectId: "fashion-ground",
    storageBucket: "fashion-ground.appspot.com",
    messagingSenderId: "1080816438786",
    appId: "1:1080816438786:web:ada5002c809bf19e5a211b",
    measurementId: "G-M8XWSP1M1F"
  };

firebase.initializeApp(firebaseConfig);
var db =firebase.firestore();
export const createUserProfileDocument= async (userAuth, additionalData)=>{
  if(!userAuth) return;
  var userRef = db.doc(`/users/${userAuth.uid}`);
  var snapShot=await userRef.get();
  console.log(snapShot);
  if(!snapShot.exists){
    const { displayName, email} =userAuth;
    const createdAt=new Date();
    try {
      console.log('doinggg');
      await db.collection('users').doc('SF').set({
        'Name':displayName,'Email': email, 'Date': createdAt, ... additionalData
      })
      
    } catch (error) {
      console.log("error creating user");
    }
  }
  return userRef;
}
export const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);