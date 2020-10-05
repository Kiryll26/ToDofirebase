const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
};
import * as firebase from 'firebase';
import database from "firebase/database";
import auth from "firebase/auth";
firebase.initializeApp(firebaseConfig);
export  default firebase.firestore();
