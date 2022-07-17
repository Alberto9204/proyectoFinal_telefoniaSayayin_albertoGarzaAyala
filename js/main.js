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
    document.getElementById("resultado").value = suma
    let meses = parseFloat(((precio1+precio2+precio3) / 12)).toFixed(2)
    document.getElementById("final").innerHTML=""
    const totalFinal = document.getElementById("final");
    let final = document.createElement("p");
    final.classList.add("totalF");
    let htmlFinal = `Resumen de tu compra <br> Escogiste el telefono ${ele1.options[ele1.selectedIndex].text}<br>Escogiste el plan ${ele2.options[ele2.selectedIndex].text}<br> En los accesorios desicidiste ${ele3.options[ele3.selectedIndex].text} <br> Este es tu total de tu compra ${suma} <br> Si quieres podemos diferir tu compra a 12 meses sin intereses siendo 12 pagos de ${meses} `;
    final.innerHTML= htmlFinal;
    totalFinal.appendChild(final);
}



//se crean los objetos con arrays para crea cards con el DOM
const telefonos = [
    {
        id: 1,
        telefono: "Iphone 13", 
        costo: 1399,
        imagen: "./assets/iphone-13-pro-family-select.jpeg",
    },
    {
        id: 2, 
        telefono: "Samsung S22", 
        costo: 1299,
        imagen: "./assets/samsung.png",
    },
    {
        id: 3, 
        telefono: "Huawei P50", 
        costo: 1199,
        imagen: "./assets/hauwei.png",
    },
    {
        id: 4, 
        telefono: "Xiaomi 11T", 
        costo: 1099,
        imagen: "./assets/xiaomi11t.jpg",
    },
    {
        id: 5, 
        telefono: "Moto g 60", 
        costo: 759,
        imagen: "./assets/moto.webp",
    },
];

const imgCel = document.getElementById("contenedor");
telefonos.forEach((telefonos, indice)=>{
    let card = document.createElement("div");
    card.classList.add("card","col-sm-3","col-lg-2","row");
    let html = `<div class="card">
    <img src="${telefonos.imagen}" class="card-img-top height=60px" alt="Iphone13">
      <p class="card-text text-center">${telefonos.telefono}<br> $ ${telefonos.costo}</p>
  </div>`;
 card.innerHTML= html;
 imgCel.appendChild(card);
})

//se guerdan los datos en una local storage para despues hacer modificaciones si es necesario como Sumar iva
function lsTelefonos(){
    return JSON.parse(localStorage.getItem(telefonos)) || []
};

function guardarLsTelefonos(){
    localStorage.setItem("telefonos", JSON.stringify(telefonos));
};

guardarLsTelefonos();


const planes = [
//se crean los objetos con arrays para crea cards con el DOM
    {  
        id: 1, 
        plan: "Plan Basico", 
        costo: 12.99,
        paquete: "Con este plan tendras 100 minutos, 100 sms y 1 gb de internet al mes",
    },
    {
        id: 2, 
        plan: "Plan intermedio", 
        costo: 23.99,
        paquete: "Con este plan tendras 250 minutos, 250 sms y 2.5 gb de internet al mes",
    },
    {
        id: 3, 
        plan: "Plan Pro", 
        costo: 36.99,
        paquete: "Con este plan tendras 400 minutos, 400 sms y 4 gb de internet al mes",
    },
    {
        id: 4, 
        plan: "Ilimitado todo", 
        costo: 45.99,
        paquete: "Con este plan tendras lo tendras todo ilimitado",
    },
];

const imgPla = document.getElementById("contPlanes");
planes.forEach((planes, indice)=>{
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


//Se guardan los datos en una local storage para despues hacer modificaciones si es necesario como Sumar iva

function lsPlanes(){
    return JSON.parse(localStorage.getItem(planes)) || []
};

function guardarLsPlanes(){
    localStorage.setItem("planes", JSON.stringify(planes));
};

guardarLsPlanes();


//se crean los objetos con arrays para crea cards con el DOM

const accesorio = [
    {
        id: 1, 
        accesorios: "No deseo accesorios", 
        costo: 0,   
    },
    {
        id: 2, 
        accesorios: "Accesorios basicos <br> -Audifonos <br> -Funda protectora.", 
        costo: 5.99,  
    },
    {
        id: 3, 
        accesorios: "Accesorios Pro <br> -Audifonos <br> -Funda protectora <br> -Mica de cristal <br> -Selfie sticky.", 
        costo: 10.99,
    },
];

const imgAcc = document.getElementById("contAcc");
accesorio.forEach((accesorio, indice)=>{
    let cardAcc = document.createElement("div");
    cardAcc.classList.add("card2","col-sm-3","col-lg-2","row","img");
    let htmlacc = `<div class="card2>
    <p class="card-text">${accesorio.accesorios}. <br> <b>Por solo $ ${accesorio.costo}</b></p>
  </div>`;
 cardAcc.innerHTML= htmlacc;
 imgAcc.appendChild(cardAcc);

})

function lsaccesorio(){
    return JSON.parse(localStorage.getItem(accesorio)) || []
};

function guardarLsaccesorio(){
    localStorage.setItem("accesorio", JSON.stringify(accesorio));
};

guardarLsaccesorio();




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
    let usuario1 = new identificador(nombre, telefono, email);
    console.log(usuario1);
    mostrarCliente(usuario1);
    console.log(nombre);

    function guardarCliente(){
        return JSON.parse(localStorage.getItem(usuario1)) || []
    };
    
    function guardarClientes(){
        localStorage.setItem("cliente", JSON.stringify(usuario1));
    };
    
    guardarCliente()
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