// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_api_Key,
//   authDomain:process.env.REACT_APP_auth_Domain,
//   projectId:process.env.REACT_APP_project_Id,
//   storageBucket:process.env.REACT_APP_storage_Bucket,
//   messagingSenderId:process.env.REACT_APP_messaging_Sender_Id,
//   appId:process.env.REACT_APP_app_Id,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAh5NjX9C1geYJTgzeRcv0dKOE7eIuKFZw",
  authDomain: "manufacturer-77f59.firebaseapp.com",
  projectId: "manufacturer-77f59",
  storageBucket: "manufacturer-77f59.appspot.com",
  messagingSenderId: "1014544088419",
  appId: "1:1014544088419:web:ddb0bb44a5242792576756"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;