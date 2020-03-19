// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyCX-oPHwlu_uEhrNYTlU8ZcFDPaTKNJKOQ",
  authDomain: "gdp-app-dbb67.firebaseapp.com",
  databaseURL: "https://gdp-app-dbb67.firebaseio.com",
  projectId: "gdp-app-dbb67",
  storageBucket: "gdp-app-dbb67.appspot.com",
  messagingSenderId: "483028094395",
  appId: "1:483028094395:web:05b54aa719d10231ef089e",
  measurementId: "G-67DHJ32WL0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

var messagesRef = firebase.database().ref('ratings');


document.getElementById('ratingss').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var ratingf = getInputVal('star');
  var comments = getInputVal('comments');
  
  saveMessage(ratingf,comments);
  

  document.getElementById('ratingss').reset();
}
function getInputVal(id) {
  return document.getElementById(id).value;

}


function saveMessage(star5,comments) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    star: star5,
    comments:comments,
    
  });
}
