import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: "https://back-end-cf6f5.firebaseio.com",
 })
  .database()