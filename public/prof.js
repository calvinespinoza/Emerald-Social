var nombre1 = document.getElementById("userNombre");
var nombre2 = document.getElementById("nombre");
var id = document.getElementById("uid");
var email = document.getElementById("email");
var priv = document.getElementById("privados");
var pub = document.getElementById("publicos");
var img = document.getElementById("profile-image1");
var tel = document.getElementById("telefono");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        nombre1.innerText = user.displayName.toUpperCase();
        nombre2.innerText = user.displayName;
        id.innerText = user.uid;
        email.innerText = user.email;
        img.src = user.photoURL;
        tel.innerText = user.tel;
        
        var userRef = firebase.database().ref().child("Usuarios").child(user.uid);
        userRef.child("Mensajes Privados").once('value').then(function (snapshot) {
            priv.innerText = snapshot.val();
        });
        userRef.child("Mensajes Publicos").once('value').then(function (snapshot) {
            pub.innerText = snapshot.val();
        });
    }
});