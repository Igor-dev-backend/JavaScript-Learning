const prompt = require("prompt-sync")()
const resp = Number(prompt(`Digite um numero sem virgula:`))
const resultado = resp % 2
let numero
if(resultado == 0){
    console.log(`${resp} ele é par.`)
} if(resultado == 1){
    console.log(`${resp} é impar`)
}

