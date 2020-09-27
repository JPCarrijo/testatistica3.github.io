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
        media = (x + (x + intervalo)) / 2
        arrayMedia.push(media);
        x += intervalo
    }
    result.valor1 = valor1
    result.valor2 = valor2
    result.media = arrayMedia
    return result
}

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
    let media = (mediaTemp / total).toFixed(2)
    return media
};

function calculateModaContinua(arrMedias, fi) {
    let inicio = 0, jj = fi[0], valoresModa = [], valorMedia
    const allEqual = fi.every(e => e === jj)
    if(allEqual){
            valoresModa.push('Não possui moda')
    }else {
        for(let i = 0; i <= fi.length; i++){
            if(fi[i] > inicio){
                inicio = fi[i]
                valorMedia = arrMedias[i]
            }
        }
    }
    for(let j = 0; j <= fi.length; j++){
        if(fi[j] === inicio){
            valoresModa.push(arrMedias[j])
        }
    }
    return valoresModa
};

function calculateMedianaContinua(arrEsq, total, fac, fi, intervalo){
    let linhaMediana, inicio = 0, count = 0, facAnterior
    linhaMediana = Math.round(total / 2)//38
    //encontrando o indice no fac
    for(let i = 0; i <= fac.length - 1; i++){
        if(!(linhaMediana > inicio && linhaMediana <= fac[i])){//inicio = 16
            count++   
            inicio = fac[i]
        } 
    }
    facAnterior = fac[count - 1]

    if (facAnterior === undefined) facAnterior = 0
    let mediana = arrEsq[count] + ((((total / 2) - facAnterior) / fi[count]) * intervalo)
    return mediana
};

function calculateSeparatrizContinua(total, arr, fac, fi, intervalo){
    let result = {}, inicio = 0
    if (separatrizes.value === 'Quartil') {
        result.posicao = (total / 100) * (quartilOptions.value * 25) 
        result.separatrizValue = (quartilOptions.value * 25) + '%'
    } else if (separatrizes.value === 'Quintil') {
        result.posicao = (total / 100) * (quintilOptions.value * 20) 
        result.separatrizValue = (quintilOptions.value * 20) + '%'
    } else if (separatrizes.value === 'Decil') {
        result.posicao = (total / 100) * (decilOptions.value * 10) 
        result.separatrizValue = (decilOptions.value * 10) + '%'
    } else if (separatrizes.value === 'Porcentil') {
        result.posicao = (total / 100) * (porcentilOptions.value * 1) 
        result.separatrizValue = (porcentilOptions.value * 1) + '%'
    } else {
        result.separatriz = 'Não escolhida'
        return result.separatriz
    }
    for(let i = 0; i <= fac.length - 1; i++){
        if(result.posicao > inicio && result.posicao <= fac[i]){
            if(i === 0){
                result.facAnterior = 0
                result.valorInicio = arr[0]
                result.valorFi = fi[0]
            }else {
                result.facAnterior = fac[i - 1]
                result.valorInicio = arr[i]
                result.valorFi = fi[i]
            }
            inicio = fac[i]
        }
    };

    let gg = (result.valorInicio + (((result.posicao - result.facAnterior) / result.valorFi) * intervalo))
    result.separatriz = gg.toFixed(2)
    return result.separatriz
}