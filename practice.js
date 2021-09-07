// Your web app's Firebase configuration 
var firebaseConfig = {
     apiKey: "AIzaSyBpebM8fj6owvBJMV4rV41MCqKG8cV82oE", 
     authDomain: "kwitter-8562d.firebaseapp.com", 
     databaseURL: "https://kwitter-8562d-default-rtdb.firebaseio.com", 
     projectId: "kwitter-8562d", 
     storageBucket: "kwitter-8562d.appspot.com", 
     messagingSenderId: "44978014313", 
     appId: "1:44978014313:web:ec13fd8e18ab3db89ebaf8" };
      // Initialize Firebase const app = initializeApp(firebaseConfig);

   
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}