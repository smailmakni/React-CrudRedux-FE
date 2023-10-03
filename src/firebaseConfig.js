import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyDiorS8bh4JVsVXMkKVmUkCGjKr3bqq6qg",
authDomain: "reduximages-c1a20.firebaseapp.com",
projectId: "reduximages-c1a20",
storageBucket: "reduximages-c1a20.appspot.com",
messagingSenderId: "950777876802",
appId: "1:950777876802:web:f0e5dd188bfa53681c38db"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;