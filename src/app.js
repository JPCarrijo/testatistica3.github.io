const btnCalcular = document.querySelector('#btnCalcular')
document.getElementById('csv-file').addEventListener('change', upload, false)

let filteredArray = []
let varName = ''

function upload(event){
    let data = null
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function (event) {
        let csvData = event.target.result
        let data = Papa.parse(csvData, { header: false })
        console.log(data.data);
        let temp = [].concat.apply([], data.data)
        for (elemento of temp) {
            !isNaN(elemento) ? filteredArray.push(+elemento) : filteredArray.push(elemento)
        }

        varName = filteredArray[0]
        console.log(filteredArray);
        console.log(varName);
        return data.data
    }
    reader.onerror = function () {
        alert('Unable to read' + file.fileName)
    }
    
}

btnCalcular.addEventListener('click', calcular)

function calcular(){
    
    let inputValues = document.querySelector('#inputValues').value
            .split(',')
    for(elemento of inputValues){
        !isNaN(elemento) ? filteredArray.push(+elemento) : filteredArray.push(elemento)
    }
    console.log(inputValues);
    console.log(filteredArray);
    console.log(varName);
    varName = document.getElementById('varName').value
    createTable(table, filteredArray)
    createTableHead(table, filteredArray, varName)
}

function createTable(table, data){
    for(let i = 0; i < data.length; i++){
        let row = table.insertRow()
        let cell = row.insertCell()
        let text = document.createTextNode(data[i])
        cell.appendChild(text)
    }
}

function createTableHead(table, data, name){
    let thead = table.createTHead()
    let row = thead.insertRow()
    let th = document.createElement('th')
    let text = document.createTextNode(name)
    let fi = 'fi'
    let th2 = document.createElement('th')
    let text2 = document.createTextNode(fi)
    th.appendChild(text)
    row.appendChild(th)
    th2.appendChild(text2)
    row.appendChild(th2)
}
let table = document.getElementById('table')


let teste = [1,2,3,4,1,2,3,4,1,2,3,4]
let j = 0
let x = teste[0]
for(let elemento of teste){
    if(elemento === x){
        j++
    }
}
console.log(j);