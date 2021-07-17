
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace("?", "")

if (nivel === "normal") {
    criaMosquitoTempo = 1500

} else if (nivel === "normal") {
    criaMosquitoTempo = 1000

} else if (nivel === "dificil") {
    criaMosquitoTempo = 750

} else if (nivel === "chucknorris") {
    criaMosquitoTempo = 600

}else if (fase === "fase"){

    addBola()
    setInterval(addBola, 100);

}

function ajusteTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

}

ajusteTamanhoPalcoJogo()

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(Mosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {

    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if (vidas > 3) {
            window.location.href = "fim.html"
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }


    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return "mosquito"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}
function addBola() {

    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 500);

    var bola = $('<div class="bola"></div>');
    bola.css("left", x + "px");
    bola.css("top", y + "px");
    bola.bind("click", function () {
        $(this).fadeOut('fast');

        placar++
        updatePlacar()
    })

    $(document.body).append(bola);

    function updatePlacar() {
       $("#placar").html(placar);
    }
}
var placar = 0;

$(function () {

    $("#comecar").bind("click", function () {

        setInterval(addBola, 100);
    })
})

function CarregarJogoDaBolinha(){

    
}
