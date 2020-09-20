let x = {
    1:3, 
    2: 5, 
    3:7,  
    4:5 
}
function parseArray(arr) {
    let temp = [];
    for (let i of arr) { !isNaN(i) ? temp.push(+i) : temp.push(i) };
    return temp
}
function calculateTotalInputs(arr) {
    let totalInputs = 0
    for (let i of arr) {
        totalInputs++
    }
    return totalInputs;
};
function calculateMediaDiscreta(obj,total){
    let objKeys = Object.keys(obj)
    let objValues = Object.values(obj)
    let y = parseArray(objKeys)
    let result = calculateTotalInputs(objValues)
    let soma = 0
    for(let i = 0; i < y.length; i++){
        soma+= y[i] * objValues[i]
    }
    let media = Math.round(soma / result)
    console.log(soma);
    console.log(y);
    console.log(objValues);
    console.log(result);
    console.log(media);
}
calculateMediaDiscreta(x)