//Declaração de variáveis 
let uploadedarrayOptions = {};
let inputedArrayOptions = {};
//------------------------------------------------------------------------------

//Acessando os elementos HTML
let btnCalcular = document.getElementById('btnCalcular');
let csvFile = document.getElementById("csv-file");
let qltNominal = document.getElementById('qltNominal');
let qtDiscreta = document.getElementById('qtDiscreta');
let qtContinua = document.getElementById('qtContinua');
let table = document.getElementById('table');
let table2 = document.getElementById('table2');
//------------------------------------------------------------------------------

//Ações
btnCalcular.addEventListener('click', calcular);
csvFile.addEventListener("change", upload, false);
//------------------------------------------------------------------------------

//Funções
function calcular() {
    let inputValues = document.getElementById('inputValues').value.replace(/ /g, "").replace(/,/g, ".").split(';');
    let varNameInput = document.getElementById('varNameInput').value;
    let ordemQltOrdinal = document.getElementById('ordemQltOrdinal').value.replace(/ /g, "").replace(/,/g, ".").split(';');

    let treatedArray = parseArray(inputValues);
    
    inputedArrayOptions.inputedValues = treatedArray;
    inputedArrayOptions.countedElements = countElements(treatedArray);
    inputedArrayOptions.noRepeats = [...new Set(treatedArray)]
    inputedArrayOptions.varName = varNameInput;
    inputedArrayOptions.order = parseArray(ordemQltOrdinal);
    inputedArrayOptions.countedOrdinal = countOrdinal(inputedArrayOptions.countedElements, inputedArrayOptions.order);
    inputedArrayOptions.countedFiOrdinal = countFi(inputedArrayOptions.countedOrdinal)
    inputedArrayOptions.totalInputs = calculateTotalInputs(treatedArray);
    inputedArrayOptions.countedFi = countFi(inputedArrayOptions.countedElements)
    inputedArrayOptions.moda = calculateModa(inputedArrayOptions.countedElements);
    inputedArrayOptions.fac = calculateFac(inputedArrayOptions.countedElements,inputedArrayOptions.countedFi);
    inputedArrayOptions.facOrdinal = calculateFac(inputedArrayOptions.countedOrdinal, inputedArrayOptions.countedFiOrdinal);
    inputedArrayOptions.mediana = calculateMediana(inputedArrayOptions.totalInputs, inputedArrayOptions.fac, inputedArrayOptions.countedElements);

    //Guardando o valor da média para qualitativas
    if(qltNominal.checked){
        inputedArrayOptions.media = 'Não possui média'
        inputedArrayOptions.type = 'pie';
    };
    
    if(qltOrdinal.checked){
        inputedArrayOptions.media = 'Não possui média'
        inputedArrayOptions.moda = calculateModa(inputedArrayOptions.countedOrdinal);
        inputedArrayOptions.mediana = calculateMediana(inputedArrayOptions.totalInputs, inputedArrayOptions.facOrdinal, inputedArrayOptions.countedOrdinal);
        inputedArrayOptions.type = 'pie';
    };

    if(qtDiscreta.checked){
        inputedArrayOptions.media = calculateMediaDiscreta(inputedArrayOptions.countedElements, inputedArrayOptions.totalInputs)
        inputedArrayOptions.type = 'bar'
    }
    
    if (qtContinua.checked) {
        let x = calculateContinua(inputedArrayOptions.inputedValues, inputedArrayOptions.totalInputs)
        inputedArrayOptions.amplitude = x.amplitude;
        inputedArrayOptions.linhas = x.linhas;
        inputedArrayOptions.intervalo = x.intervalo;
    }
    console.log(inputedArrayOptions);



    inputedArrayOptions.validation = validarDados(inputedArrayOptions.inputedValues);
    if (inputedArrayOptions.validation) {
        if (inputValues == '') {
            createHeader(uploadedarrayOptions);
            createTable(uploadedarrayOptions.countedElements);
        } else if (qltOrdinal.checked) {
            createHeader(inputedArrayOptions);
            createTable(inputedArrayOptions.countedOrdinal, inputedArrayOptions.totalInputs, inputedArrayOptions.facOrdinal);
            createTable2(inputedArrayOptions.media, inputedArrayOptions.moda, inputedArrayOptions.mediana, inputedArrayOptions.countedFi);
            createChart(inputedArrayOptions);
        } else if (qtContinua.checked) {
            createHeader(inputedArrayOptions);
            createTableContinua(inputedArrayOptions.noRepeats, inputedArrayOptions.intervalo, inputedArrayOptions.linhas, inputedArrayOptions.inputedValues);
            inputedArrayOptions.type = 'bar';
            createChart(inputedArrayOptions);
        } else {
            createHeader(inputedArrayOptions);
            createTable(inputedArrayOptions.countedElements, inputedArrayOptions.totalInputs, inputedArrayOptions.fac);
            createTable2(inputedArrayOptions.media, inputedArrayOptions.moda,inputedArrayOptions.mediana,inputedArrayOptions.countedFi);
            createChart(inputedArrayOptions);
        }
    }
};

























