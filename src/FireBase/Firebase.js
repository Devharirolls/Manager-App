import { initializeApp } from "@react-native-firebase/app";

const firebaseConfig = {
            apiKey: "AIzaSyBcd25IKzEXKBYdZcRut7M-EGmeXDR-tT4",
            authDomain: "manager-b71c7.firebaseapp.com",
            projectId: "manager-b71c7",
            storageBucket: "manager-b71c7.appspot.com",
            messagingSenderId: "794521585494",
            appId: "1:794521585494:web:1b7dee4f45e96c6fdaf8f7",
            databaseURL:"https://manager-b71c7-default-rtdb.firebaseio.com/"
};

// Check if the default Firebase app exists
let firebaseApp;
try {
  firebaseApp = initializeApp.app;
} catch (error) {
  // The default Firebase app doesn't exist
  console.log(error);
}

// Initialize Firebase if the default app doesn't exist
if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

export default firebaseApp;