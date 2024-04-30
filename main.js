const miForm = document.getElementById('formulario');
const telefono = document.getElementById('telefono');
const mail = document.getElementById('email');
const fecha = document.getElementById('fecha');

function validarFormulario (e){
    e.preventDefault();
    telValido()&& mailValido()&& fechaValida()? miForm.reset() : console.log("No se pudo enviar form por dato incorrecto.")
};

function telValido (){
    const telefonoValor = telefono.value;
    const regex = /^11\d{8}$/;

    if (regex.test(telefonoValor)){
        return true
    }else{
        return alert("Tel incorrecto.")
    }
};

function mailValido (){
    const mailValor = mail.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(mailValor)){
        return true
    }else{
        return alert("Email incorrecto.")
    }
};

function fechaValida (){
    const hoy = new Date();
    hoy.setHours(0,0,0,0);
    const fechaElegida = new Date(fecha.value + 'T00:00:00')

    if (fechaElegida>=hoy){
        return true
    }else{
        return alert("Fecha incorrecta.")
    }
};

miForm.addEventListener('submit', validarFormulario);