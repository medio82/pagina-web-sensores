 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkkmUx8y6t23e9-sigDBpdjxpaWt5ExZc",
    authDomain: "iot-conexion-wifi-arduino.firebaseapp.com",
    databaseURL: "https://iot-conexion-wifi-arduino.firebaseio.com",
    projectId: "iot-conexion-wifi-arduino",
    storageBucket: "iot-conexion-wifi-arduino.appspot.com",
    messagingSenderId: "788512243228",
    appId: "1:788512243228:web:f8c7359baa950d04c169d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("temperatura").innerHTML = data.temperatura;
  	document.getElementById("humedad").innerHTML = data.humedad;
  	document.getElementById("luz").innerHTML = data.luz;
  	document.getElementById("gas").innerHTML = data.gas;
  	document.getElementById("led").innerHTML = data.EstadoLED;
  });
  
  function encender() {
    firebase.database().ref('/').child('EstadoLED').set("1");
    
	}

   function apagar() {
  	firebase.database().ref('/').child('EstadoLED').set("0");
   }

	
