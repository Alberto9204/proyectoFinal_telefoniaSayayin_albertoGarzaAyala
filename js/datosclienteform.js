// Aqui tomamos los datos de el cliente una vez que le mostramos el resumen de su compra y simulamos que se lo haremos llegar 
class identificador {
    constructor(nombre, telefono, email, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
    }
}

document.getElementById("btn");
btn.addEventListener("click", cargarCliente);

function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let resultado = document.getElementById("resultado");
    let usuario1 = new identificador(nombre, telefono, email, direccion);
    

    if (nombre == ""){
        resultado.innerHTML = "<p class= 'text-white bg-danger p-3'> Falta completar el campo nombre! </p>";
        return false;
    }else{
        resultado.innerHTML = "";
    };

    if (telefono == ""){
        resultado.innerHTML = "<p class= 'text-white bg-danger p-3'> Falta completar el campo telefono! </p>";
        return false;
    }else{
        resultado.innerHTML = "";
    };

    if (email == ""){
        resultado.innerHTML = "<p class= 'text-white bg-danger p-3'> Falta completar el campo email! </p>";
        return false;
    }else{
        resultado.innerHTML = "";
    };

    if (direccion == ""){
        resultado.innerHTML = "<p class= 'text-white bg-danger p-3'> Falta completar el campo direccion! </p>";
        return false;
    }else{
        resultado.innerHTML = "";
    };
    
    
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
    nuevoContenido.innerHTML = `<p>Gracias ${identificador.nombre} ! sus datos fueron recibido pronto recibira su orden de compra en su correo ${identificador.email} y su paquete en la siguiente direccion ${identificador.direccion}</p>
                                <br> <p>Hasta la Proxima Guerrero Sayayin</p>`;
    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
}
