import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAh_LmJSz2RHK9GLWWIefhvkgfajW94JpY",
    authDomain: "edblog-380f6.firebaseapp.com",
    databaseURL: "https://edblog-380f6.firebaseio.com",
    projectId: "edblog-380f6",
    storageBucket: "edblog-380f6.appspot.com",
    messagingSenderId: "248029606336"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;