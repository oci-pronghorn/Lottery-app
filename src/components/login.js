import React from "react";
import * as firebase from "firebase";
import { googleAuthProvider, database } from "../firebase/firebase.js";

const signIn = () => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

export default signIn;
