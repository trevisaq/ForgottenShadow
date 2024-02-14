var entrar = document.getElementById('entrar');
var respostareal = 'atnirt';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('!!ia ossI')
        window.location.href = "../desafio7/desafio7.html"
    } else{
        alert('oãn euq ohcA')
    }
});