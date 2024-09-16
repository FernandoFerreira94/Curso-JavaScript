

//-------- Lista de feira ---------
let adc = document.getElementById('feira')
var campoLista = document.getElementById('lista1')
var count = 0
var element = []

function adicionar(acao) {
    if (acao=='feira') {
        if (!adc.value == ''  ) { 
            if ( element.indexOf(adc.value) == -1) {
                element.push(adc.value)
                campoLista.innerHTML += `<li >${element[count]}</li>`
                count ++
            } else {alert('Esse item ja foi adicionado')}
            adc.value = ''
        } else {
            alert('adicione um item')
            adc.value = ''
        }
    }  
}

function ordenar() {
    element.sort()
        campoLista.innerHTML = ''
        for (let i = 0; count > i; i++) {
            campoLista.innerHTML += `<li>${element[i]}</li>`
        }
}

function limpar() {
      return  campoLista.innerHTML = ''
}



