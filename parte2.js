"use strict"

//*********************************
//** Estructura basica de una funcion


function saludar(nombre, edad){
    console.log('Hola:', nombre);
    console.log('edad', edad);
    var resultado = "el socio" + nombre + " tiene " + edad + " primaveras";
    return resultado;
}

var mensaje = saludar(" pato", 76);
console.log(mensaje);

//*** Iniciacion de parametros, se deja un valor de inicializacion en caso de no enviar ningun parametro a la funcion


function contar(cantidad=20){
    console.log(cantidad);
}

contar ();

//*** Parametros de tipo REST, resive mas paremetros en una funcion, sin necesidad de ponerlos en la funcion
function cocinar(ingre1, ingre2, ...masingre){
    console.log(ingre1);
    console.log(ingre2);
    console.log(masingre);
}

cocinar("pollo", "tomate", "arroz","frijoles","pescado","chile");

//*** Parametros SPREAD -- parametros que se pueden expandir
// no se declara en la extructura de la funcion, sino en la invocacion
//se hace la combinacion con los parametros tio REST
function cocinar(ingre1, ingre2, ingre3, ...otros){
    console.log("ingrediente 1 " + ingre1);
    console.log("ingrediente 1 " + ingre2);
    console.log("ingrediente 1 " + ingre3);
    console.log("otros", otros)
}

var base = ["pollo", "tomate"];

cocinar(...base, "Arroz", "pescado", "chile");

//*** funciones anonimas

// permite no asignar nombre a un conjunto de instrucciones que se esten usando
//al que se dece ejecutar sin necesidad de asociar 
//se usan en los callbacks o se quiere aislar la funcion de un otro elemento

var saludar = function(nombre){
    var mensaje = "Mi pez se llama " + nombre;
    return mensaje;
}


//callbacks
//ayudan a controlar los procesos asincronos
//se ejecuta una funcion dentro de otra

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

calcular(2, 3, function(resultado){
    console.log("suma", resultado)
},function(resultado){
    console.log("resta", resultado)
})

//*** funciones arrow -- fat arrow -- lambda

var saludar = nombre => "Hola " + nombre;
console.log(saludar("karol sierra"));


var calcular = (datoA, datoB) => datoA+datoB
console.log(calcular(10,15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC
}
console.log(generar(10,15));


var validar = () => {
    return "validacion correcta";
}
console.log(validar())


//uso del operador THIS

const buttom = document.querySelector('.buttom');

/*buttom.addEventListener('click', function(){
    console.log(this.innerHTML);
})*/

buttom.addEventListener('click', () =>{
    console.log(this)
    this.location ="https://phipricefx.com/"
})


