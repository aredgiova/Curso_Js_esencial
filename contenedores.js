"use strict"

var nombre = "ARED" //usa var para variables globales

function saludar(){
    let nombre ="sjsgsjs"; //usar let para variables locales
    console.log(nombre);
};

console.log(nombre);

const pi=3.141516;

var cantidad ="420";
var nuevaCantidad = Number(cantidad); //convertir caracter de texto en numero

parseInt(); //convertir numeros en enteros
parseFloat(); //conertir numeros a decimales 


//var edad = "28";
//var edadtxt = String(edad); //convierte un numero en un caracter

//uso de datos booleanos

var activo = true;
var inactivo = false;

var estado = Boolean(10<9);

// uso de fechas

var fecha = new Date();

//metodos de fechas 

fecha.getDate(); //Dia del mes en la que nos encontramos
fecha.getDay(); //Dia de la semana en que nos encontramos
fecha.setDate(5); //Da un valor a el dia, y lo relaciona con un dato

//simbolos -> datos que son unicos e inmutables durante todo el programa

var simbolo1 = Symbol();

// JSON -> formato de intercambio de datos

var persona ={nombre: "ared", facebook: "mache"};
var personas = [
    {nombre: "feliz", facebook: "la rta"},
    {nombre: "feliz01", facebook: "la rta01"},
    {nombre: "feliz02", facebook: "la rta02"},
    persona
];

var personaJSON = JSON.stringify(persona); //convierte los datos en una cadena de texto

//var nuevaPersona = JSON.parce(personaJSON); //convierte un archivo json en un arreglo de un objeto

//el resultado del uso de operacionales(<,>,=>,....) me da como resusltado un true o un false
//el uso de operadores logicos (AND OR NOT) da como resultado un true o false

// AND == &&
//OR == ||
//NOT ==  ! (tambien se puede unas como negacion)

//OPERADOR DE ASIGNACION

//SUMAR Y ASIGNAR == += (asigna deuna el resultado de la operacion), -= ,*=,
//se realiza la operacion con el otro dato y se cambia el dato en la variable a la izquierda

//OPERADORES DE CONCATENACION

//OPERADOR TERNARIO O CONDICIONAL

var datoA = 110;
var datoB = 20;
//condicion ? TRUE : FALSE
var resultado = datoA < datoB ? "si es mayor" : "no es mayor";
console.log(resultado);

//OPERADOR DE TIPO DE DATOS

var nombre = "pglo";
var activo = true;
var persona = {
    edad : 14,
    deporte : 'correr'
}

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);
console.log(typeof persona.edad);


// con el uso de (typeof) podemos conocer el tipo de datos de una variable 

//if (condicion){
//    operacion
//}

// estructura Swict, se usa igual con texto
var edad = 30;
var resultado ="";
switch (edad) {
    case 10:
    resultado = "tiene 10 años" ;   
    break;
    case 20:
    resultado = "tiene 20 años"  ;  
    break;
    case 30:
    resultado = "tiene 30 años"   ; 
    break;
    default:
    resultado = "no coincide";
    break;
}
console.log (resultado);

//ciclo definido FOR
//contador
//condicion o evaluacion
// paso -- incremntar o decremnetar

var productos = 5;

/*for (let contador = 0; contador < productos; contador++){
    console.log("producto #" + contador);
    debugger;
}*/

while (productos > 0){
    console.log('se vendio');
    productos--;
    debugger;
}

//ciclo DO...WHILE -- ciclo indefinido, primero se ejecuta el do y
//despues hace la verificacion (se pregunta)

do{
    console.log('se vende producto');
    productos--;
    debugger;
}
while(productos>=1)

//*** control de ciclos
//break -- continue

var contador = 0;
var cuenta = 0;

for(contador = 0; contador<=20; contador++){
    if (contador == 5){
        break;
    }
    if (contador % 2 == 0){
        continue;
    }
    cuenta++;
    debugger;
}
console.log(cuenta);

//*** control de ciclos
//break -- continue