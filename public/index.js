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
    if (mainText != "") {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var ref = firebase.database().ref().child("Mensajes");
                var userRef = firebase.database().ref().child("Usuarios").child(user.uid);
                var radios = document.getElementsByName('options');

                if (radios[0].checked) {
                    userRef.child("Mensajes Publicos").once('value').then(function (snapshot) {
                        var pub = snapshot.val();
                        if (pub == null) {
                            pub = 0;
                        }
                        console.log(pub);
                        userRef.child("Mensajes Publicos").set(pub + 1);
                        ref.push().set({
                            Usuario: user.uid,
                            Mensaje: messageText,
                            Publico: "True"
                        });
                    });
                }
                if (radios[1].checked) {
                    userRef.child("Mensajes Privados").once('value').then(function (snapshot) {
                        var priv = snapshot.val();
                        if (priv == null) {
                            priv = 0;
                        }
                        console.log(priv);
                        userRef.child("Mensajes Privados").set(priv + 1);
                        ref.push().set({
                            Usuario: user.uid,
                            Mensaje: messageText,
                            Publico: "False"
                        });
                    });
                }

            } else {
                // No user is signed in.
            }
        });
        $('#mainText').val('');
    }
}

$(document).ready(function () {

    var messageRef = firebase.database().ref().child("Mensajes");

    messageRef.on("child_added", snap => {
        var id = snap.child("Usuario").val();
        var userRef = firebase.database().ref().child("Usuarios").child(id).child("Name");

        userRef.once('value').then(function (snapshot) {
            name = snapshot.val();
            console.log(name);
            var message = snap.child("Mensaje").val();
            var public = snap.child("Publico").val();

            firebase.auth().onAuthStateChanged(function (user) {

                if (user.uid == id) {
                    var string = "<div class='demo-card-wide mdl-card mdl-shadow--2dp'>"
                        + "<div class='mdl-card__title' style='background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)'>"
                        + "<h2 class='mdl-card__title-text'>"
                        + message + "</h2></div><div class='mdl-card__supporting-text'>"
                        + name + " (You) </div></div>"

                    $("#feed").append(string);
                } else {
                    if (public == "True") {
                        var string = "<div class='demo-card-wide mdl-card mdl-shadow--2dp'>"
                            + "<div class='mdl-card__title'>"
                            + "<h2 class='mdl-card__title-text'>"
                            + message + "</h2></div><div class='mdl-card__supporting-text'>"
                            + name + "</div></div>"

                        $("#feed").append(string);
                    }
                }
            });
        });

    });
});

