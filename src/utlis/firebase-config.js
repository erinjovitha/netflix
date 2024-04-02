
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGG7OLDQKk6zrY4CxBhZ2PXFxLKrWHV2g",
  authDomain: "react-netflix-76fc7.firebaseapp.com",
  projectId: "react-netflix-76fc7",
  storageBucket: "react-netflix-76fc7.appspot.com",
  messagingSenderId: "906664932270",
  appId: "1:906664932270:web:8509ef4bd0d0d3ff0b8e3f",
  measurementId: "G-Q96VLJGFRQ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);