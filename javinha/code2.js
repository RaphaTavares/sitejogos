const $letrasEnviadas = document.querySelector('#letras-enviadas');
const $vidasForca = document.querySelector('#vidasForca');
const $imgForca = document.querySelector('#imgForca');
const $palavraJogo = document.querySelector('#palavra-jogo');
const $entradaLetra = document.querySelector('#entrada-letra');
const $btnEnviaLetra = document.querySelector('#btnEnviaLetra');

const rodada = {};

function startGame() {

    if (bancoPalavras[0]) {

        $palavraJogo.innerHTML = '';
        $letrasEnviadas.innerHTML = '';
        rodada.erros = 0;
        $imgForca.setAttribute('src', 'images/boneco_forca0.png');
        
        rodada.objetoPalavra = bancoPalavras[0];


        
        rodada.controladorPalavraCorreta = Array.from(rodada.objetoPalavra.emArray);

        
        rodada.controladorPalavra = rodada.objetoPalavra.emArray.map(letra => '');

        
        rodada.controladorPalavra.forEach(() => {
            $palavraJogo.innerHTML += '<span class="letra-jogo">*</span>';
        });

        rodada.spanLetras = document.querySelectorAll('.letra-jogo');

    } else {
        alert('voce venceu todas as palavras! parabens!')
    }

}

startGame();

function letraEnviada() {
    var letraInput = $entradaLetra.value;

    
    if (letraInput) {
        $entradaLetra.value = '';
        letraInput = letraInput.toLowerCase();

        
        var arrayChecagem = rodada.controladorPalavraCorreta.map(function (item, index) {
            return item == letraInput ? index : undefined;
        });

        arrayChecagem = arrayChecagem.filter(function (item, index) {
            return item != undefined;
        });

        
        if (arrayChecagem.length > 0) {
            arrayChecagem.forEach(function (item) {
                rodada.controladorPalavraCorreta[item] = false;
                rodada.controladorPalavra[item] = letraInput;
                rodada.spanLetras[item].innerHTML = letraInput;
            });
            $letrasEnviadas.innerHTML += '<span class="letra-enviada certa">' + letraInput + '</span>';

            if(rodada.controladorPalavra.join('') == rodada.objetoPalavra.emArray.join('')){
                alert('parabéns, vc venceu');
                bancoPalavras.shift();
                startGame();
            }

        } else {
            $letrasEnviadas.innerHTML += '<span class="letra-enviada errada">' + letraInput + '</span>';
            rodada.erros++;
            $imgForca.setAttribute('src', 'images/boneco_forca' + rodada.erros + '.png');

            if (rodada.erros >= 7) {
                alert('vc perdeu, reiniciando rodada');
                startGame();
            }
        }
    }
}