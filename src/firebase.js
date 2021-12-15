import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyAQg2lG8g9YxR7q0jrg92XJtDw6XHhfSJA',
		authDomain: 'unichat-7504c.firebaseapp.com',
		projectId: 'unichat-7504c',
		storageBucket: 'unichat-7504c.appspot.com',
		messagingSenderId: '416997454231',
		appId: '1:416997454231:web:7381a4ca437351bc5a14d2',
	})
	.auth()
