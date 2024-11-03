function login(){

    let email=document.getElementById('user').value;
    let password=document.getElementById('pass').value;

 
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {


    window.open("main.html", "_self");

  })
  .catch((error) => {
 alert("Error al iniciar sesión:"+error);
  });

}

function logout(){

}