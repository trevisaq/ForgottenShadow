var entrar = document.getElementById('entrar');
var respostareal = 'hachiko';
var sleepSetTimeout_ctrl;



entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('ELE MESMO!!')
        window.location.href = "../desafio4/desafio4.html"
    } else{
        alert('Não, não, não.')
    }
});




