import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";
=======
import {getFirestore} from '@firebase/firestore'
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

>>>>>>> nikhil
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCevfjxYh5AOuPpzdQmiqTJOyoDJHZRxRQ",
  authDomain: "salarymanagementapp-bf7be.firebaseapp.com",
  projectId: "salarymanagementapp-bf7be",
  storageBucket: "salarymanagementapp-bf7be.appspot.com",
  messagingSenderId: "278630086267",
  appId: "1:278630086267:web:937597dc30e7b764dbd4de"
};

<<<<<<< HEAD
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
=======
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const storage = getStorage(app);

export {db,storage};
>>>>>>> nikhil
