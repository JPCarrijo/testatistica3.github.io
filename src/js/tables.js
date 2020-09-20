//Função que insere os dados na tabela 1
function createTable(obj, total,fac) {
    let count = 0
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
        let textFac = document.createTextNode(fac[count]);
        totalFacPercent += formatedFr;
        let textFacPercent = document.createTextNode(totalFacPercent.toFixed(2));
        cell.appendChild(text);
        cellfi.appendChild(textfi);
        cellfrPercent.appendChild(textfrPercent);
        cellFac.appendChild(textFac);
        cellFacPercent.appendChild(textFacPercent);
        count++
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
     
        let cellfi = row.insertCell();
        let text = document.createTextNode(`${x} |-- ${x + intervalo}`);
        let textfi = document.createTextNode(count);
        cell.appendChild(text)
        cellfi.appendChild(textfi);
        x += intervalo
    }
};

function createTable2(media, moda, mediana){
    let row = table2.insertRow();
    let cellMedia = row.insertCell();
    let textMedia = document.createTextNode(media);
    cellMedia.appendChild(textMedia);
    let cellModa = row.insertCell();
    let textModa = document.createTextNode(moda);
    cellModa.appendChild(textModa);
    let cellMediana = row.insertCell();
    let textMediana = document.createTextNode(mediana);
    cellMediana.appendChild(textMediana);
};