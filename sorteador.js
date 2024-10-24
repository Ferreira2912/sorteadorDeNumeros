function sortearNumero() {
    const min = parseInt(document.querySelector('.input-min').value);
    const max = parseInt(document.querySelector('.input-max').value);
    
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    
    document.querySelector('.resultado').textContent = numeroSorteado;
}

function limparCampos() {
    document.querySelector('.input-min').value = '';
    document.querySelector('.input-max').value = '';
    document.querySelector('.resultado').textContent = '--';
}

document.querySelector('.botao-sortear').addEventListener('click', sortearNumero);
document.querySelector('.limpar-numeros').addEventListener('click', limparCampos);
