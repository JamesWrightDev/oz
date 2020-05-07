import firebase from 'firebase'
const config = {
      apiKey: "AIzaSyDvnxuz91QvigH3g8Rw84jCFP9RRxdnwVY",
      authDomain: "ozfb-83ec7.firebaseapp.com",
      databaseURL: "https://ozfb-83ec7.firebaseio.com",
      projectId: "ozfb-83ec7",
      storageBucket: "ozfb-83ec7.appspot.com",
      messagingSenderId: "233611072366",
      appId: "1:233611072366:web:6dc5b24717ff2d0014277f",
      measurementId: "G-YMLF0DYS9K"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export default firebase;