let csvFile = document.getElementById("csv-file");
csvFile.addEventListener("change", upload, false);
//Função que transforma o arquivo csv escolhido em um array.
let temp;
function upload(event) {
    let data = null;
    let file = event.target.files[0];
    let reader = new FileReader();
    
    reader.readAsText(file);
    reader.onload = function (event) {
        let csvData = event.target.result;
        let data = Papa.parse(csvData, { header: false, skipEmptyLines: true });
        temp = [].concat.apply([], data.data)
        console.log(temp);
        
    };
    reader.onerror = function () {
        alert("Unable to read" + file.fileName);
    };
    return temp
};

