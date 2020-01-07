let Teclas = new Array(255);

let tecla = {
    "letra_w": 87,
    "letra_a": 65,
    "letra_s": 83,
    "letra_d": 68,


    "letra_j": 74,
    "letra_k": 75,
    "letra_l": 76,

"flecha_izq": 37,
"flecha_der" :39,
"flecha_abajo": 40,
"flecha_arriba": 38,

"numpad1": 97,
"numpad2": 98,
"numpad3": 99,

}






function cargarTeclas () {

    console.log("entra");
    for (var i = 0 ; i < Teclas.length; i++) {
        Teclas[i] = false;
        
    }
}
