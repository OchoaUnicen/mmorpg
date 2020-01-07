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
    const LIMITE_INFERIOR = 415;
    const LIMITE_SUPERIOR = -20;





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



   

    //sistema de movimiento Aca se incluye la clase teclas.js
    document.addEventListener('keydown', (e) => {Teclas[e.keyCode] = true});
    document.addEventListener('keyup', (e) => {Teclas[e.keyCode] = false });





    //variables de la cuales depende el sistema de movimiento del arquero
    let velocidad = 0;
    let limite_aceleracion = 5;
    function actualizarMovimientosArquero(){


        if(!Arquero.muerto){        
            if (Teclas[tecla.letra_d] == true && Arquero.posicion_x < LIMITE_DERECHO) {
                // Derecha                    
                //console.log("derecha true");       
                //console.log(Arquero.posicion_x);
                if (velocidad < limite_aceleracion) {        
                    velocidad = velocidad + 1;        
                }        
                Arquero.posicion_x += velocidad;        
            }
        
            if (Teclas[tecla.letra_a] == true &&  Arquero.posicion_x > LIMITE_IZQUIERDO) {
                //Izquierda                 
                //console.log(direccion);        
                if (velocidad < limite_aceleracion) {        
                    velocidad = velocidad + 1;        
                }
                Arquero.posicion_x -= velocidad;
            }

            if (Teclas[tecla.letra_w] == true && Arquero.posicion_y > LIMITE_SUPERIOR) {
                //Tecla W - arriba                 
                if (velocidad < limite_aceleracion) {
                    velocidad = velocidad + 1;
                }
                Arquero.posicion_y -= velocidad;


            }
            if (Teclas[tecla.letra_s] == true && Arquero.posicion_y < LIMITE_INFERIOR) {
                //Tecla W - arriba                 
                if (velocidad < limite_aceleracion) {
                    velocidad = velocidad + 1;
                }
                Arquero.posicion_y += velocidad;


            }

        

        }




    }




    //renderizacion - Todo dentro se realizarada 60 veces por segundo
    function tiempo() {
        frame(tiempo);
        actualizarMovimientosArquero();

        


        //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
        //dibuja el fondo 
        context.clearRect(0, 0, canvas.width, canvas.heigh);
        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);

        //dibuja al arquero
        context.drawImage(Arquero.imagen, Arquero.posicion_x, Arquero.posicion_y, Arquero.imagen.naturalWidth, Arquero.imagen.naturalHeight);


        

    }
    tiempo();




}











