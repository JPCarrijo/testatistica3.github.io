//função que cria o cabeçalho da tabela
function createHeader(obj) {
    //Comando que define os cabeçalhos da tabela
    let varNameHeader = document.getElementById('varNameHeader');
    let fi = document.getElementById('fi');
    let frPercent = document.getElementById('fr%');
    let facPercent = document.getElementById('fac%');
    let media = document.getElementById('media');
    let moda = document.getElementById('moda');
    let mediana = document.getElementById('mediana');
    let totalValores = document.getElementById('totalValores');
    let coeficienteVariacao = document.getElementById('coeficienteVariacao');
    let desvioPadrao = document.getElementById('desvioPadrao');
    let medidaSeparatriz = document.getElementById('medidaSeparatriz');

    varNameHeader.innerHTML = obj.varName
    fi.innerText = 'fi'
    let fac = document.getElementById('fac');
    fac.innerText = 'Fac';
    frPercent.innerText = 'fr%';
    facPercent.innerText = 'Fac%';
    media.innerText = 'Média';
    moda.innerText = 'Moda'
    mediana.innerText = 'Mediana';
    totalValores.innerText = 'Total';
    desvioPadrao.innerText = 'Desvio Padrão';
    coeficienteVariacao.innerText = 'Coeficiente de Variação';
    medidaSeparatriz.innerText = 'Medida Separatriz';
};