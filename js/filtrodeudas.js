function veradddeudor(){
    let espacio=document.getElementById('entorno');

    espacio.innerHTML='';
    espacio.innerHTML=`
       <input type="text" placeholder="Nombre del Empleado" id="inempleado" class="form-control m-2">
        <input type="number" placeholder="Deuda inicial" id="indeuda" class="form-control m-2">
        <button class="btn btn-primary m-2 w-100" onclick="agregardeudor()">Agregar Empleado</button>
    `;
}

function vermodideuda(){
    let espacio=document.getElementById('entorno');
  
      espacio.innerHTML='';
      espacio.innerHTML=`
        <input type="text" placeholder="Nombre del Empleado" onchange="rellenardeuda()" id="inempleado" class="form-control m-2">
        <input type="number" placeholder="Deuda" id="indeuda" class="form-control m-2">
        <button class="btn btn-warning m-2 w-100" onclick="actualizardeuda()">Actulizar Deuda</button>
      `;
  
      let nombres=[];
      db.collection("Deudas")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
             nombres.push(doc.id);
          });
      }
      
      )
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
  
  
      $("#inempleado" ).autocomplete({
          source: nombres,
          minLength: 3
        });    
  
  }

function verelideuda(){
    let espacio=document.getElementById('entorno');
  
      espacio.innerHTML='';
      espacio.innerHTML=`
          <input type="text" placeholder="Nombre del Empleado" id="idproducto" class="form-control m-2">
        
          <button class="btn btn-danger m-2 w-100" onclick="eliminardeudor()">Quitar Empleado</button>
      `;
  
      let ids=[];
      db.collection("Deudas")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
             ids.push(doc.id);
          });
      }
      
      )
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
  
  
      $("#idproducto" ).autocomplete({
          source: ids,
          minLength: 3
        });    
  
  }
  