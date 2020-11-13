function probarValidarNombre(){
    console.assert(validarNombre("")==="Este campo debe tener al menos 1 caracter", 
    "validarNombre no funciono con un string vacio" )
    
    console.assert(validarNombre("12345678910111213141516171566616546466666666666666666666666666666666666666666666666666666666666666666666666666666666")==="Este campo debe tener menos de 50 caracteres", 
    "validarNombre no valido que el nombre sea menor a 50 caracteres")

    console.assert(validarNombre("Fabricio")==="","En validarNombre se ingresa un dato correcto y falla")

    console.assert(validarNombre("123123"),"El campo solo acepta letras", "validarNombre no esta validando que solo tenga letras")
}

function probarValidarCiudad(){
    console.assert(validarCiudad("")==="Debe completar este campo", "validarCiudad no valido que no se haya seleccionado ninguna Ciudad")
    console.assert(validarCiudad("Entre Rios")==="","validarCiudad se rompio")
}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("")==="Debe completar este campo","validarDescripcionRegalo no esta validando que el campo este vacio")

    console.assert(validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")==="Este campo no puede tener mas de 100 caracteres","validarDescripcionRegalo no esta validando que Descripcion-regalo tenga mas de 100 caracteres")
    
    console.assert(validarDescripcionRegalo("Holaaaa")==="","validarDescripcionRegalo no funciono con una descripcion correcta")
}

probarValidarNombre()
probarValidarCiudad()
probarValidarDescripcionRegalo()