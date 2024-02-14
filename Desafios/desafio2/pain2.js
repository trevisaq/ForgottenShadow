var entrar = document.getElementById('entrar');
var respostareal = 'raios';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Parabéns, você mandou bem!')
        window.location.href = "../desafio3/desafio3.html"
    } else{
        alert('Erroooou')
    }
});