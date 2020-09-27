let csvFile = document.getElementById("csv-file");
csvFile.addEventListener("change", upload, false);

//Função que transforma o arquivo csv escolhido em um array.
let temp;
function upload(event) {
    readCsvPromisse(event).then((resultado) => {
        console.log('log do resultado  => ' + resultado);

        variavelEscopoGlobal = resultado;

    }).catch(function (motivo) {
        console.log('log de erro, motivo  => ' + motivo);
    });
};

function readCsvPromisse(event) {
    return new Promise((resolve, reject) => {
        let data = null;
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function (event) {
            console.log('Inicio do on load');
            let csvData = event.target.result;
            data = Papa.parse(csvData, { header: false, skipEmptyLines: true });
            temp = [].concat.apply([], data.data);
            resolve(temp);
        };

        reader.onerror = function () {
            reject("Unable to read" + file.fileName);
        };
    })
}