import firebase from 'firebase'

export const booksRef = firebase
  .database()
  .ref('/users/' + firebase.auth().currentUser.uid + '/books')
