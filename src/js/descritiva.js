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
//------------------------------------------------------------------------------

//Ações
btnCalcular.addEventListener('click', calcular);
csvFile.addEventListener("change", upload, false);
//------------------------------------------------------------------------------

//Funções
function calcular() {
    let inputValues = document.getElementById('inputValues').value.replace(/ /g, "").replace(/,/g, ".").split(';');
    let varNameInput = document.getElementById('varNameInput').value;
    let treatedArray = parseArray(inputValues);

    

    let counted = countElements(treatedArray);

    let ordemQltOrdinal = document.getElementById('ordemQltOrdinal').value.replace(/ /g, "").replace(/,/g, ".").split(';');

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

    let totalInputs = 0
    for(let i of treatedArray){
        totalInputs++
    }
    inputedArrayOptions.totalInputs = totalInputs;

    //array que guarda os valores impressos na coluna fi
    inputedArrayOptions.countedFi = countFi(inputedArrayOptions.countedElements)
    


    console.log('total de elementos');
    console.log(totalInputs);
    
    if (qtContinua.checked) {
        let x = calculateContinua(inputedArrayOptions.inputedValues,inputedArrayOptions.totalInputs)
        console.log(x);
        inputedArrayOptions.amplitude = x.amplitude;
        inputedArrayOptions.linhas = x.linhas;
        inputedArrayOptions.intervalo = x.intervalo;
    }
    
    console.log('Input Values:');
    console.log(inputValues);

    console.log('Array tratado:');
    console.log(treatedArray);

    console.log('inputedArray');
    console.log(inputedArrayOptions);



    if (inputValues == '') {
        //validateData(uploadedarrayOptions.noTitle);
        createHeader(uploadedarrayOptions);
        createTable(uploadedarrayOptions.countedElements);
    } else if (qltOrdinal.checked) {
        //validateData(treatedArray);
        createHeader(inputedArrayOptions);
        createTable(inputedArrayOptions.countedElements);
    } else if (qtContinua.checked){
        createHeader(inputedArrayOptions);
        createTableContinua(inputedArrayOptions.noRepeats,inputedArrayOptions.intervalo, inputedArrayOptions.linhas, inputedArrayOptions.inputedValues)
    }else {
        //validateData(treatedArray);
        createHeader(inputedArrayOptions);
        createTable(inputedArrayOptions.countedElements);
    }




}

//Todo valor de input entra como string. Essa função verifica se o valor pode ser convertido em números e, caso seja possível, faz a conversão e joga dentro do array parsedArray. Caso não seja possível, joga o elemento em parsedArray do jeito que está.
function parseArray(arr) {
    let temp = [];
    for (let i of arr) { !isNaN(i) ? temp.push(+i) : temp.push(i) };
    return temp
}

//comando que conta quantas vezes cada elemento aparece em um array
function countElements(arr) {

    var occurrences = arr.reduce(function (obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    return occurrences
}

function countFi(obj){
    let result = [];
    for(let i in obj){
        result.push(obj[i])
    }
    return result
}

function calculateContinua(arr,prop){
    let result = {};
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    //cálculo da amplitude
    result.amplitude = arr[arr.length - 1] - arr[0]//referência
    console.log(result.amplitude);
    //linhas
    result.linhas = Math.floor(Math.sqrt(prop))
    console.log('linhas');
    console.log(result.linhas);
    //intervalo
    result.intervalo = Math.round((result.amplitude + 1) / result.linhas);
    console.log('intervalo');
    console.log(result.intervalo);
    return result
}

/* function validateData(arr) {
    let inputValues = document.getElementById('inputValues');
    if (qltNominal.checked || qltOrdinal.checked) {
        for (let i of arr) {
            if (!isNaN(i)) alert('A variável qualitativa nominal não aceita números. Por favor, entre novamente com os dados.');
        }
        inputValues.focus();
    } else {
        if (qtDiscreta.checked || qtContinua.checked) {
            for (let i of arr) {
                if (isNaN(i)) alert('A variável qualitativa nominal não aceita caracteres não numéricos. Por favor, entre novamente com os dados.');
            }
        }
        inputValues.focus(); 
    }
} */

//Função que transforma o arquivo csv escolhido em um array.
function upload(event) {
    let data = null;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        let csvData = event.target.result;
        let data = Papa.parse(csvData, { header: false, skipEmptyLines: true });
        let temp = [].concat.apply([], data.data);
        console.log(temp);
        //array com os valores do documento carregado e tratados
        let uploadedArray = parseArray(temp)
        uploadedarrayOptions.varName = uploadedArray[0]
        //cópia do array para retirar o primeiro elemento, que é o nome da variável e não precisa estar no array para os cálculos futuros
        let noTitleArray = uploadedArray.slice(0)
        noTitleArray.shift();

        //array sem valores repetidos, para ser usado na primeira coluna da tabela
        let valoresSemRepeticao = [...new Set(noTitleArray)]
        uploadedarrayOptions.noRepeats = valoresSemRepeticao

        let count = countElements(noTitleArray)
        console.log('counted elements');
        console.log(count);

        uploadedarrayOptions.countedElements = count
        let totalInputs = 0
        for (let i of noTitleArray) {
            totalInputs++
        }
        uploadedarrayOptions.totalInputs = totalInputs;

        /* if (qtContinua.checked) {
            let x = calculateContinua(uploadedarrayOptions.noTitle, uploadedarrayOptions.totalInputs)
            console.log(x);
            uploadedarrayOptions.amplitude = x.amplitude;
            uploadedarrayOptions.linhas = x.linhas;
            uploadedarrayOptions.intervalo = x.intervalo;
        } */

        console.log('Array sem o nome da variável');
        console.log(noTitleArray);
        console.log('treated array after upload');
        console.log(uploadedArray);

        uploadedarrayOptions.uploaded = uploadedArray
        uploadedarrayOptions.noTitle = noTitleArray

        


        console.log('Array options:');
        console.log(uploadedarrayOptions);
        return uploadedarrayOptions;

    };
    reader.onerror = function () {
        alert("Unable to read" + file.fileName);
    };
}

//função que cria o cabeçalho da tabela
function createHeader(obj) {
    //Comando que define os cabeçalhos da tabela
    let varNameHeader = document.getElementById('varNameHeader');
    let fi = document.getElementById('fi');

    varNameHeader.innerHTML = obj.varName
    fi.innerText = 'fi'
    let fac = document.getElementById('fac');
    fac.innerText = 'Fac';
};

//Função que insere os dados na tabela
function createTable(obj,prop) {
    for (let i in obj) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let cellfi = row.insertCell();

        //let cellFac = row.insertCell();
        let text = document.createTextNode(i);
        let textfi = document.createTextNode(obj[i]);
        //let textFac = document.createTextNode(prop[i]+=);
        cell.appendChild(text);
        cellfi.appendChild(textfi);
    }
}
function createTableContinua(arr, intervalo, linhas, arr2){
    arr.sort(function (a, b) {
        return a - b;
    });
    let x = arr[0]
    for(let i = 0; i < linhas; i++){
        let row = table.insertRow();
        let cell = row.insertCell();
        let count = 0
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j] >= x && arr2[j] <= (x + (intervalo - 1))){
                count++
            }
        }
        let cellfi = row.insertCell();
        let text = document.createTextNode(`${x} |-- ${x + intervalo}`);
        let textfi = document.createTextNode(count);
        cell.appendChild(text)
        cellfi.appendChild(textfi);
        x+= intervalo
        
       
    }
}