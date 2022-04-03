
var firebaseConfig = {
      apiKey: "AIzaSyBGKXgdK0-SCTYEzb6FXgqAGLGz_aY_JNU",
      authDomain: "kwitter-24a12.firebaseapp.com",
      databaseURL: "https://kwitter-24a12-default-rtdb.firebaseio.com",
      projectId: "kwitter-24a12",
      storageBucket: "kwitter-24a12.appspot.com",
      messagingSenderId: "843240914914",
      appId: "1:843240914914:web:8b250eb27ad475628f83bb"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
  function addUser()
  {
      u1 = document.getElementById("user_name").value;
      firebase.database().ref("/").child(u1).update({
          purpose : "adding user"
      });
  }

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child("room_name").update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
        window.location = "kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       snapshot.forEach(function(childSnapshot)
        {
              childkey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
        });
    });
       
       
       
       
       
  
       //End code
       });}
  getData();
  
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html"; 
  }
  
  function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";   
  }