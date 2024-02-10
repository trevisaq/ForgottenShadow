var entrar = document.getElementById('entrar');
var respostareal = 'cachoeira';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        window.location.href = "../Desafios/desafio1/desafio1.html"
    }
});