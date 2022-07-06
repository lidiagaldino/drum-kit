const sons = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav' 
}

const criarDiv = function(texto) {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('key-container').appendChild(div);
}

const exibir = function(sons) {
    Object.keys(sons).forEach(criarDiv)
} 

const som = function(tecla){
    const audio = new Audio(`../sounds/${sons[tecla]}`);
    audio.play();
} 

const addEfeito = function(tecla){
    document.getElementById(tecla).classList.toggle('active');
}
const removeEfeito = function(tecla){
    const div = document.getElementById(tecla);
    const remover = () => div.classList.remove('active');
    div.addEventListener('transitionend', remover);
}

const ativarDiv = function(evento){

    const tecla = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

    const letraVerifica = sons.hasOwnProperty(tecla);
    if(letraVerifica){
        addEfeito(tecla);
        som(tecla);
        removeEfeito(tecla);
    }
}

exibir(sons);

document.getElementById('key-container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);