const db = firebase.firestore();

function agregarprod(){
    let producto=document.getElementById('inproducto').value;
    let precio=document.getElementById('inprecio').value;
    let existencia=document.getElementById('incantidad').value;
    let imagen=document.getElementById('inimagen').value;
    let categoria=document.getElementById('selcategoria').value;

    precio=parseFloat(precio);
    existencia=parseInt(existencia);
    // Add a new document with a generated id.
db.collection("Productos").add({
  Producto:producto,
  Precio:precio,
  Existencia:existencia,
  Imagen:imagen,
  Categoria:categoria

})
.then((docRef) => {
    alert("Se añadio el producto correctamente");
})
.catch((error) => {
    alert("Error al añadir el producto:"+error);
});

}