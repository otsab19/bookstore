import firebase from "firebase"

const currentUserID = firebase.auth().currentUser.uid;

export const booksRef = firebase.database().ref("/users/"+currentUserID+'/books');