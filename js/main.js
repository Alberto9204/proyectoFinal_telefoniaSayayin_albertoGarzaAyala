//iniciamos con esta estructura de selects para seleccionar el celular que desea

let boton = document.getElementById("button");
boton.onclick = () => {
    let ele1 = document.getElementById("telefono");
    console.log(ele1.options[ele1.selectedIndex])
    let precio1= parseFloat(ele1.options[ele1.selectedIndex].value);
    let ele2 = document.getElementById("plan");
    let precio2= parseFloat(ele2.options[ele2.selectedIndex].value);
    let ele3 = document.getElementById("accesorios");
    let precio3= parseFloat(ele3.options[ele3.selectedIndex].value);
    let suma = `Total $ ${precio1 + precio2 + precio3}`;
    let descuento = precio1 + precio2 + precio3;
    document.getElementById("resultado").value = suma
    let meses = parseFloat(((precio1+precio2+precio3) / 12)).toFixed(2)
    document.getElementById("final").innerHTML=""
    const totalFinal = document.getElementById("final");
    let final = document.createElement("p");
    final.classList.add("totalF");
    let htmlFinal = `Resumen de tu compra <br> Escogiste el telefono ${ele1.options[ele1.selectedIndex].text}<br>Escogiste el plan ${ele2.options[ele2.selectedIndex].text}<br> En los accesorios desicidiste ${ele3.options[ele3.selectedIndex].text} <br> Este es tu total de tu compra ${suma} <br> Si quieres podemos diferir tu compra a 12 meses sin intereses siendo 12 pagos de ${meses} `;
    final.innerHTML= htmlFinal;
    totalFinal.appendChild(final);
   
/// Primer Operador ternario
    descuento > 1200 ? Swal.fire('Ganaste un descuento', 'Muchas felicidades Guerrero', 'success') : Swal.fire('Continua con el llenado de tus datos', 'Llenalos correctamente', 'info')
}


fetch('js/telefonos.json')
.then((response) => response.json())
.then((tel) => {
const imgCel = document.getElementById("contenedor");
tel.forEach(telefonos=>{
    let card = document.createElement("div");
    card.classList.add("card","col-sm-3","col-lg-2","row",);
    let html = `<div class="card">
    <img src="${telefonos.imagen}" imgfluid class="card-img-top" alt="Iphone13">
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





//se crean los objetos con arrays para crea cards con el DOM

fetch('js/accesorios.json')
.then((response) => response.json())
.then((acc) => {
const imgAcc = document.getElementById("contAcc");
acc.forEach((accesorio)=>{
    let cardAcc = document.createElement("div");
    cardAcc.classList.add("card2","col-sm-3","col-lg-2","row","img");
    let htmlacc = `<div class="card2>
    <p class="card-text">${accesorio.accesorios}. <br> <b>Por solo $ ${accesorio.costo}</b></p>
  </div>`;
 cardAcc.innerHTML= htmlacc;
 imgAcc.appendChild(cardAcc);
})
})




//aqui se pediran los datos del cliente y se guardaran en la pagina por si vuelve a entrar ya esten sus guardo guardados.

   class identificador {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", cargarCliente);



function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    if (nombre === ""){
        Swal.fire('Gracias por agregar tu nombre');
        nombre =  prompt("Agrega correctamente tu nombre");
    }
  
    if (email === ""){
        Swal.fire('Gracias por agregar tu E-mail');
        email = prompt("Agrega tu E-mail");
    }
    let usuario1 = new identificador(nombre, telefono, email);
    mostrarCliente(usuario1);
    
//Aqui utilizamos el primero operador ternario OR
    function guardarCliente(){
        return JSON.parse(localStorage.getItem(usuario1)) || []
    };
    
    function guardarClientes(){
        localStorage.setItem("cliente", JSON.stringify(usuario1));
    };
    
    guardarCliente();
    guardarClientes();
    }

function mostrarCliente(identificador){
    let formulario = document.getElementById("customer");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `Gracias ${identificador.nombre} ! sus datos fueron recibido pronto recibira su orden de compra en su correo ${identificador.email}`;

    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
}

