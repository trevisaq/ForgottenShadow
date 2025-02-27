var entrar = document.getElementById('entrar');
var respostareal = 'tres';
var sleepSetTimeout_ctrl;

entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Ai sim!!')
        window.location.href = "../Desafios/desafio1/UmBeloLugar.html"
    } 
    if(resposta == "três" || resposta == 'Três'){
        alert('EU DISSE SEM ACENTOS')
    }
    if(resposta == 'Tres'){
        alert('Sem letras maiúsculas -_-')
    }
    else{
        alert('Leu mesmo as regras?')
    }
});