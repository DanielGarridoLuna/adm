function vercorterapido(){
    let FECHA;
    const hoy = new Date();
  
    let day = hoy.getDate();
    let month = hoy.getMonth() + 1;
    let year = hoy.getFullYear();
  
    if(month < 10){
        if(day<10){
          FECHA=year+"-0"+month+"-0"+day;
        }else{
          FECHA=year+"-0"+month+"-"+day;
        }
     }else{
      if(day<10){
        FECHA=year+"-"+month+"-0"+day;
      }else{
        FECHA=year+"-"+month+"-"+day;
      }
      }

    let Total=0;

    db.collection("Ventas").where("Fecha", "==", FECHA)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         Total=Total+doc.data().Monto;
        })
    }).then(()=>{
        alert("Hoy se ha venido $"+Total);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function verventasfecha(){
    let cosas=document.getElementById('entorno');
    cosas.innerHTML=`
     
          <div class="d-flex flex-row justify-content-between" align="center">
            <div class="col-9 m-2">
              <input type="date" placeholder="Buscar por fecha"  id="txtid" class="form-control">
            </div>
            <div class="col-3 m-2">
                <button class="btn btn-primary w-100" onclick="buscarfecha()">Buscar</button>
            </div>
          </div>
  
           <div class="container">
        <div class="d-flex flex-row">
            <h3 class="text-white">Total:$</h3>
            <h3  class="text-white" id="txttotal"></h3>
        </div>
    </div>

          <table class="table m-2">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Concepto</th>
                <th>Total</th>
                <th>Fiado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody id="tabla">
            </tbody>
            </table>
    `;
}

function buscarfecha(){

}