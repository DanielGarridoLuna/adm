function veraddprod(){
    let espacio=document.getElementById('entorno');

    espacio.innerHTML='';
    espacio.innerHTML=`
       <input type="text" placeholder="Producto" id="inproducto" class="form-control m-2">
        <input type="number" placeholder="Precio" id="inprecio" class="form-control m-2">
        <input type="number" placeholder="Existencia" id="incantidad" class="form-control m-2">
        <input type="text" placeholder="URL de la imagen" id="inimagen" class="form-control m-2">
        <select class="form-select m-2" aria-label="Default select example" id="selcategoria">
            <option selected>Categoria</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        <button class="btn btn-primary m-2 w-100" onclick="agregarprod()">Guardar produccto</button>
    `;
}