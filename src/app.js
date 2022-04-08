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

    Numero = Math.random() * (5 - 1) + 1;
    if (Numero < 2){
        document.getElementById("TextoResultado").innerHTML = "Resultado: 1 (Reguetonero)";
        document.getElementById("DescripcionResultado").innerHTML = "Resasdfasdfasdfero)";
        document.getElementById("Img1").style.display = "flex";
    }else if (Numero < 3){
        document.getElementById("TextoResultado").innerHTML = "Resultado: 2 (Rapero)";
        document.getElementById("DescripcionResultado").innerHTML = "Resultaasdfasdfasdnero)";
        document.getElementById("Img2").style.display = "flex";
    }else if  (Numero < 4){
        document.getElementById("TextoResultado").innerHTML = "Resultado: 3 (Popero)";
        document.getElementById("DescripcionResultado").innerHTML = "Aasdfjaslkñdfjklasñdjflkasjdkf";
        document.getElementById("Img3").style.display = "flex";
    }else if  (Numero < 5){
        document.getElementById("TextoResultado").innerHTML = "Puntuación: 4 (Metalero)";
        document.getElementById("DescripcionResultado").innerHTML = "Por tu venas corre sangre de un verdadero hijo del metal.";
        document.getElementById("Img4").style.display = "flex";
    }
}