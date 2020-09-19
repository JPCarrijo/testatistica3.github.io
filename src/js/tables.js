//Função que insere os dados na tabela
function createTable(obj, total, fiValues) {
    let count = 0
    let totalFac = fiValues[0]
    let totalFacPercent = 0;
    for (let i in obj) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let cellfi = row.insertCell();
        let cellfrPercent = row.insertCell();
        let cellFac = row.insertCell();
        let cellFacPercent = row.insertCell();
        let text = document.createTextNode(i);
        let textfi = document.createTextNode(obj[i]);
        let formatedFr = (obj[i] / total) * 100
        let textfrPercent = document.createTextNode(formatedFr.toFixed(2));
        let textFac = document.createTextNode(totalFac);
        totalFacPercent += formatedFr;
        let textFacPercent = document.createTextNode(totalFacPercent.toFixed(2));
        cell.appendChild(text);
        cellfi.appendChild(textfi);
        cellfrPercent.appendChild(textfrPercent);
        cellFac.appendChild(textFac);
        cellFacPercent.appendChild(textFacPercent);
        count++
        totalFac += fiValues[count]

    }
};

function createTableContinua(arr, intervalo, linhas, arr2) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let x = arr[0]
    for (let i = 0; i < linhas; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let count = 0
        for (let j = 0; j <= arr2.length; j++) {
            if (arr2[j] >= x && arr2[j] <= (x + (intervalo - 1))) {
                count++
            }
        }
        console.log(arr2);
        let cellfi = row.insertCell();
        let text = document.createTextNode(`${x} |-- ${x + intervalo}`);
        let textfi = document.createTextNode(count);
        cell.appendChild(text)
        cellfi.appendChild(textfi);
        x += intervalo
    }
};

