var firebaseConfig = {
    apiKey: "AIzaSyDyj3ErJ6044wHrHH23Id8eRrFEdRgp7WI",
    authDomain: "sketchbookv1-f0eee.firebaseapp.com",
    databaseURL: "https://sketchbookv1-f0eee.firebaseio.com",
    projectId: "sketchbookv1-f0eee",
    storageBucket: "sketchbookv1-f0eee.appspot.com",
    messagingSenderId: "106434024174",
    appId: "1:106434024174:web:17d05dd03836c79dbf59ff",
    measurementId: "G-F0F44FP2KF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

   function signUpWithEmail() {
      var email = $("#signup-email").val();
      var password = $("#signup-pw").val();

      if (email === "" || password === "") {
         alert("Required field(s) appear to be null!");
      } else if (email.indexOf("@") === -1) {
         alert("Illegal email address!");
      } else {
         console.log(email);
         console.log(password);

         firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            alert(errorCode + ": " + errorMessage);
         });
      }
   }

   function loginWithEmail() {
      var email = $("#user-email").val();
      var password = $("#user-pw").val();
   
      if (email === "" || password === "") {
         alert("Required field(s) appear to be null!");
      } else if (email.indexOf("@") === -1) {
         alert("Illegal email address!");
      } else {
         console.log(email);
         console.log(password);

         firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {

            var user = result.user;
            console.log(user);

            if (result.user != "") {
               window.location.href = "/main.html"
            } else {
               alert("User doesn't exist, please sign up first!");
            }
            

         }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorCode + ": " + errorMessage);
          });
      }
   }

  
  function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        window.location.href = "/main.html"
        console.log(1);
        console.log(user);

     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorCode + ": " + errorMessage);
     });
  }
