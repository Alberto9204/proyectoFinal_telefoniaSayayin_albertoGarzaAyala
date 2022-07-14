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

const telefonos = [{id: 1, telefono: "Iphone 13", costo: 1399},
                   {id: 2, telefono: "Samsung S22", costo: 1299},
                   {id: 3, telefono: "Huawei P50", costo: 1199},
                   {id: 4, telefono: "Xiaomi 11T", costo: 1099},
                   {id: 5, telefono: "Moto g 60", costo: 759}];

const planes = [{id: 1, plan: "Plan Basico", costo: 12.99},
                {id: 2, plan: "Plan intermedio", costo: 23.99},
                {id: 3, plan: "Plan Pro", costo: 36.99},
                {id: 4, plan: "Ilimitado todo", costo: 45.99}];

const accesorio = [{id: 1, accesorios: "No deseo accesorios", costo: 0},
                   {id: 2, accesorios: "Accesorios basicos", costo: 5.99},
                   {id: 3, accesorios: "Accesorios Pro", costo: 10.99},];


