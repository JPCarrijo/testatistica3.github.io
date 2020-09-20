function validarDados(arr){
    if(qltOrdinal.checked || qltNominal.checked){
        for(let value of arr){
            if(!isNaN(value)){
                alert('As variáveis qualitativas não trabalham com valores numéricos. Por favor entre novamente com os dados.')
                varNameInput.value = ''
                inputValues.focus()
                return false
            }else{return true}
        }
    }else if(qtContinua.checked || qtDiscreta.checked){
        for (let value of arr) {
            if (isNaN(value)) {
                alert('As variáveis quantitativas não trabalham com valores não numéricos. Por favor entre novamente com os dados.')
                varNameInput.value = ''
                inputValues.focus()
                return false
            }else{ return true}
        }
    }
};