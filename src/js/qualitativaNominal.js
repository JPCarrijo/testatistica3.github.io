//Acessando os elementos HTML
let btnFileSelect = document.getElementById('csv-file');
let btnCalcular = document.getElementById('btnCalcular');
let csvFile = document.getElementById("csv-file");
let fi = document.getElementById('fi');
let table = document.getElementById('table');
//----------------------------------------------------------------------------

//Declaração de Variáveis
let parsedArray;
let papaArray;
//----------------------------------------------------------------------------

//Ações
//btnFileSelect.addEventListener("change", upload, false);
btnCalcular.addEventListener('click', calcular)
csvFile.addEventListener("change", upload, false);
//----------------------------------------------------------------------------

//Funções
function calcular(){
    //Cria um novo array, considerando como separador de elementos o ponto e vírgula(;)
    let inputValues = document.getElementById('inputValues').value.split(';');

    parsedArray =  tratarDados(inputValues); 

    if(inputValues == '') {
        createHeader(papaArray)
        createTable2(papaArray)
    }else{
        createHeader(parsedArray)
        createTable(parsedArray)
    }
}

//Todo valor de input entra como string. Essa função verifica se o valor pode ser convertido em números e, caso seja possível, faz a conversão e joga dentro do array parsedArray. Caso não seja possível, joga o elemento em parsedArray do jeito que está.
function tratarDados(data){
    let temp = []
    for(elemento of data){
        !isNaN(elemento) ? temp.push(+elemento) : temp.push(elemento)
    }
    return temp
}

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


        papaArray = tratarDados(temp)
        console.log(papaArray);
        return papaArray;
        
    };
    reader.onerror = function () {
        alert("Unable to read" + file.fileName);
    };
}

//Função que cria a tabela com os dados
function createTable(array){
    
    //Constante que retira os valores repetidos do array
    const valoresSemRepeticao = [...new Set(array)]
    
    

    //loop que insere os valores do array sem repetição na tabela
    for(let i = 0; i < valoresSemRepeticao.length; i++){
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(valoresSemRepeticao[i])
        cell.appendChild(text);
    }

}
function createTable2(arr) {

    //Constante que retira os valores repetidos do array
    const valoresSemRepeticao = [...new Set(arr)]

    console.log(valoresSemRepeticao);

    //loop que insere os valores do array sem repetição na tabela
    let countedObject = contarElementos(arr)
    console.log(countedObject);
    
    let objectKeys = Object.keys(countedObject)
    console.log(objectKeys);
    for (let i in objectKeys) {
        console.log(i);
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(i)
        cell.appendChild(text);
        
    }
    
    
    let countedArray = objectToArray(countedObject)
    console.log(countedArray);
    
}


function objectToArray(obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
}

//função que cria o cabeçalho da tabela
function createHeader(arr){
    //Comando que define os cabeçalhos da tabela
    let varNameHeader = document.getElementById('varNameHeader')
    let varNameInput = document.getElementById('varNameInput').value
    if (varNameInput == '') {
        varNameHeader.innerHTML = arr[0]
    } else {
        varNameHeader.innerHTML = varNameInput
    }
    fi.innerText = 'fi'
};

//comando que conta quantas vezes cada elemento aparece em um array
function contarElementos(arr){
    arr.sort();
    var occurrences = arr.reduce(function (obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    console.log(occurrences);
    return occurrences
}
