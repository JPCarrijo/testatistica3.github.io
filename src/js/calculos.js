//Todo valor de input entra como string. Essa função verifica se o valor pode ser convertido em números e, caso seja possível, faz a conversão e joga dentro do array parsedArray. Caso não seja possível, joga o elemento em parsedArray do jeito que está.
function parseArray(arr) {
    let temp = [];
    for (let i of arr) { !isNaN(i) ? temp.push(+i) : temp.push(i) };
    return temp
}

function calculateMediaDiscreta(obj, total) {
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let y = parseArray(objKeys)
    let soma = 0
    for (let i = 0; i < y.length; i++) {
        soma += y[i] * objValues[i]
    }
    let z = soma / total
    let media = z.toFixed(2)
    
    return media
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
            if(objValues[i] === objValues[i - 1]){
                temp = `${objKeys[i]}, ${objKeys[i - 1]}`
            } else if (objValues[i] === objValues[i + 1]){
                temp = `${objKeys[i]}, ${objKeys[i + 1]}`
            }else{
                temp = objKeys[i]
            }
        }
    }
    return temp;
};

function calculateMediana(total, fac, obj){
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let inicio = 0
    let result

    if(total % 2 == 0){
        result =  total / 2;
        for (let i = 0; i < fac.length; i++) {
            if (result >= inicio && result <= fac[i]) {
                return `${objKeys[i]} e ${objKeys[i + 1]}`
            } else {
                inicio = objValues[i]
            }
        }
    }else {
        result = Math.round(total / 2) 
        for (let i = 0; i < fac.length; i++) {
            if (result >= inicio && result <= fac[i]) {
                return objKeys[i]
            } else {
                inicio = objValues[i]
            }
        }
    }
};



//Função que calcula o total de valores informados
function calculateTotalInputs(arr) {
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

function countOrdinal(a, b) {
    var matches = {};
    let objKeys = Object.keys(a)
    let objValues = Object.values(a)
    for (var i = 0; i < objKeys.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (objKeys[i] === b[e]) matches[`${b[i]}`] = objValues[i];
        }
    }
    return matches;
}

function calculateFac(obj, fiValues) {
    let temp = [];
    let count = 0;
    let totalFac = fiValues[0];
    for(let i in obj){
        temp.push(totalFac);
        count++;
        totalFac+= fiValues[count];
    };
    return temp;
};