//**************************
//** Eventos del mouse

const boton = document.querySelector(".boton");

boton.addEventListener("click",function(){
    console.log("El boton de ha pulsado");
})

boton.addEventListener("mouseover", function(){
    console.log("El mouse esta sobre el boton");
})

boton.addEventListener("mouseout", function(){
    console.log("El mouse esta fuera el boton");
})

//** Eventos del teclado

window.addEventListener("keydown", function(event){
    console.log("Pulsando tecla");
    console.log(String.fromCharCode(event.keycode));
})

window.addEventListener("keypress", function(event){
    console.log("Tecla pulsada");
})

window.addEventListener("keyup", function(event){
    console.log("Tecla liberada");
})

//*** Carga de documento

window.addEventListener("load", function(){
    console.log("Carga completada");
})

//*** Eventos multimedia

const video = document.querySelector(".promovideo");

video.addEventListener("play", function(){
    console.log("El video ha iniciado");
})

video.addEventListener("seeking", function(){
    console.log("Se esta buscando el video", this.currentime); //* cuando se mueve la barra de tiempo del video
})

video.addEventListener("ended", function(){
    console.log("El video ha terminado");
})

//*** Temporizadores o timers

/* setInterval (ejecucion infinita de un elemento en determinado tiempo)*/
/* setTimeout (ejecutar una accion despues del tiempo indicado, una sola vez*/

/*var temporizador = setInterval(function(){
    setColor();
}, 1000);
*/

setTimeout(function(){
    setColor();
},6000)

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "gray" ? "black" : "gray";
}

function stopChangeColor(){
    clearInterval(temporizador)
}