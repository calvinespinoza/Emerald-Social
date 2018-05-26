//window.alert("OKAY");

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var heading = document.getElementById("heading");

var headingRef = firebase.database().ref().child("Heading");

headingRef.on('value', function (datasnapshot) {
    heading.innerText = datasnapshot.val();
});

function submitClick() {
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;

    // firebaseRef.child("Mensaje").set("Value");
    firebaseRef.push().set(messageText);
}