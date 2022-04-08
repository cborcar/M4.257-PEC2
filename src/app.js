const name = 'world';
console.log(`Hello ${name}`);

const btn = document.getElementById('BotonMetalMeter');
btn.addEventListener('click', NumAleatorio, false);

export function NumAleatorio() {

    document.getElementById("Img0").style.display = "none";
    document.getElementById("Img1").style.display = "none";
    document.getElementById("Img2").style.display = "none";
    document.getElementById("Img3").style.display = "none";
    document.getElementById("Img4").style.display = "none";
    document.getElementById("BotonMetalMeter").innerHTML = "Prueba otra vez";

    var Numero = Math.random() * (5 - 1) + 1;
    if (Numero < 2){
        document.getElementById("TextoResultado").innerHTML = "Puntuación: 1 (Reguetonero)";
        document.getElementById("DescripcionResultado").innerHTML = "Un reguetonero es el enemigo número uno de un metalero. Si te cruzas con algún melenudo ¡huye!, pueden detectar tu presencia a varios metros de distancia.";
        document.getElementById("Img1").style.display = "flex";
    }else if (Numero < 3){
        document.getElementById("TextoResultado").innerHTML = "Puntuación: 2 (Rapero)";
        document.getElementById("DescripcionResultado").innerHTML = "No tan perseguidos como los reguetoneros, pero bastante odiados por los heavys. Puedes pasar desapercibido si no dices palabras raras como 'bro'.";
        document.getElementById("Img2").style.display = "flex";
    }else if  (Numero < 4){
        document.getElementById("TextoResultado").innerHTML = "Puntuación: 3 (Popero)";
        document.getElementById("DescripcionResultado").innerHTML = "Todavía tienes arreglo, pero tienes que trabajar muy duro. Empieza escuchando a Dio, bebe mucha cerveza y vístete de negro y poco a poco te harás un camino hacia el metal.";
        document.getElementById("Img3").style.display = "flex";
    }else if  (Numero < 5){
        document.getElementById("TextoResultado").innerHTML = "Puntuación: 4 (Metalero)";
        document.getElementById("DescripcionResultado").innerHTML = "Por tu venas corre sangre de un verdadero hijo del metal. El mismísimo Odín se siente orgulloso de ti.";
        document.getElementById("Img4").style.display = "flex";
    }
}