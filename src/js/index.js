let options = document.getElementById('segunda')
let qltOrdinal = document.getElementById('qltOrdinal');
let ordemQltOrdinal = document.getElementById('ordemQltOrdinal');

options.addEventListener('click', function(){
    if (qltOrdinal.checked) {
        ordemQltOrdinal.style.display = 'block'
    }else{
        if (!qltOrdinal.checked) ordemQltOrdinal.style.display = 'none'
    }
})
