//iniciamos con esta estructura de selects para seleccionar el celular que desea

let boton = document.getElementById("button");
boton.onclick = () => {
    let ele1 = document.getElementById("telefono");
    let precio1= parseFloat(ele1.options[ele1.selectedIndex].value);
    let ele2 = document.getElementById("plan");
    let precio2= parseFloat(ele2.options[ele2.selectedIndex].value);
    let ele3 = document.getElementById("accesorios");
    let precio3= parseFloat(ele3.options[ele3.selectedIndex].value);
    let suma = `Total $ ${precio1 + precio2 + precio3}`;
    document.getElementById("resultado").value = suma
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
        imagen: "./assets/iphone-13-pro-family-select.jpeg",
    },
    {
        id: 3, 
        telefono: "Huawei P50", 
        costo: 1199,
        imagen: "./assets/iphone-13-pro-family-select.jpeg",
    },
    {
        id: 4, 
        telefono: "Xiaomi 11T", 
        costo: 1099,
        imagen: "./assets/iphone-13-pro-family-select.jpeg",
    },
    {
        id: 5, 
        telefono: "Moto g 60", 
        costo: 759,
        imagen: "./assets/iphone-13-pro-family-select.jpeg",
    },
];

const imgCel = document.getElementById("contenedor");
telefonos.forEach((telefonos, indice)=>{
    let card = document.createElement("div");
    card.classList.add("card","col-sm-3","col-lg-2","row");
    let html = `<div class="card">
    <img src="${telefonos.imagen}" class="card-img-top" alt="Iphone13">
      <p class="card-text text-center">${telefonos.telefono}<br> $ ${telefonos.costo}</p>
  </div>`;
 card.innerHTML= html;
 imgCel.appendChild(card);

})
const planes = [
    {  
        id: 1, 
        plan: "Plan Basico", 
        costo: 12.99
    },
    {
        id: 2, 
        plan: "Plan intermedio", 
        costo: 23.99
    },
    {
        id: 3, 
        plan: "Plan Pro", 
        costo: 36.99
    },
    {
        id: 4, 
        plan: "Ilimitado todo", 
        costo: 45.99
    },
];

const accesorio = [
    {
        id: 1, 
        accesorios: "No deseo accesorios", 
        costo: 0
    },
    {
        id: 2, 
        accesorios: "Accesorios basicos", 
        costo: 5.99
    },
    {
        id: 3, 
        accesorios: "Accesorios Pro", 
        costo: 10.99
    },
];


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
}

function mostrarCliente(identificador){
    let formulario = document.getElementById("customer");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `Gracias ${identificador.nombre} ! sus datos fueron recibido pronto recibira su orden de compra en su correo ${identificador.email}`;

    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
}