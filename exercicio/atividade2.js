

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

// ------------- tabuada --------------

let tabela = document.getElementById('tabela')
let number = document.getElementById('number')

function tabu(n) {

    if(number.value == '' || number.value == '0') {
        alert('digite um numero')
        number.innerHTML = ''
    } else {       
        document.getElementById('number').value = ''
        tabela.innerHTML = ''
        let ul = document.createElement('ul');
        ul.innerHTML += `<h3>tabuada do ${n}</h3>`
        for (let i = 1; i <= 10; i++) {
            ul.innerHTML += `<li>${n} x ${i} = ${res = n*i}</li>`       
        }
        tabela.appendChild(ul);
    }
}

function tabuada() {
    tabela.innerHTML = ''
    for(let x = 1; x <= 10; x++) {
        let ul = document.createElement('ul');
        ul.innerHTML += `<h3>tabuada do ${x}</h3>`
        for(let y = 1; y <= 10; y++) {
            ul.innerHTML += `<li>${x} x ${y} = ${res = x*y}</li>`
        }
        tabela.appendChild(ul);
    }
}
function limpar() {  
    tabela.innerHTML = ''
}

