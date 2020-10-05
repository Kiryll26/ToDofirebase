const firebaseConfig = {
	apiKey: "AIzaSyA20i4h6SbC6677tQZISptp09REHLXCkDM",
	authDomain: "todofunction-59e93.firebaseapp.com",
	databaseURL: "https://todofunction-59e93.firebaseio.com",
	projectId: "todofunction-59e93",
	storageBucket: "todofunction-59e93.appspot.com",
	messagingSenderId: "97183160063",
	appId: "1:97183160063:web:ab7bb02ec3d51c24dbdeca",
	measurementId: "G-Y9NVRSYLDL"
};
import * as firebase from 'firebase';
import database from "firebase/database";
import auth from "firebase/auth";
firebase.initializeApp(firebaseConfig);
export  default firebase.firestore();