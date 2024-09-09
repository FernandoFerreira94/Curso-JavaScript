//-----------Funçoes de callBack --------
//--------- inicio Div clima ------------
let idClima = document.getElementById('idClima')
let texto = document.getElementById('text')


//função criada para callbackSucesso
let daySunny = function (nome) /*parametro passado dentro da função exibirArtigo */ {
    texto.innerText = 'hoje o dia está ensolarado ' + nome
    idClima.value = ''
}

//Função criada para callbackErro
let dayRaining = function (nome)/*parametro passado dentro da função exibirArtigo */ {
    texto.innerText = 'hoje o dia está chuvoso ' + nome
    idClima.value = ''

}

/* passar a função como parametro precisar ser sem '()',
para que o javascript entenda que nao é pra executar a função, apenas usar
como parametro */

function exibirArtigo(id, callBackSucesso, callBackErro) {
    if (id == 1) {
        callBackSucesso('Fernando') // função callback sucesso 

    } else if (id == 2) {
        callBackErro('Paulo') // função callbacke erro
    }
}

//---------Fim Div clima ------------

//----------Inicio string ---------

let poesia = 'you know wHat we be it'
let length = poesia.length // conta quantas strings existe!
console.log(length)
let char = poesia.charAt(4) // retorna a letra da posição 4
console.log(poesia.at(5)) // // retorna a letra da posição 5
console.log(char)
console.log(poesia.indexOf('k'))// retorna qual posição está o 'k'
console.log(poesia.replace('you', 'your')) // troca a palavra pela outra
console.log(poesia.startsWith('you')) // verifica se comeca com 'you' retorna TRUE
console.log(poesia.endsWith('it')) // verifica se termina com 'it' retorna TRUE
console.log(poesia.match('wHat')) // retorna onde esta a palavra procurada
console.log('123'.padEnd(6, '1')) // acrecenta '1'no final ate completa campo de 6 string
console.log('123'.padStart(6, '1')) // acrecenta '1' no inicio ate completa campo de 6 string
console.log('---------------------------')
var num = 10.410
console.log(Math.ceil(num)) //Math.ceil() retorna arredonta pra cima = 11
console.log(Math.floor(num)) //Match.floor() retorna arredonta para baixo = 10
console.log(Math.round(num)) //Match.round() retorna verifica se esta acima de 501 para arredonta pra cima se estiver 499 arredonta para baixo
console.log(Math.random())// retorna numero aleatorio
console.log('---------------------------')

//-------------- fim string ---------------

//-------------inicio datas ---------------

let horario = function () {
    let data = new Date()
    let day = data.getDate(); // dia
    let month = data.getMonth() + 1; //mês precisa +1 pois janeiro comeca no indoxe '0'
    let year = data.getFullYear(); // ano
    let horas = data.getHours(); // horas
    let minute = data.getMinutes(); // minutos
    let segundos = data.getSeconds();//segundos

    document.getElementById('data').innerHTML = `${day} / ${month} / ${year} ` // data
    document.getElementById('horario').innerHTML = `${horas}:${minute}:${segundos}`; // horario
}
setInterval(horario) // fica ativado infinito a função
