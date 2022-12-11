"use strict"

//**************

//*** Arrglos ****/

var platillos = [ "ceviche", "tacos", "pasta"];
var bebidas = new Array("jamaico", "cocca", "pessi");


console.log(Array.isArray(platillos), bebidas);

//***Medir y acceder a aun arreglo ****/

console.log("Hay "+ platillos.length +" platillos en el menu");

var plato = platillos[1];

console.log("El platillo seleccionado es: ", plato)

//** Arreglos multidimensionales | arreglo de arreglos ***/

var paises = ["Peru", "Mexico", "Italia"];

var menu = [platillos, paises];
console.log( menu[0][0])

//**** Operaciones basicas de un arreglo ****/

console.log("Antes: ", platillos);

platillos.push("tostadas");

platillos.pop();
platillos.pop();

var mensaje = platillos.join(); //une todos las entradas de un arreglo en una cadena de texto
console.log (mensaje);

console.log("Despues: ", platillos);

//**** Generacion de arrgelos con split() from() y of() ***/

//..... split()

var mensaje = "ceviche, tacos, pasta";

var platos = mensaje.split(', '); //crea un arreglo desde una cadena de texto, usa como refernecia la (, ) para hacer la separacion de las entradas de los arreglos

//... Array.from();  //trae de una lista de html informacion y la convierte en un arreglo

var platosHTML = Array.from(document.querySelectorAll('.platillos p'))
var platos = platosHTML.map( platillo -> platillo.textContent)

//.....Array.of(); //convierte todo en un array 

var platos = Array.of("ceviche", "tacos", "pasta");

console.log(platos)


//**** Ordenar un arreglo *****/

var platillos = [ "ceviche", "tacos", "pasta", "arroz"];

console.log('Antes: ', platillos);

platillos.sort(); //ordena la lista de manera alfabetica
platillos.reverse(); //odena el metodo al contrario

console.log('Despues: ', platillos)

//*** Desestructuracion de arreglos ***/

var platillos = ["ceviche", "tacos", "pasta"];

//var platillo1 = platillos[0];
//var platillo2 = platillos[1];
//var platillo3 = platillos[2];

//var platillo1 = null;
//var platillo2 = null;
//var platillo3 = null;

var [platillo1, platillo2, platillo3] = platillos

console.log(platillo1, platillo2, platillo3);