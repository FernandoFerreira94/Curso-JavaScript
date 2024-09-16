
var lista_frutas = ['banana','maça','uva']


console.log(lista_frutas.length)
var ul = document.getElementById('ul')
for (let i = 0; i < lista_frutas.length; i++) {
    const element = lista_frutas[i];
    ul.innerHTML += `<li>${element}</li>`
    console.log(element)
}