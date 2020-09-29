//Declaração de variáveis 
let inputedOptions = {};
let uploadedarrayOptions = {};
//------------------------------------------------------------------------------

//Acessando os elementos HTML
let btnCalcular = document.getElementById('btnCalcular');
let qltNominal = document.getElementById('qltNominal');
let qtDiscreta = document.getElementById('qtDiscreta');
let qtContinua = document.getElementById('qtContinua');
let table = document.getElementById('table');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let amostra = document.getElementById('amostra');
let populacao = document.getElementById('populacao');
let graficoId = document.getElementById('grafico');
let canvas = document.getElementById('myChart');
//let quartilOptions = document.getElementById('quartilOptions');
//------------------------------------------------------------------------------

//Ações
btnCalcular.addEventListener('click', calcular);






//------------------------------------------------------------------------------

//Funções
function calcular() {
    let inputValues = document.getElementById('inputValues').value.replace(/ /g, "").replace(/,/g, ".").split(';');
    let varNameInput = document.getElementById('varNameInput').value;
    let ordemQltOrdinal = document.getElementById('ordemQltOrdinal').value.replace(/ /g, "").replace(/,/g, ".").split(';');

    let treatedArray = parseArray(inputValues);

    try {
        variavelEscopoGlobal 
    } catch (error) {
        console.log('Nenhum arquivo selecionado.');
    }finally {
        inputedOptions.inputedValues = treatedArray;
        inputedOptions.countedElements = countElements(treatedArray);
        inputedOptions.noRepeats = [...new Set(treatedArray)]
        inputedOptions.varName = varNameInput;
        inputedOptions.order = parseArray(ordemQltOrdinal);
        inputedOptions.countedOrdinal = countOrdinal(inputedOptions.countedElements, inputedOptions.order);
        inputedOptions.countedFiOrdinal = countFi(inputedOptions.countedOrdinal)
        inputedOptions.totalInputs = calculateTotalInputs(treatedArray);
        inputedOptions.countedFi = countFi(inputedOptions.countedElements)

        inputedOptions.frPercent = calculateFrPercent(inputedOptions.countedFi, inputedOptions.totalInputs);

        inputedOptions.fac = calculateFac(inputedOptions.countedElements, inputedOptions.countedFi);
        inputedOptions.facOrdinal = calculateFac(inputedOptions.countedOrdinal, inputedOptions.countedFiOrdinal);
        inputedOptions.mediana = calculateMediana(inputedOptions.totalInputs, inputedOptions.fac, inputedOptions.countedElements);

        if (qltNominal.checked) {
            inputedOptions.media = 'Não possui média'

            inputedOptions.type = 'pie';

            inputedOptions.colors = createHexCodeArray(inputedOptions.countedFi);

            inputedOptions.moda = calculateModa(inputedOptions.noRepeats, inputedOptions.countedFi);

            inputedOptions.desvioPadrao = 'Não possui desvio';

            inputedOptions.coeficienteVariacao = 'Não possui coeficiente de variação';

            inputedOptions.quartil = calculateQuartil(inputedOptions.totalInputs, quartilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.quintil = calculateQuintil(inputedOptions.totalInputs, quintilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.decil = calculateDecil(inputedOptions.totalInputs, decilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.porcentil = calculatePorcentil(inputedOptions.totalInputs, porcentilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            if (separatrizes.value === 'Quartil') {
                inputedOptions.separatriz = inputedOptions.quartil.quartil
            } else if (separatrizes.value === 'Quintil'){
                inputedOptions.separatriz = inputedOptions.quintil.quintil
            } else if (separatrizes.value === 'Decil') {
                inputedOptions.separatriz = inputedOptions.decil.decil
            } else if (separatrizes.value === 'Porcentil') {
                inputedOptions.separatriz = inputedOptions.porcentil.porcentil
            }else{
                inputedOptions.separatriz = 'Não escolhida'
            }
            
        };

        if (qltOrdinal.checked) {
            inputedOptions.media = 'Não possui média';

            inputedOptions.moda = calculateModa(inputedOptions.countedOrdinal);
            
            inputedOptions.mediana = calculateMediana(inputedOptions.totalInputs, inputedOptions.facOrdinal, inputedOptions.countedOrdinal);

            inputedOptions.type = 'pie';

            inputedOptions.colors = createHexCodeArray(inputedOptions.countedFiOrdinal);

            inputedOptions.desvioPadrao = 'Não possui desvio';

            inputedOptions.coeficienteVariacao = 'Não possui coeficiente de variação';

            inputedOptions.quartil = calculateQuartil(inputedOptions.totalInputs, quartilOptions.value, inputedOptions.facOrdinal, inputedOptions.order);

            inputedOptions.quintil = calculateQuintil(inputedOptions.totalInputs, quintilOptions.value, inputedOptions.facOrdinal, inputedOptions.order);

            inputedOptions.decil = calculateDecil(inputedOptions.totalInputs, decilOptions.value, inputedOptions.facOrdinal, inputedOptions.order);

            inputedOptions.porcentil = calculatePorcentil(inputedOptions.totalInputs, porcentilOptions.value, inputedOptions.facOrdinal, inputedOptions.order);

            if (separatrizes.value === 'Quartil') {
                inputedOptions.separatriz = inputedOptions.quartil.quartil
            } else if (separatrizes.value === 'Quintil') {
                inputedOptions.separatriz = inputedOptions.quintil.quintil
            } else if (separatrizes.value === 'Decil') {
                inputedOptions.separatriz = inputedOptions.decil.decil
            } else if (separatrizes.value === 'Porcentil') {
                inputedOptions.separatriz = inputedOptions.porcentil.porcentil
            } else {
                inputedOptions.separatriz = 'Não escolhida'
            }
        };

        if (qtDiscreta.checked) {
            inputedOptions.media = calculateMediaDiscreta(inputedOptions.countedElements, inputedOptions.totalInputs);

            inputedOptions.type = 'bar';

            inputedOptions.moda = calculateModa(inputedOptions.countedElements);

            inputedOptions.colors = createHexCodeArray(inputedOptions.countedFi);

            if(populacao.checked){
                let jj = calculateDesvioPadrao(inputedOptions.noRepeats, inputedOptions.media, inputedOptions.countedFi, inputedOptions.totalInputs);
                inputedOptions.desvioPadrao = jj.desvioPadrao;
                inputedOptions.coeficienteVariacao = jj.coeficienteVariacao;
            }else if(amostra.checked){
                let jj = calculateDesvioPadrao(inputedOptions.noRepeats, inputedOptions.media, inputedOptions.countedFi, (inputedOptions.totalInputs - 1));
                inputedOptions.desvioPadrao = jj.desvioPadrao;
                inputedOptions.coeficienteVariacao = jj.coeficienteVariacao;
            }

            inputedOptions.quartil = calculateQuartil(inputedOptions.totalInputs, quartilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.quintil = calculateQuintil(inputedOptions.totalInputs, quintilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.decil = calculateDecil(inputedOptions.totalInputs, decilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            inputedOptions.porcentil = calculatePorcentil(inputedOptions.totalInputs, porcentilOptions.value, inputedOptions.fac, inputedOptions.noRepeats);

            if (separatrizes.value === 'Quartil') {
                inputedOptions.separatriz = inputedOptions.quartil.quartil
            } else if (separatrizes.value === 'Quintil') {
                inputedOptions.separatriz = inputedOptions.quintil.quintil
            } else if (separatrizes.value === 'Decil') {
                inputedOptions.separatriz = inputedOptions.decil.decil
            } else if (separatrizes.value === 'Porcentil') {
                inputedOptions.separatriz = inputedOptions.porcentil.porcentil
            } else {
                inputedOptions.separatriz = 'Não escolhida'
            }
            
        }

        if (qtContinua.checked) {
            let x = calculateContinua(inputedOptions.inputedValues, inputedOptions.totalInputs);

            inputedOptions.amplitude = x.amplitude;

            inputedOptions.linhas = x.linhas;

            inputedOptions.intervalo = x.intervalo;

            inputedOptions.type = 'bar';

            inputedOptions.colors = createHexCodeArray(inputedOptions.countedFi);

            inputedOptions.pontoMedioContinua = calculatePontoMedioIntContinua(inputedOptions.noRepeats, inputedOptions.intervalo, inputedOptions.linhas);

            inputedOptions.countedFi = calculateFiContinua(inputedOptions.pontoMedioContinua.valor1, inputedOptions.linhas, inputedOptions.inputedValues, inputedOptions.intervalo);

            inputedOptions.media = calculateMediaContinua(inputedOptions.pontoMedioContinua.media, inputedOptions.countedFi, inputedOptions.totalInputs);

            inputedOptions.fac = calculateFacContinua(inputedOptions.linhas, inputedOptions.countedFi);
            
            inputedOptions.moda = calculateModaContinua(inputedOptions.pontoMedioContinua.media,inputedOptions.countedFi);

            inputedOptions.mediana = calculateMedianaContinua(inputedOptions.pontoMedioContinua.valor1, inputedOptions.totalInputs, inputedOptions.fac, inputedOptions.countedFi, inputedOptions.intervalo);

            inputedOptions.labels = createChartLabels(inputedOptions.pontoMedioContinua.valor1, inputedOptions.pontoMedioContinua.valor2, inputedOptions.linhas);

            if(populacao.checked){
                let jj = calculateDesvioPadrao(inputedOptions.pontoMedioContinua.media, inputedOptions.media, inputedOptions.countedFi, inputedOptions.totalInputs);
                inputedOptions.desvioPadrao = jj.desvioPadrao;
                inputedOptions.coeficienteVariacao = jj.coeficienteVariacao;
            }else if(amostra.checked){
                let jj = calculateDesvioPadrao(inputedOptions.pontoMedioContinua.media, inputedOptions.media, inputedOptions.countedFi, (inputedOptions.totalInputs - 1));
                inputedOptions.desvioPadrao = jj.desvioPadrao;
                inputedOptions.coeficienteVariacao = jj.coeficienteVariacao;
            }

            inputedOptions.separatriz = calculateSeparatrizContinua(inputedOptions.totalInputs, inputedOptions.pontoMedioContinua.valor1, inputedOptions.fac, inputedOptions.countedFi, inputedOptions.intervalo);
        }
        console.log(inputedOptions);

        if (qltNominal.checked) {
            createHeader(inputedOptions);
            createTable(inputedOptions.countedElements, inputedOptions.totalInputs, inputedOptions.fac);
            createTable2(inputedOptions.media, inputedOptions.moda, inputedOptions.mediana, inputedOptions.totalInputs);
            createTable3(inputedOptions.desvioPadrao, inputedOptions.coeficienteVariacao, inputedOptions.separatriz);
            createChart(inputedOptions.noRepeats, inputedOptions.varName, inputedOptions.countedFi, inputedOptions.type, inputedOptions.colors, inputedOptions.frPercent);
        }else if (qltOrdinal.checked) {
            createHeader(inputedOptions);
            createTable(inputedOptions.countedOrdinal, inputedOptions.totalInputs, inputedOptions.facOrdinal);
            createTable2(inputedOptions.media, inputedOptions.moda, inputedOptions.mediana, inputedOptions.totalInputs);
            createTable3(inputedOptions.desvioPadrao, inputedOptions.coeficienteVariacao, inputedOptions.separatriz);
            createChart(inputedOptions.noRepeats, inputedOptions.varName, inputedOptions.countedFiOrdinal, inputedOptions.type, inputedOptions.colors, inputedOptions.frPercent);
        } else if (qtContinua.checked) {
            createHeader(inputedOptions);
            createTableContinua(inputedOptions.noRepeats, inputedOptions.intervalo, inputedOptions.linhas, inputedOptions.inputedValues, inputedOptions.totalInputs, inputedOptions.fac);
            createTable2(inputedOptions.media, inputedOptions.moda, inputedOptions.mediana, inputedOptions.totalInputs);
            createTable3(inputedOptions.desvioPadrao, inputedOptions.coeficienteVariacao, inputedOptions.separatriz);
            createChart(inputedOptions.labels, inputedOptions.varName, inputedOptions.countedFi, inputedOptions.type, inputedOptions.colors, inputedOptions.frPercent);
        } else if(qtDiscreta.checked){
            createHeader(inputedOptions);
            createTable(inputedOptions.countedElements, inputedOptions.totalInputs, inputedOptions.fac);
            createTable2(inputedOptions.media, inputedOptions.moda, inputedOptions.mediana, inputedOptions.totalInputs);
            createTable3(inputedOptions.desvioPadrao, inputedOptions.coeficienteVariacao, inputedOptions.separatriz);
            createChart(inputedOptions.noRepeats, inputedOptions.varName, inputedOptions.countedFi, inputedOptions.type, inputedOptions.colors, inputedOptions.frPercent);
        }
    };

    


    
    


    //==========================================================================================
/*     let noTitleArray = variavelEscopoGlobal.slice(0)
    noTitleArray.shift();

    uploadedarrayOptions.uploadedArray = variavelEscopoGlobal
    uploadedarrayOptions.notitle = noTitleArray;
    uploadedarrayOptions.inputedValues = parseArray(uploadedarrayOptions.notitle)
    uploadedarrayOptions.countedElements = countElements(uploadedarrayOptions.inputedValues);
    uploadedarrayOptions.noRepeats = [...new Set(uploadedarrayOptions.inputedValues)]
    uploadedarrayOptions.varName = uploadedarrayOptions.uploadedArray[0]
    uploadedarrayOptions.order = parseArray(ordemQltOrdinal);
    uploadedarrayOptions.countedOrdinal = countOrdinal(uploadedarrayOptions.countedElements, uploadedarrayOptions.order);
    uploadedarrayOptions.countedFiOrdinal = countFi(uploadedarrayOptions.countedOrdinal)
    uploadedarrayOptions.totalInputs = calculateTotalInputs(uploadedarrayOptions.inputedValues);
    uploadedarrayOptions.countedFi = countFi(uploadedarrayOptions.countedElements)
    uploadedarrayOptions.moda = calculateModa(uploadedarrayOptions.countedElements);
    uploadedarrayOptions.fac = calculateFac(uploadedarrayOptions.countedElements, uploadedarrayOptions.countedFi);
    uploadedarrayOptions.facOrdinal = calculateFac(uploadedarrayOptions.countedOrdinal, uploadedarrayOptions.countedFiOrdinal);
    uploadedarrayOptions.mediana = calculateMediana(uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac, uploadedarrayOptions.countedElements);
    if (qltNominal.checked) {
        uploadedarrayOptions.media = 'Não possui média'
        uploadedarrayOptions.type = 'pie';
    };

    if (qltOrdinal.checked) {
        uploadedarrayOptions.media = 'Não possui média'
        uploadedarrayOptions.moda = calculateModa(uploadedarrayOptions.countedOrdinal);
        uploadedarrayOptions.mediana = calculateMediana(uploadedarrayOptions.totalInputs, uploadedarrayOptions.facOrdinal, uploadedarrayOptions.countedOrdinal);
        uploadedarrayOptions.type = 'pie';

    };

    if (qtDiscreta.checked) {
        uploadedarrayOptions.media = calculateMediaDiscreta(uploadedarrayOptions.countedElements, uploadedarrayOptions.totalInputs)
        uploadedarrayOptions.type = 'bar'
    }

    if (qtContinua.checked) {
        let x = calculateContinua(uploadedarrayOptions.inputedValues, uploadedarrayOptions.totalInputs)
        uploadedarrayOptions.amplitude = x.amplitude;
        uploadedarrayOptions.linhas = x.linhas;
        uploadedarrayOptions.intervalo = x.intervalo;
        uploadedarrayOptions.type = 'bar';
        uploadedarrayOptions.pontoMedioContinua = calculatePontoMedioIntContinua(uploadedarrayOptions.noRepeats, uploadedarrayOptions.intervalo, uploadedarrayOptions.linhas);
        uploadedarrayOptions.countedFi = calculateFiContinua(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.linhas, uploadedarrayOptions.inputedValues, uploadedarrayOptions.intervalo);
        uploadedarrayOptions.media = calculateMediaContinua(uploadedarrayOptions.pontoMedioContinua.media, uploadedarrayOptions.countedFi, uploadedarrayOptions.totalInputs);
        uploadedarrayOptions.moda = calculateModaContinua(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.pontoMedioContinua.valor2, uploadedarrayOptions.countedFi);
        uploadedarrayOptions.fac = calculateFacContinua(uploadedarrayOptions.linhas, uploadedarrayOptions.countedFi);
        uploadedarrayOptions.mediana = calculateMedianaContinua(uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac, uploadedarrayOptions.pontoMedioContinua.media, uploadedarrayOptions.countedFi, uploadedarrayOptions.intervalo);
        uploadedarrayOptions.labels = createChartLabels(uploadedarrayOptions.pontoMedioContinua.valor1, uploadedarrayOptions.pontoMedioContinua.valor2, uploadedarrayOptions.linhas);
    }
    if (qltOrdinal.checked) {
        createHeader(inputedOptions);
        createTable(uploadedarrayOptions.countedOrdinal, uploadedarrayOptions.totalInputs, uploadedarrayOptions.facOrdinal);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.noRepeats, uploadedarrayOptions.varName, uploadedarrayOptions.countedFiOrdinal, uploadedarrayOptions.type);
    } else if (qtContinua.checked) {
        createHeader(inputedOptions);
        createTableContinua(uploadedarrayOptions.noRepeats, uploadedarrayOptions.intervalo, uploadedarrayOptions.linhas, uploadedarrayOptions.inputedValues, uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.labels, uploadedarrayOptions.varName, uploadedarrayOptions.countedFi, uploadedarrayOptions.type);
    } else {
        createHeader(inputedOptions);
        createTable(uploadedarrayOptions.countedElements, uploadedarrayOptions.totalInputs, uploadedarrayOptions.fac);
        createTable2(uploadedarrayOptions.media, uploadedarrayOptions.moda, uploadedarrayOptions.mediana, uploadedarrayOptions.totalInputs);
        createChart(uploadedarrayOptions.noRepeats, uploadedarrayOptions.varName, uploadedarrayOptions.countedFi, uploadedarrayOptions.type);
    }

    console.log(uploadedarrayOptions);
*/
} 
    





























