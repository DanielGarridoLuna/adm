const db = firebase.firestore();

function agregarprod(){
    let producto=document.getElementById('inproducto').value;
    let precio=document.getElementById('inprecio').value;
    let precioV=document.getElementById('inprecioventa').value;
    let existencia=document.getElementById('incantidad').value;
    let imagen=document.getElementById('inimagen').value;
    let categoria=document.getElementById('selcategoria').value;

    precioV=parseFloat(precioV);
    precio=parseFloat(precio);
    existencia=parseInt(existencia);
    // Add a new document with a generated id.
db.collection("Productos").add({
  Producto:producto,
  Precio:precio,
  PrecioV:precioV,
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

function verproductos(){
    let espacio=document.getElementById('entorno');

    espacio.innerHTML=`
    <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Precio Venta</th>
        <th>Existencia</th>
        <th>Categoria</th>
      </tr>
    </thead>
    <tbody id="tabla">
    </tbody>
    </table>
    `;

    let conttable=document.getElementById('tabla');
    db.collection("Productos")
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           conttable.innerHTML+=`
            <tr>
                <td>${doc.id}</td>
                <td>${doc.data().Producto}</td>
                <td>$${doc.data().Precio}</td>
                <td>$${doc.data().PrecioV}</td>
                <td>${doc.data().Existencia}</td>}
                <td>${doc.data().Categoria}</td
            </tr>
           `;
        });
    });

}

function rellenarprod(){
    let idprod=document.getElementById('idproducto').value;

    var docRef = db.collection("Productos").doc(idprod);

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.getElementById('inproducto').value= `${doc.data().Producto}`;
            document.getElementById('inprecio').value= `${doc.data().Precio}`;
            document.getElementById('inprecioventa').value= `${doc.data().PrecioV}`;
            document.getElementById('incantidad').value= `${doc.data().Existencia}`;
            document.getElementById('inimagen').value= `${doc.data().Imagen}`;
            document.getElementById('selcategoria').value= `${doc.data().Categoria}`;
        } else {
            alert("Ese id no esta ligado con ningun producto");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function modiprod(){

    let id=document.getElementById('idproducto').value;

    var docRef = db.collection("Productos").doc(id);
    let producto=document.getElementById('inproducto').value;
    let precio=document.getElementById('inprecio').value;
    let precioV=document.getElementById('inprecioventa').value;
    let existencia=document.getElementById('incantidad').value;
    let imagen=document.getElementById('inimagen').value;
    let categoria=document.getElementById('selcategoria').value;


    precioV=parseFloat(precioV);
    precio=parseFloat(precio);
    existencia=parseInt(existencia);


    return docRef.update({
        Producto:producto,
        Precio:precio,
        PrecioV:precioV,
        Existencia:existencia,
        Imagen:imagen,
        Categoria:categoria
    })
    .then(() => {
        alert("Se actualizo correctamente");
    })
    .catch((error) => {
      alert("Error al actualizar el producto: "+ error);
    });

}

function eliprod(){
    let id=document.getElementById('idproducto').value;

    let opciond = confirm("¿Seguro que deseas eliminar el producto");
  
      if (opciond == true) {

        db.collection("Productos").doc(id).delete().then(() => {
            alert("El producto se elimino con exito");
        }).catch((error) => {
            alert("Error al eliminar el producto: "+ error);
        });

        } else {
          alert("No se borro el producto");
        }

    
}