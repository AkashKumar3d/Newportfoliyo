import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5ggNxWO1kZN9P3k7gaWQu5mSHje9VQLo",
  authDomain: "akashit-portfoliyo.firebaseapp.com",
  projectId: "akashit-portfoliyo",
  storageBucket: "akashit-portfoliyo.appspot.com",
  messagingSenderId: "976427965000",
  appId: "1:976427965000:web:7ff98fd8140887f03dd67d"
};

 export const app = initializeApp(firebaseConfig);
export const db=getFirestore()