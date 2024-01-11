const form = document.getElementById('form');

function validar(campoA, campoB) {
    if (campoB > campoA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    let formValidar = false;
    const campoA = parseInt(document.getElementById('campo_a').value);
    const campoB = parseInt(document.getElementById('campo_b').value);

    formValidar = validar(campoA, campoB);

    if (formValidar) {
        const containerMensagemSucesso = document.querySelector('.mensagem_sucesso')
        containerMensagemSucesso.innerHTML = '<img src="imagens/taca_campeão.webp" alt="Escudo do Timão">';
        containerMensagemSucesso.style.display = 'block';

    } else {
        const containerMensagemErro = document.querySelector('.mensagem_sucesso')
        containerMensagemErro.innerHTML = '<img src="imagens/rebaixamento.jpeg" alt="Escudo do Timão">';
        containerMensagemErro.style.display = 'block';
    }

    console.log('Formulário submetido');
});
