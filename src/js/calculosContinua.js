function calculateContinua(arr, total) {
    let result = {};
    arr.sort(function (a, b) {
        return a - b;
    });

    //cálculo da amplitude
    result.amplitude = arr[arr.length - 1] - arr[0]//referência

    //linhas
    result.linhas = (Math.round(Math.sqrt(total)))

    let x = result.amplitude + 1


    while ((x % result.linhas) != 0) {
        x++
    }
    //intervalo
    result.intervalo = Math.round(x / result.linhas);
    return result
};

function calculatePontoMedioIntContinua(arr, intervalo, linhas) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let x = arr[0];
    let valor1 = [];
    let valor2 = [];
    let arrayMedia = [];
    let result = {};
    let media
    for (let j = 0; j < linhas; j++) {
        valor1.push(x);
        valor2.push(x + intervalo);
        media = Math.round((x + (x + intervalo)) / 2);
        arrayMedia.push(media);
        x += intervalo
    }
    result.valor1 = valor1
    result.valor2 = valor2
    result.media = arrayMedia
    return result
}

function calculateMediaContinua(arr, fi, total) {
    let result = [];
    let temp
    let mediaTemp = 0
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i] * fi[i]
        result.push(temp)
    }
    for (let i of result) {
        mediaTemp += i
    }
    let media = mediaTemp / total
    return media
};

function calculateModaContinua(arr, arr2, fi) {
    let temp = 0;
    for (let i of fi) {
        if (temp < i) temp = i
    }

    function findIndexFi(element, index, array){
        if(element == temp){
            return index
        }else return false
    }
    let valueIndex = fi.findIndex(findIndexFi)
    
    let moda = (arr[valueIndex] + arr2[valueIndex]) / 2
    return moda
};

function calculateFiContinua(arr, linhas, arr2, intervalo) {
    let x = arr[0];
    let z = []
    for(let i = 0; i < linhas; i++){
        let count = 0;
        for(let j = 0; j <= arr2.length - 1;j++){
            if(arr2[j] >= x && arr2[j] <= (x + intervalo) - 1) {
                count++
            }
        }
        z.push(count)
        x+= intervalo
    }
    return z
}

function calculateFacContinua(linhas, fi){
    let fac = [];
    let totalFac = fi[0]
    for(let i = 0; i < linhas; i++){
        fac.push(totalFac);
        totalFac += fi[i + 1]
    }
    return fac
};

function calculateMedianaContinua(total){
    //posição da mediana
    let posMediana = Math.round(total / 2)
    console.log(posMediana);
    return posMediana
};
