//Todo valor de input entra como string. Essa função verifica se o valor pode ser convertido em números e, caso seja possível, faz a conversão e joga dentro do array parsedArray. Caso não seja possível, joga o elemento em parsedArray do jeito que está.
function parseArray(arr) {
    let temp = [];
    for (let i of arr) { !isNaN(i) ? temp.push(+i) : temp.push(i) };
    return temp
}

//Função que calcula a moda 
function calculateModa(obj) {
    let result = 0;
    let temp = '';
    let objKeys = Object.keys(obj);
    let objValues = Object.values(obj);
    for (let i = 0; i < objValues.length; i++) {
        if (result < objValues[i]) {
            result = objValues[i]
            temp = objKeys[i]
        }
    }
    return temp;
};

/* function calculateMediana(value){
    let mediana = (value / 2) 
    let mediana1 = mediana +1
    if(mediana == )
    return result
} */

function calculateContinua(arr, prop) {
    let result = {};
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    //cálculo da amplitude
    result.amplitude = arr[arr.length - 1] - arr[0]//referência
    console.log(result.amplitude);
    //linhas
    result.linhas = Math.round(Math.sqrt(prop))
    console.log('linhas');
    console.log(result.linhas);
    //intervalo
    result.intervalo = Math.round((result.amplitude + 1) / result.linhas);
    console.log('intervalo');
    console.log(result.intervalo);
    return result
};
//Função que calcula o total de valores informados
function calculateTotalInputs(arr){
    let totalInputs = 0
    for (let i of arr) {
        totalInputs++
    }
    return totalInputs;
};

function countFi(obj) {
    let result = [];
    for (let i in obj) {
        result.push(obj[i])
    }
    return result
};

//Função que calcula quantas vezes cada valor aparece nos dados informados
function countElements(arr) {
    var occurrences = arr.reduce(function (obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
    return occurrences
};

/* function calculateFac(arr){
    let temp = []
    let x = arr[0]
    let count = 0
    for (let j = 0; j <= arr.length; j++) {
        if (arr[j] >= x && arr[j] <= (x + (intervalo - 1))) {
            count++
        }
        x += intervalo
        temp.push(x)
    }
} */