var chances;
var random;
function geraAleatorio()
{
    chances = 3;
    random = Math.floor(Math.random() * 10 + 1)
    divChances.innerHTML = "você tem 3 chances";
    //alert(random);
    dica.innerHTML = "";
}

function verifica()
{
    var chute = document.getElementById("chutezin").value;
    chances--;
    divChances.innerHTML = "você tem " + chances + " chances";
    
    if(chute > random)
    {
        dica.innerHTML = "Você chutou alto demais";
    }
    if(chute < random)
    {
        dica.innerHTML = "Você chutou baixo demais";
    }
    if(chute == random)
    {
        dica.innerHTML = "você chutou certo";
        alert("Parabéns, você ganhou, o jogo irá resetar");
        resetaGanha();
    }
    if(chances <= 0){
        resetaPerde();
    }
}

function resetaPerde()
{
    alert("você perdeu, o jogo irá resetar");
    geraAleatorio();
}

function resetaGanha()
{
    geraAleatorio();
}