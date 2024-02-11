var entrar = document.getElementById('entrar');
var respostareal = 'pierre';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        window.location.href = "../desafio6/desafio6.html"
    } else{
        alert('Acho que não.')
    }
});