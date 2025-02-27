var entrar = document.getElementById('entrar');
var respostareal = 'pierre';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Admita, foi uma boa piada')
        window.location.href = "../desafio6/Doze.html"
    }
    if (resposta == 'marie' || resposta == 'curie'){
        alert('É, é ela. Mas não é dela que estou falando.')
    }
    else{
        alert('Quem diria... Erradissimo')
    }
});