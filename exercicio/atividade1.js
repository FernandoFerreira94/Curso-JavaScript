/*
Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo 
usuário. Considere os seguintes critérios: 
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”. 
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”. 
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”. 
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”. 
*/


// -------------- Idade -------------
function calIdade() {
    let idade = document.getElementById('idade').value
    document.getElementById('idade-final').style.background = 'white'
    if (idade >= 0 && idade <= 11) {
        document.getElementById('idade-final').innerText = 'Criança'
        document.getElementById('idade').value = ''
    } else if (idade >= 11 && idade <= 17) {
        document.getElementById('idade-final').innerText = 'Adolecente'
        document.getElementById('idade').value = ''
    } else if (idade >= 18 && idade <= 59) {
        document.getElementById('idade-final').innerText = 'Adulto'
        document.getElementById('idade').value = ''
    } else {
        document.getElementById('idade-final').innerText = 'Idoso'
        document.getElementById('idade').value = ''
    }
}


//-----------Calculo IMC -------------


function calImc() {
    let nome = document.getElementById('info-nome')
    let alturaCem = document.getElementById('info-altura')
    let altura = alturaCem.value / 100
    let peso = document.getElementById('info-peso')
    let imc = peso.value / (altura * altura)

    document.getElementById('nome').innerText = `Olá ${nome.value}`;
    document.getElementById('altura').innerText = `Altura: ${altura}`;
    document.getElementById('peso').innerText = `Peso: ${peso.value}`
    document.getElementById('imc').innerText = `IMC: ${imc}`

    nome.value = ''
    alturaCem.value = ''
    peso.value = ''
}

//----------- calculo soma e subtração ----------

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let calResultado = document.getElementById('calResultado')

let cal = function (numero1, numero2, operação) {

    // calculadora If Else

    /*    if (operação == '+') {
            resultado = numero1 + numero2
            calResultado.innerHTML = resultado
        } else if (operação == '-') {
            resultado = numero1 - numero2
    
            calResultado.innerHTML = resultado
        } else if (operação == '*') {
            resultado = numero1 * numero2
            calResultado.innerHTML = resultado
        } else if (operação == '/') {
            resultado = numero1 / numero2
            calResultado.innerHTML = resultado
        }
        num1.value = ''
        num2.value = ''
        */

    // calculadora switch

    switch (operação) {
        case '+':
            resultado = numero1 + numero2
            break;
        case '-':
            resultado = numero1 - numero2
            break;
        case '*':
            resultado = numero1 * numero2
            break;
        case '/':
            resultado = numero1 / numero2
            break;
        default:
            resultado = ('operação Invalida')
            break;

    }
    calResultado.innerHTML = resultado
    num1.value = ''
    num2.value = ''
}

// ------------- mudando cor de fundo texto ---------
// usando onkeyup / onfocus / onclick / className /
var letra = document.getElementById('atv4').innerHTML

function bg(ativo)  {
   switch (ativo) {
       case 'foco':
           document.getElementById('atv4').className = 'foco'
           letra = ''
           
           break;
           case 'blur':
               document.getElementById('atv4').className = 'blur'
               letra = ''
        break;
    default:
        break;
   }
console.log(letra.length)
}

function escrever() {
    letra += letra.length   
    
    console.log(letra.length)
    if (letra.length <= 5) {
        document.getElementById('atv4').className = 'menor5'
     } else if (letra.length > 5  ) {
            document.getElementById('atv4').className = 'maior5'            
     }
}


//------------ Calculadora ------------


var display = document.getElementById('display')

function calculadora(tipo,valor) {
    if (tipo == 'acao') {
        if (valor == 'ac') {
            display.value = ''
        }
        if (valor == '/' || valor == '*' || valor == '-' || valor == '+' || valor == '.') {
            display.value += valor
        }
        if (valor == 'igual') {
           let resultdado = eval(display.value)
           display.value = resultdado
        }
    } else if (tipo == 'num') {
        display.value += valor
    }
}
