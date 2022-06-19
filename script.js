const calcular = document.getElementById('calcular')
function imc () {
    var peso = document.getElementById('massa').value;
    var altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado')

    if (peso !== '' && altura !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        resultado.textContent = `IMC = ${valorIMC}`
    }else{
        resultado.textContent = 'Digite valores em todos os campos'
    }
}

calcular.addEventListener('click', imc)