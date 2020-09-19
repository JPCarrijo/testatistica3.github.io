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