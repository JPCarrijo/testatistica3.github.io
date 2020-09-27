//Função que insere os dados na tabela 1
function createTable(obj, total,fac) {
    table.style.display = 'block';
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

function createTableContinua(arr, intervalo, linhas, arr2,total,fac) {
    table.style.display = 'block';
    arr.sort(function (a, b) {
        return a - b;
    });
    let x = arr[0];
    let y = 0
    let totalFacPercent = 0;
    for (let i = 0; i < linhas; i++) {
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(`${x} |-- ${x + intervalo}`);
        cell.appendChild(text)

        let count = 0
        for (let j = 0; j <= arr2.length; j++) {
            if (arr2[j] >= x && arr2[j] <= (x + (intervalo - 1))) {
                count++
            }
        }

        let cellfi = row.insertCell();
        let textfi = document.createTextNode(count);
        cellfi.appendChild(textfi);

        let formatedFr = (count / total) * 100
        totalFacPercent += formatedFr;
        let cellFrPercent = row.insertCell();
        let textFrPercent = document.createTextNode(formatedFr.toFixed(2));
        cellFrPercent.appendChild(textFrPercent);

        let cellFac = row.insertCell();
        let textFac = document.createTextNode(fac[y]);
        cellFac.appendChild(textFac);

        let cellFacPercent = row.insertCell();
        let textFacPercent = document.createTextNode(totalFacPercent.toFixed(2));
        cellFacPercent.appendChild(textFacPercent);

        y++
        x += intervalo
    }
};

function createTable2(media, moda, mediana, total){
    table2.style.display = 'block';
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
    let cellTotal = row.insertCell();
    let textTotal = document.createTextNode(total);
    cellTotal.appendChild(textTotal);
};

function createTable3(desvio, coeficiente, separatriz){
    table3.style.display = 'block';
    let row = table3.insertRow();
    let cellDesvio = row.insertCell();
    let textDesvio = document.createTextNode(desvio);
    cellDesvio.appendChild(textDesvio);
    let cellVariacao = row.insertCell();
    let textVariacao = document.createTextNode(coeficiente);
    cellVariacao.appendChild(textVariacao);
    let cellMedidaSeparatriz = row.insertCell();
    let textMedidaSeparatriz = document.createTextNode(separatriz);
    cellMedidaSeparatriz.appendChild(textMedidaSeparatriz);
}