function veraddprod(){
    let espacio=document.getElementById('entorno');

    espacio.innerHTML='';
    espacio.innerHTML=`
 
       <input type="text" placeholder="Producto" id="inproducto" class="form-control m-2">
        <input type="number" placeholder="Precio" id="inprecio" class="form-control m-2">
         <input type="number" placeholder="Precio de Venta" id="inprecioventa" class="form-control m-2">
        <input type="number" placeholder="Existencia" id="incantidad" class="form-control m-2">
        <input type="text" placeholder="URL de la imagen" id="inimagen" class="form-control m-2">
        <select class="form-select m-2" aria-label="Default select example" id="selcategoria">
            <option selected>Categoria</option>
            <option value="Bebida">Bebida</option>
            <option value="Botana">Botana</option>
            <option value="Dulce">Dulce</option>
            <option value="Pan">Pan</option>
          </select>
        <button class="btn btn-primary m-2 w-100" onclick="agregarprod()">Guardar producto</button>
    `;
}

function vermodiprod(){
  let espacio=document.getElementById('entorno');

    espacio.innerHTML='';
    espacio.innerHTML=`
        <input type="text" placeholder="ID del Producto"  onchange="rellenarprod()" id="idproducto" class="form-control m-2">
       <input type="text" placeholder="Producto" id="inproducto" class="form-control m-2">
        <input type="number" placeholder="Precio" id="inprecio" class="form-control m-2">
         <input type="number" placeholder="Precio de Venta" id="inprecioventa" class="form-control m-2">
        <input type="number" placeholder="Existencia" id="incantidad" class="form-control m-2">
        <input type="text" placeholder="URL de la imagen" id="inimagen" class="form-control m-2">
        <select class="form-select m-2" aria-label="Default select example" id="selcategoria">
            <option selected>Categoria</option>
            <option value="Bebida">Bebida</option>
            <option value="Botana">Botana</option>
            <option value="Dulce">Dulce</option>
            <option value="Pan">Pan</option>
          </select>
        <button class="btn btn-warning m-2 w-100" onclick="modiprod()">Actualizar producto</button>
    `;

    let ids=[];
    db.collection("Productos")
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


function vereliprod(){
  let espacio=document.getElementById('entorno');

    espacio.innerHTML='';
    espacio.innerHTML=`
        <input type="text" placeholder="ID del Producto" id="idproducto" class="form-control m-2">
      
        <button class="btn btn-danger m-2 w-100" onclick="eliprod()">Eliminar producto</button>
    `;

    let ids=[];
    db.collection("Productos")
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
