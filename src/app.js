//Acessando os elementos do index.html
const btnCalcular = document.querySelector("#btnCalcular");
document.getElementById("csv-file").addEventListener("change", upload, false);

//Declaração de variáveis
let filteredArray = [];
let varName = document.getElementById("varName");

let table = document.getElementById("table");
let fi = document.getElementById('fi')

function upload(event) {
    let data = null;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        let csvData = event.target.result;
        let data = Papa.parse(csvData, { header: false });
        console.log(data.data);
        let temp = [].concat.apply([], data.data);


        for (elemento of temp) {
            !isNaN(elemento) ? filteredArray.push(+elemento) : filteredArray.push(elemento);
        }
        console.log(filteredArray);
        return filteredArray;
    };
    reader.onerror = function () {
        alert("Unable to read" + file.fileName);
    };
}

btnCalcular.addEventListener("click", calcular);

function valuesToArray(obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
}

function removeDups(array) {
    let unique = {};
    array.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

function calcular() {
    let inputValues = document.querySelector("#inputValues").value.split(",");
    for (elemento of inputValues) {
        !isNaN(elemento)
            ? filteredArray.push(+elemento)
            : filteredArray.push(elemento);
    }
    console.log(inputValues);
    console.log(filteredArray);
    console.log(varName);


    var count = {};
    filteredArray.forEach((i) => {
        count[i] = ++count[i] || 1;
    });
    console.log(count);

    let x = valuesToArray(count)
    console.log(x);

    let y = removeDups(filteredArray)
    console.log(y);

    /*if(varNameInput.value == ''){
        varName = filteredArray[0]
    }else {
        varNameInput = varNameInput.value
    }*/


    let varNameInput = document.getElementById('varNameInput').value
    if (varNameInput == '') {
        varName.innerHTML = filteredArray[0]
    } else {
        varName.innerHTML = varNameInput
    }



    fi.innerHTML = 'fi'


    if (inputValues != '') {
        createTable(table, y, x)
    } else {
        createTable2(table, y, x);
    }


}

function createTable2(table, data, values) {
    for (let i = 2; i < data.length; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let cell2 = row.insertCell();
        let text = document.createTextNode(data[i]);
        let text2 = document.createTextNode(values[i]);
        cell.appendChild(text);
        cell2.appendChild(text2);
    }
}

function createTable(table, data, values) {
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let cell2 = row.insertCell();
        let text = document.createTextNode(data[i]);
        let text2 = document.createTextNode(values[i]);
        cell.appendChild(text);
        cell2.appendChild(text2);
    }
    count(filteredArray);
}

function createTableHead(table, data, name) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th = document.createElement("th");
    varName.innerHTML = name
    let text = document.createTextNode(name);
    let fi = "fi";
    let th2 = document.createElement("th");
    let text2 = document.createTextNode(fi);
    th.appendChild(text);
    row.appendChild(th);
    th2.appendChild(text2);
    row.appendChild(th2);
}

function count(data) {
    data.sort();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] != current) {
            if (cnt > 0) {
                return cnt;
            }
            current = data[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + " comes --> " + cnt + " times");
    }
}
