var entrar = document.getElementById('entrar');
var respostareal = 'wyatt';
var sleepSetTimeout_ctrl;

entrar.addEventListener('click', () => {
    let resposta = prompt('');
    if (resposta === respostareal){
        alert('Acerto, miserávi')
        window.location.href = "../desafio5/Radio.html"
    }
    if(resposta == 'playtest'){
        alert('Já tentou ver a página como um todo?')
    }
    else{
        alert('Acho que não.')
    }
});