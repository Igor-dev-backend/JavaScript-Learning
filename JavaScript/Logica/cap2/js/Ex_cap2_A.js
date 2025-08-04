const frm = document.querySelector("form")
const resposta1 = document.querySelector("#comprimido")
const resposta2 = document.querySelector("#desconto")

frm.addEventListener("submit", (e) => {
    const Remedio = frm.inRemedio.value
    const Preco = Number(frm.inPreco.value)

    const fusao = Math.floor(Preco * 2)

    resposta1.innerText= `${Remedio}`
    resposta2.innerText= `O preço com desconto: ${fusao.toFixed(2)}`

    e.preventDefault()
})