var firebaseConfig = { 
      apiKey: "AIzaSyAsPVXCVYh7BjZNw9WyVRMKFtpUN8nsc70", 
      authDomain: "kwitter-d0987.firebaseapp.com", 
      databaseURL: "https://kwitter-d0987-default-rtdb.firebaseio.com", 
      projectId: "kwitter-d0987", 
      storageBucket: "kwitter-d0987.appspot.com", 
      messagingSenderId: "836928825353", 
      appId: "1:836928825353:web:263f165a621019c81030d8", 
      measurementId: "G-93PKX92D9G" };
 // Initialize Firebase 
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
    
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}