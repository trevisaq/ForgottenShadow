var entrar = document.getElementById('entrar');
var respostareal = 'michelangelo';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('...Parabéns, você mandou bem!')
        window.location.href = "../Final/index.html"
    } else{
        alert('Acho que não.')
    }
});