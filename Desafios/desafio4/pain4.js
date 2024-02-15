var entrar = document.getElementById('entrar');
var respostareal = 'wyatt';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');
    if (resposta === respostareal){
        alert('Acerto, miserávi')
        window.location.href = "../desafio5/Radio.html"
    } else{
        alert('Acho que não.')
    }
});