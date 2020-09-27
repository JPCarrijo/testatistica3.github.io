/* let temp = 0;
for (let i of fi) {
    if (temp < i) temp = i
}

function findIndexFi(element, index, array) {
    if (element == temp) {
        return index
    } else return false
}
let valueIndex = fi.findIndex(findIndexFi)

let moda = (arr[valueIndex] + arr2[valueIndex]) / 2
return moda


//posição da mediana
let x = Math.round(total / 2);
let posicao = [x, x + 1];
let linhaMediana = [];
let inicio = 0;
//encontrando a linha da mediana
for (let i = 0; i <= fac.length - 1; i++) {
    if (posicao[0] > inicio && posicao[0] <= fac[i] || posicao[1] > inicio && posicao[1] <= fac[i]) {
        linhaMediana.push(i);
        inicio = fac[i];
    };
};
inicio = 0;
for (let i = 0; i <= fac.length - 1; i++) {
    if (posicao[1] > inicio && posicao[1] <= fac[i]) {
        linhaMediana.push(i);
        inicio = fac[i];
    };
};

let mediana = [];
let y;
let z;
if (linhaMediana[0] === linhaMediana[1]) {
    y = (posicao[0] - fac[linhaMediana[0] - 1]) / fi[linhaMediana[0]]
    let valor1 = (y * intervalo) + media[linhaMediana[0]]
    mediana.push(valor1)
} else {
    y = (posicao[0] - fac[linhaMediana[0] - 1]) / fi[linhaMediana[0]]
    let valor1 = (y * intervalo) + media[linhaMediana[0]]
    z = (posicao[1] - fac[linhaMediana[1] - 1]) / fi[linhaMediana[1]]
    let valor2 = (z * intervalo) + media[linhaMediana[1]]

    mediana.push(valor1, valor2)
}
return mediana */


let bb = {
    nome: 'daniel', 
    idade: 36, cor: 'preto'
}

let objKeys = Object.keys(bb)
objValue = Object.values(bb)

console.log(objKeys);
console.log(objValue);
