document.addEventListener('DOMContentLoaded', cargar_game_js);

function cargar_game_js() {

    "use strict";
    //compatibilidad con multiples navegadores
    let frame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    let canvas = document.getElementById('lienzo');
    let context = canvas.getContext('2d');



    //limites del mapa
    const LIMITE_IZQUIERDO = 0;
    const LIMITE_DERECHO = 910;
    const LIMITE_INFERIOR = 370;





    function crearMatriz(w, h) {
        const matriz = [];
        while (h--) {
            matriz.push(new Array(w).fill(0));

        }
        return matriz;
    }
    const mapa = crearMatriz(100, 50);



    //imagen del fondo
    let fondo = new Image();
    fondo.src = "./img/fondo.png";



    //imagen del arquero
    let arquero = new Image();
    arquero.src = "./img/arquero.png"


    //sistema de movimiento Aca se incluye la clase teclas.js
    document.addEventListener('keydown', (e) => {Teclas[e.keyCode] = true});
    document.addEventListener('keyup', (e) => {Teclas[e.keyCode] = false });






    //renderizacion - Todo dentro se realizarada 60 veces por segundo
    function tiempo() {
        frame(tiempo);

        console.log("Funca");


        //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
        //dibuja el fondo 
        context.clearRect(0, 0, canvas.width, canvas.heigh);
        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);

        //dibuja al arquero
        context.drawImage(arquero, 0, 0 , arquero.naturalWidth, arquero.naturalHeight);


        

    }
    tiempo();




}











