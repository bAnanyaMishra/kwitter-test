var firebaseConfig = {
      apiKey: "AIzaSyBb2QSF5rH1z0o9mBMLOVwWEth5BRV8kSE",
      authDomain: "game-ref-13b58.firebaseapp.com",
      databaseURL: "https://game-ref-13b58-default-rtdb.firebaseio.com",
      projectId: "game-ref-13b58",
      storageBucket: "game-ref-13b58.appspot.com",
      messagingSenderId: "1014929691532",
      appId: "1:1014929691532:web:77f2c630ec91914357bca9",
      measurementId: "G-3YG8T8W0NE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names)
      row = "<div class='room_name' id="+Room_names+"onclick = 'rtrn(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}

getData();

function rtrn(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
