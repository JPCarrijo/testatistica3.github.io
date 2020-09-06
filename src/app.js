const btnCalcular = document.querySelector('#btnCalcular')
document.getElementById('csv-file').addEventListener('change', upload, false)

let filteredArray = []
let varName = ''

function upload(event){
    let data = null
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function(event){
        let csvData = event.target.result
        let data = Papa.parse(csvData, { header: false })
        console.log(data.data);
        let temp = [].concat.apply([], data.data)
        for(elemento of temp){
            !isNaN(elemento) ? filteredArray.push(+elemento) : filteredArray.push(elemento)
        }
        
        varName = filteredArray[0]
        console.log(filteredArray);
        console.log(varName);
        return data.data
    }
    reader.onerror = function(){
        alert('Unable to read' + file.fileName)
    }
}



btnCalcular.addEventListener('click', calcular)

function calcular(){
    const varName = document.querySelector('#varName').value
    let inputValues = document.querySelector('#inputValues').value
            .split(',')
    for(elemento of inputValues){
        !isNaN(elemento) ? filteredArray.push(+elemento) : filteredArray.push(elemento)
    }
    console.log(inputValues);
    console.log(filteredArray);
    console.log(varName);
    criarTabela(filteredArray)
}

function criarTabela(array){

}

