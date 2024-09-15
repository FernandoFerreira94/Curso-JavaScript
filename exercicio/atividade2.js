

//-------- Lista de feira ---------
let adc = document.getElementById('feira')
var lista = document.getElementById('lista1')

function adcicionar(acao) {
    if (acao=='feira') {
        lista.innerHTML += `<li>${adc.value}</li>` 
        adc.value =''
        
    } else if (acao == 'clear') {
        lista.innerHTML = ''
    }
}