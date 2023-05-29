// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAOJsaEXKaiOv3CKumRPuDXzL3e6f5R2vc",
    authDomain: "kwitter-b8d72.firebaseapp.com",
    databaseURL: "https://kwitter-b8d72-default-rtdb.firebaseio.com",
    projectId: "kwitter-b8d72",
    storageBucket: "kwitter-b8d72.appspot.com",
    messagingSenderId: "625048840906",
    appId: "1:625048840906:web:ae090c12c60543be606233",
    measurementId: "G-8ZK87YENWD"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_room.html";
}

function logout() 
{ 
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html"; 
}