import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuzPFKl71Rm85OwqWDXbq_CRGAXW_3xZk",
  authDomain: "cotd-fr.firebaseapp.com",
  databaseURL: "https://cotd-fr.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This a named export
export { firebaseApp };

// This is a default export
export default base;
