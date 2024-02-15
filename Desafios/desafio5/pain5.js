var entrar = document.getElementById('entrar');
var respostareal = 'pierre';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Admita, foi uma boa piada')
        window.location.href = "../desafio6/Doze.html"
    } else{
        alert('Quem diria... Erradissimo')
    }
});