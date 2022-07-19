//se guerdan los datos en una local storage para despues hacer modificaciones si es necesario como Sumar iva

//Aqui utilizamos el operador ternario OR
function lsTelefonos(){
    return JSON.parse(localStorage.getItem(telefonos)) || []
};

function guardarLsTelefonos(){
    localStorage.setItem("telefonos", JSON.stringify(telefonos));
};

guardarLsTelefonos();

//Aqui utilizamos el operador ternario OR
function lsPlanes(){
    return JSON.parse(localStorage.getItem(planes)) || []
};

function guardarLsPlanes(){
    localStorage.setItem("planes", JSON.stringify(planes));
};

guardarLsPlanes();

//Aqui utilizamos el operador ternario OR
function lsaccesorio(){
    return JSON.parse(localStorage.getItem(accesorio)) || []
};

function guardarLsaccesorio(){
    localStorage.setItem("accesorio", JSON.stringify(accesorio));
};

guardarLsaccesorio();
