//window.alert("OKAY");

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var heading = document.getElementById("heading");

/*
var headingRef = firebase.database().ref().child("Heading");

headingRef.on('value', function (datasnapshot) {
    heading.innerText = datasnapshot.val();
});
*/

function submitClick() {
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;

    // firebaseRef.child("Mensaje").set("Value");
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var ref = firebase.database().ref().child("Mensajes");

            ref.push().set({
                Usuario: user.uid,
                Mensaje: messageText
            });
        } else {
            // No user is signed in.
        }
    });
    messageText.textContent = "";
}

$(document).ready(function () {

    var messageRef = firebase.database().ref().child("Mensajes");

    messageRef.on("child_added", snap => {
        var id = snap.child("Usuario").val();
        var userRef = firebase.database().ref().child("Usuarios").child(id).child("Name");
        userRef.on('value', function (datasnapshot) {
            var name = datasnapshot.val();

        });

        var message = snap.child("Mensaje").val();

        var string = "<div class='demo-card-wide mdl-card mdl-shadow--2dp'>"
            + "<div class='mdl-card__title'>"
            + "<h2 class='mdl-card__title-text'>"
            + message + "</h2></div><div class='mdl-card__supporting-text'>"
            + id + "</div></div>"

        $("#feed").append(string);
    });
});

