function fuja() {
    
    var botaoSla = document.getElementById("sla");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoSla.offsetWidth;
    var maxY = alturaJanela - botaoSla.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoSla.style.left = aleatorioX + "px";
    botaoSla.style.top = aleatorioY + "px";
}

function OutraTela(){
    var botaoEu = document.getElementById("eu");
    botaoEu = window.location.href = "index2.html";
}

function playAudio() {
    var audio = document.getElementById("audio");

    if (audio.paused) {
        audio.play();
    } 
}
