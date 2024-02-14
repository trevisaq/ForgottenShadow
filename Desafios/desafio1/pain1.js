var entrar = document.getElementById('entrar');
var respostareal = 'cachoeira';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Isso mesmo!, até que não foi dificil')
        window.location.href = "../desafio2/desafio2.html"
    } else{
        alert('Acho que não.')
    }
});