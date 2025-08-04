const prompt = require("prompt-sync")()
const vp = Number(prompt(`Velocidade Permitida:`))
const vc = Number(prompt(`Velocidade do Condutor:`))
const divisao = Math.abs(vp - vc)
const porcentagem = vp * 0.20
let calculo
if (vp >= vc){
    console.log(`Sem Multa`)
} if (vp < vc){
    if(divisao > porcentagem){
        console.log(`Multa Grave`)
    } else{
        console.log(`Multa Leve`)
    }
}
/*Um programa que ve se a pessoa vai levar multa ou não, e o nivel da multa,
se a velocidade for maior que a permitida e menor que 20% a mais será leve,
se for maior que os 20% será grave */
