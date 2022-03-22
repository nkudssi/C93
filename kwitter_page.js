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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData(){
    firebase.database().ref("/"+ room_name).on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose"){
                firebase_message_id = childKey;
                message_data = childData;
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
                message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
                like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
                rue = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;

            }
        });
    });
}
getData();