const $form= document.querySelector("[name=formulario]")

const nombre = $form.nombre.value
const ciudad = document.querySelector("[name=ciudad]").value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = document.querySelector("[name=descripcion-regalo]").value

console.log(nombre)
console.log(ciudad)
console.log(comportamiento)
console.log(descripcionRegalo)

function validarNombre(nombre){
    if(nombre.length===0){
        return "Este campo debe tener al menos 1 caracter"
    }
    
    if(nombre.length>=50){
        return "Este campo debe tener menos de 50 caracteres"
    }

   
    return ""
}

function validarCiudad(ciudad){
    if(ciudad===""){
        return "Debe completar este campo"
    }

    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length===0){
        return "Debe completar este campo"
    }

    else if(descripcionRegalo.length>=100){
        return "Este campo no puede tener mas de 100 caracteres"
    }
    else if(/^[a-z0-9]+$/.test(descripcionRegalo)){
        return "Este campo solo puede tener numeros y letras"
    }

    return ""
}

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa")
    
    const nombre=$form.nombre.value
    const ciudad=$form.ciudad.value
    const descripcionRegalo=$form["descripcion-regalo"].value

    const errorNombre=validarNombre(nombre)
    const errorCiudad=validarCiudad(ciudad)
    const errorDescripcionRegalo=validardDescripcionRegalo(descripcionRegalo)

    const errores={
        nombre:errorNombre,
        ciudad:errorCiudad,
        descripcionRegalo:errorDescripcionRegalo
    };

    manejarErrores(errores)

    event.preventDefault();
}

function manejarErrores(errores){

    errorNombre=errores.nombre
    errorCiudad=errores.Ciudad
    errorDescripcionRegalo=errores.descripcionRegalo

    if(errorNombre !== ""){
        $form.nombre.className="error"
    }
    else{
        $form.nombre.className=""
    }

    if(errorCiudad !== ""){
        $form.ciudad.className="error"
    }
    else{
        $form.ciudad.className=""
    }

    if(errorDescripcionRegalo !== ""){
        $form.descripcionRegalo.className="error"
    }
    else{
        $form.descripcionRegalo.className=""
    }
}


$form.onsubmit = validarFormulario;














