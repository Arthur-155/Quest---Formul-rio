//Ao clicar para enviar o formulário, se caso
//algum campo não estiver preenchido, a borda
//do input deve ficar vermelha e uma mensagem
//de "campo obrigatório" deve aparecer embaixo
//do campo que não foi preenchido, conforme o
//figma.

document.getElementById('submit-button').addEventListener('click', function(event){
    event.preventDefault();

    const mensagemDeErro = document.querySelectorAll('.mensagem-de-erro');
    mensagemDeErro.forEach(msg => msg.remove());

    const conferirCampos = document.querySelectorAll('.info-usuarios input');
    let valido = true

    conferirCampos.forEach(campo =>{
        if(campo.value.trim() === '') {
            campo.style.border = '2px solid red';
            const mensagemDeErro = document.createElement('p');
            mensagemDeErro.className = 'mensagem-de-erro';
            mensagemDeErro.style.color = 'red';
            mensagemDeErro.style.fontSize = '10px';
            mensagemDeErro.innerText = 'campo obrigatório';
            campo.parentNode.insertBefore (mensagemDeErro, campo.nextSibling);
            valido = false;
        }else{
            campo.style.border = '2px solid #00C22B'
        }
    });

    if(valido){
        console.log('formulário enviado');
    }

    // ultima tentativa se n for agora n vai mais
})

