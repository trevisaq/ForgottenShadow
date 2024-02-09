var entrar = document.getElementById('entrar');
var respostareal = '';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        window.location.href = "../desafio2/desafio2.html"
    }
});