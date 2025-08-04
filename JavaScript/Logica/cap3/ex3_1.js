const prompt = require("prompt-sync")() // adiciona o pacote ao programa 
const num1 = Number(prompt("1° Número: ")) //recebimento de valor
const num2 = Number(prompt("Preço R$: "))
const soma = num1 + num2
console.log(`Soma é: ${soma}`)
