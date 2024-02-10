var entrar = document.getElementById('entrar');
var respostareal = 'raios';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('ISSO AI, você entendeu')
        window.location.href = "../desafio2/desafio2.html"
    } else{
        alert('Acho que não.')
    }
});