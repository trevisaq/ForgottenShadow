var entrar = document.getElementById('entrar');
var respostareal = 'atnirt';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        window.location.href = "../desafio7/desafio7.html"
    } else{
        alert('Acho que não.')
    }
});