let array1 = [1,2,3,4]

function teste(element, index, array){
    let num = 3
    if(element == num){
        return index
    }else return false

}

console.log(array1.findIndex(teste));