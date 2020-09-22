let csvFile = document.getElementById("csv-file");
let qltNominal = document.getElementById('qltNominal');
let qtDiscreta = document.getElementById('qtDiscreta');
let qtContinua = document.getElementById('qtContinua');
let table = document.getElementById('table');
let table2 = document.getElementById('table2');


//array com os valores do documento carregado e tratados
let treatedArray = parseArray(temp)


let noTitleArray = treatedArray.slice(0);
noTitleArray.shift()


uploadedarrayOptions.inputedValues = noTitleArray;//valores do arquivo sem o titulo
uploadedarrayOptions.countedElements = countElements(uploadedarrayOptions.inputedValues);
uploadedarrayOptions.noRepeats = [...new Set(noTitleArray)]
uploadedarrayOptions.varName = treatedArray[0]
//uploadedarrayOptions.order = parseArray(ordemQltOrdinal);//Não funcionando
//uploadedarrayOptions.countedOrdinal = countOrdinal(uploadedarrayOptions.countedElements, uploadedarrayOptions.order);//Não funcionando
//uploadedarrayOptions.countedFiOrdinal = countFi(uploadedarrayOptions.countedOrdinal)
//inputedArrayOptions.totalInputs = calculateTotalInputs(treatedArray);  

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
console.log(treatedArray);

uploadedarrayOptions.uploaded = treatedArray