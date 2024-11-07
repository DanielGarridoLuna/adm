function agregardeudor(){
    let deudor=document.getElementById('inempleado').value;
    let deuda=document.getElementById('indeuda').value;

    deuda=parseFloat(deuda);

    // Add a new document with a generated id.
    db.collection("Deudas").doc(deudor).set({
  Deuda:deuda
})
.then((docRef) => {
    alert("Se añadio al empleado correctamente");
})
.catch((error) => {
    alert("Error al añadir el producto:"+error);
});

}

function verdeudas(){
    let espacio=document.getElementById('entorno');

    espacio.innerHTML=`
          <div class="d-flex flex-row justify-content-evenly flex-wrap" id="cartas">
            
          </div>
    `;

    let espaciocartas=document.getElementById('cartas');
    espaciocartas.innerHTML='';

    db.collection("Deudas")
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            espaciocartas.innerHTML+=`
            <div class="card m-2" >
                    <div class="card-body">
                    <h5 class="card-title">${doc.id}</h5>

                    <div class="d-flex flex-row"> 
                     <h5 class="card-title">Deuda:</h5>
                     <p class="card-text">$${doc.data().Deuda}</p>
                    </div>
                      
                    
                    </div>
            </div>
         `;
        });
    });


}

function rellenardeuda(){
    let idprod=document.getElementById('inempleado').value;

    var docRef = db.collection("Deudas").doc(idprod);

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.getElementById('indeuda').value= `${doc.data().Deuda}`;
        } else {
            alert("Ese empleado no tiene deudas");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function actualizardeuda(){
    let id=document.getElementById('inempleado').value;
    var docRef = db.collection("Deudas").doc(id);
    let deuda=document.getElementById('indeuda').value;

    deuda=parseFloat(deuda);

    return docRef.update({
        Deuda:deuda
    })
    .then(() => {
        alert("Se actualizo correctamente");
    })
    .catch((error) => {
      alert("Error al actualizar la deuda: "+ error);
    });
}

function eliminardeudor(){
    let id=document.getElementById('idproducto').value;

    let opciond = confirm("¿Seguro que deseas quitar al empleado?");
  
      if (opciond == true) {
        
        db.collection("Deudas").doc(id).delete().then(() => {
            alert("Se retiro al empleado");
        }).catch((error) => {
            alert("Error al eliminar el producto: "+ error);
        });

        } else {
          alert("No se quito al empleado");
        }
}