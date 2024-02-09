var entrar = document.getElementById('entrar');
var respostareal = 'cachoeira';
var sleepSetTimeout_ctrl;

function sleep(ms) {
    clearInterval(sleepSetTimeout_ctrl);
    return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
}

entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        sleep(10000)
        window.location.href = "../Desafios/desafio1/desafio1.html"
    }
});