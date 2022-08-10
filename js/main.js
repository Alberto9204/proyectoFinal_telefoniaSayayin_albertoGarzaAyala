//Iniciamos con esta estructura de selects para seleccionar el celular que desea

let boton = document.getElementById("button");
boton.onclick = () => {
    let ele1 = document.getElementById("telefono");
    //console.log(ele1.options[ele1.selectedIndex])
    let precio1= parseFloat(ele1.options[ele1.selectedIndex].value);
    let ele2 = document.getElementById("plan");
    let precio2= parseFloat(ele2.options[ele2.selectedIndex].value);
    let ele3 = document.getElementById("accesorios");
    let precio3= parseFloat(ele3.options[ele3.selectedIndex].value);
    let suma = `Total $ ${precio1 + precio2 + precio3}`;
    let sumaT = precio1 + precio2 + precio3;
    let descuento = sumaT;
        if (sumaT > 1200){
          descuento = (sumaT-(sumaT * .15)).toFixed(2)
        };
    let meses = (parseFloat(((descuento) / 12)).toFixed(2))    
    document.getElementById("resultado").value = sumaT;
    document.getElementById("final").innerHTML=""
    const totalFinal = document.getElementById("final");
    let final = document.createElement("p");
    final.classList.add("totalF");
    let htmlFinal = `Resumen de tu compra <br> 
    Escogiste el telefono ${ele1.options[ele1.selectedIndex].text}<br>
    Escogiste el plan ${ele2.options[ele2.selectedIndex].text}<br> 
    En los accesorios desicidiste ${ele3.options[ele3.selectedIndex].text} <br> 
    Este es tu total de tu compra $ ${suma} <br> 
    Ya con tu descuento ganado es un Total de $ ${descuento} <br>
    Si quieres podemos diferir tu compra a 12 meses sin intereses siendo 12 pagos de $ ${meses} `;
    final.innerHTML= htmlFinal;
    totalFinal.appendChild(final);
   
    sumaT > 1200 ? Swal.fire('Ganaste un descuento', 'Muchas felicidades Guerrero Sayayin', 'success') : Swal.fire('No ganaste descuento,<br> Revisa el resumen de compra, <br> Continua con el llenado de tus datos', 'Llenalos correctamente no seas un insecto', 'info');

}

//Utilizamos fetch y then para utilizar los array de objetso en los documentos .json(Datos de telefonos, Planes y accesorios)
fetch('js/telefonos.json')
.then((response) => response.json())
.then((tel) => {
const imgCel = document.getElementById("contenedor");
tel.forEach(telefonos=>{
    let card = document.createElement("div");
    card.classList.add("card","col-sm-3","col-lg-2","row",);
    let html = `<div class="card">
    <div>
    <img src="${telefonos.imagen}" imgfluid alt="${telefonos.telefono}" width=150px heigth=5px>
    </div>
      <p class="card-text text-center">${telefonos.telefono}<br> $ ${telefonos.costo}</p>
  </div>`;
 card.innerHTML= html;
 imgCel.appendChild(card);
})
})

fetch('js/planes.json')
.then((response) => response.json())
.then((pla) => {
const imgPla = document.getElementById("contPlanes");
pla.forEach((planes)=>{
    let cardPlanes = document.createElement("div");
    cardPlanes.classList.add("card1","col-sm-4","col-lg-4","row");
    let htmlPlanes = `<div class="card1">
    <div class="card-body">
      <h5 class="card-title">${planes.plan}</h5>
      <h6 class="card-subtitle mb-2 text-muted">"Plan ${planes.id}"</h6>
      <p class="card-text">${planes.paquete}. <br> <b>Por solo $ ${planes.costo}</b></p>
    </div>
  </div>`;
 cardPlanes.innerHTML= htmlPlanes;
 imgPla.appendChild(cardPlanes);
}) 
})

fetch('js/accesorios.json')
.then((response) => response.json())
.then((acc) => {
const imgAcc = document.getElementById("contAcc");
acc.forEach((accesorio)=>{
    let cardAcc = document.createElement("div");
    cardAcc.classList.add("card2","col-sm-3","col-lg-2","row","img");
    let htmlacc = `<div class="card2>
    <p class="card-text"><b>${accesorio.name}</b><br> ${accesorio.accesorios} <br> <b>Por solo $ ${accesorio.costo}</b></p>
  </div>`;
 cardAcc.innerHTML= htmlacc;
 imgAcc.appendChild(cardAcc);
})
})


