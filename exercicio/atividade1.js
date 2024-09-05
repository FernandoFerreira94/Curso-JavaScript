/*
Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo 
usuário. Considere os seguintes critérios: 
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”. 
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”. 
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”. 
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”. 
*/



function calIdade() {
    let idade = document.getElementById('idade').value
    document.getElementById('idade-final').style.background = 'white'
    if (idade > 0 && idade <= 15) {
        document.getElementById('idade-final').innerText = 'Criança'
        document.getElementById('idade').value = ''
    } else if (idade > 15 && idade <= 30) {
        document.getElementById('idade-final').innerText = 'Jovem'
        document.getElementById('idade').value = ''
    } else if (idade > 30 && idade <= 59) {
        document.getElementById('idade-final').innerText = 'Adulto'
        document.getElementById('idade').value = ''
    } else {
        document.getElementById('idade-final').innerText = 'Idoso'
        document.getElementById('idade').value = ''
    }
}


//-----------Calculo IMC -------------


function calImc() {
    let nome = document.getElementById('info-nome').value
    let alturaCem = document.getElementById('info-altura').value
    let altura2 = alturaCem / 100
    let peso1 = document.getElementById('info-peso').value
    let imc = peso1 / (altura2 * altura2)

    document.getElementById('nome').innerText = `Olá ${nome}`;
    document.getElementById('altura').innerText = `Altura: ${altura2}`;
    document.getElementById('peso').innerText = `Peso: ${peso1}`
    document.getElementById('imc').innerText = `IMC: ${imc}`

    document.getElementById('info-nome').value = ''
    document.getElementById('info-altura').value = ''
    document.getElementById('info-peso').value = ''

}


