var entrar = document.getElementById('entrar');
var respostareal = 'cresce';
var sleepSetTimeout_ctrl;

entrar.addEventListener('click', () => {
    let resposta = prompt('');

    if (resposta === respostareal){
        alert('Inacreditável :D')
        window.location.href = "../Final/index.html"
    } else{
        alert('Quase lá... só que não')
    }
});
