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
    let counted = countElements(treatedArray);
    let parsedOrdinal = parseArray(ordemQltOrdinal);
    let countedOrdinal = countElements(parsedOrdinal);
    //array sem valores repetidos, para ser usado na primeira coluna da tabela
    let valoresSemRepeticao = [...new Set(treatedArray)];



    inputedArrayOptions.inputedValues = treatedArray;
    inputedArrayOptions.countedElements = counted;
    inputedArrayOptions.noRepeats = valoresSemRepeticao;
    inputedArrayOptions.varName = varNameInput;
    inputedArrayOptions.countedOrdinal = countedOrdinal;
    inputedArrayOptions.order = parsedOrdinal;
    inputedArrayOptions.totalInputs = calculateTotalInputs(treatedArray);
    //array que guarda os valores impressos na coluna fi
    inputedArrayOptions.countedFi = countFi(inputedArrayOptions.countedElements)
    //guardando o valor da moda
    inputedArrayOptions.moda = calculateModa(inputedArrayOptions.countedElements);
    //inputedArrayOptions.mediana = calculateMediana(inputedArrayOptions.totalInputs);
    inputedArrayOptions.validation = validarDados(inputedArrayOptions.inputedValues);
    if (qtContinua.checked) {
        let x = calculateContinua(inputedArrayOptions.inputedValues, inputedArrayOptions.totalInputs)
        inputedArrayOptions.amplitude = x.amplitude;
        inputedArrayOptions.linhas = x.linhas;
        inputedArrayOptions.intervalo = x.intervalo;
    }
    console.log('inputedArray');
    console.log(inputedArrayOptions);




    if (inputedArrayOptions.validation) {
        if (inputValues == '') {
            createHeader(uploadedarrayOptions);
            createTable(uploadedarrayOptions.countedElements);
        } else if (qltOrdinal.checked) {
            createHeader(inputedArrayOptions);
        } else if (qtContinua.checked) {
            createHeader(inputedArrayOptions);
            createTableContinua(inputedArrayOptions.noRepeats, inputedArrayOptions.intervalo, inputedArrayOptions.linhas, inputedArrayOptions.inputedValues);
            inputedArrayOptions.type = 'bar';
            createChart(inputedArrayOptions);
        } else {
            createHeader(inputedArrayOptions);
            createTable(inputedArrayOptions.countedElements, inputedArrayOptions.totalInputs, inputedArrayOptions.countedFi);
            inputedArrayOptions.type = 'pie';
            createChart(inputedArrayOptions);
        }
    }
};

























