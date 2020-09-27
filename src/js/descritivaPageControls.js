let options = document.getElementById('segunda')
let qltOrdinal = document.getElementById('qltOrdinal');
let ordemQltOrdinal = document.getElementById('ordemQltOrdinal');
let porcentilShow = document.getElementById('porcentilShow');
let separatrizes = document.getElementById('separatrizes');
let quartilOptions = document.getElementById('quartilOptions');
let quintilOptions = document.getElementById('quintilOptions');
let decilOptions = document.getElementById('decilOptions');
let porcentilOptions = document.getElementById('porcentilOptions');
let amostraHelp = document.getElementById('amostraHelp');
let populacaoHelp = document.getElementById('populacaoHelp');
let varNameHelp = document.getElementById('varNameHelp');
//==================================================================================
//Eventos
options.addEventListener('click', function(){
    if (qltOrdinal.checked) {
        ordemQltOrdinal.style.display = 'block'
    }else{
        if (!qltOrdinal.checked) ordemQltOrdinal.style.display = 'none'
    }
})
//===========================================================================================
amostraHelp.addEventListener('click', function(){alert('A amostra representa uma parte de um todo a ser analisado.')});
populacaoHelp.addEventListener('click', () => alert('A população representa uma totalidade de dados a serem analisados.'));
varNameHelp.addEventListener('click', () => alert('O nome da variável é o título de sua pesquisa.'))
//===========================================================================================
function showValue(value){
    porcentilShow.innerText = value 
}

function showOptions(){
    if (separatrizes.value === 'Quartil'){
        quartilOptions.style.display = 'inline-block';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Quintil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'inline-block';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Decil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'inline-block';
        porcentilOptions.style.display = 'none';
        porcentilShow.style.display = 'none';
    } else if (separatrizes.value === 'Porcentil') {
        quartilOptions.style.display = 'none';
        quintilOptions.style.display = 'none';
        decilOptions.style.display = 'none';
        porcentilOptions.style.display = 'inline-block';
        porcentilShow.style.display = 'inline-block';
    }
}