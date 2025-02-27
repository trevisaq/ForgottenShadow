var entrar = document.getElementById('entrar');
var respostareal = 'cachoeira';
var sleepSetTimeout_ctrl;

entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Isso mesmo!, até que não foi dificil')
        window.location.href = "../desafio2/Sistematico.html"
    }
    if(resposta == 'montanha' || resposta == 'Montanha'){
        alert('Isso parece uma montanha?')

    } 
    if(resposta == 'rio' || resposta == 'Rio'){
        alert('Não, mas é um bom caminho')
    }
    else{
        alert('Acho que não.')
    }

}); 