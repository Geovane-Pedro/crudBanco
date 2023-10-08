class Banco{
    constructor(nome, cpf, conta, tipoConta, agencia){
        this.nome = nome
        this.cpf = cpf
        this.conta = conta
        this.tipoConta = tipoConta
        this.agencia = agencia
        this.saldo = 0
    }
    getSaldo(){
        return this.saldo
    }
    getConta(){
        return this.conta
    }
    depositoConta(deposito){
        this.saldo = eval(`${this.saldo}+${deposito}`)
    }
    saqueConta(saque){
        this.saldo = eval(`${this.saldo}-${saque}`)
    }
}
let contaBanco = []

const enviar = document.querySelector(".enviar")
const saque = document.querySelector("#saque")
const deposito = document.querySelector("#deposito")
const container = document.querySelector("#container")
const formulario = document.querySelector("#formulario")
const movimentacaoS = document.querySelector(".movimentacaoS")
const movimentacaoD = document.querySelector(".movimentacaoD")

enviar.addEventListener('click',() => {
    const banco = new Banco(
        document.querySelector("#nome").value,
        document.querySelector("#cpf").value,
        document.querySelector("#conta").value,
        document.querySelector(".tipoConta").value,
        document.querySelector("#agencia").value
    )
    contaBanco.push(banco)
    toShow()
})
const toShow = () => {
    container.innerHTML = ""
    contaBanco.map((e) =>{
        const div = document.createElement("div")
        div.setAttribute("class","dadosBanco")
        div.innerHTML = `<p>${e.nome} que tem o CPF: ${e.cpf}, conta ${e.tipoConta} agência: ${e.agencia}, conta: ${e.getConta()}, e saldo atual de R$ ${e.getSaldo()},00 reais, deseja fazer alguma movimentação?</p>
        <div class="butao">
            <button onclick="entrada(${contaBanco.indexOf(e)})">Depósito</button>
            <button onclick="saida(${contaBanco.indexOf(e)})">Saque</button>
        </div>`
        container.appendChild(div)
    })
}
let dinheiroEntrada
let dinheiroSaida
function entrada(i){
    movimentacaoD.classList.toggle('hide')
    return dinheiroEntrada = i
}
function saida(i){
    movimentacaoS.classList.toggle('hide')
    return dinheiroSaida = i
}
function sacar() {
    contaBanco[dinheiroSaida].saqueConta(saque.value)
    movimentacaoS.classList.toggle('hide')
    toShow()
}
function depositar() {
    contaBanco[dinheiroEntrada].depositoConta(deposito.value)
    movimentacaoD.classList.toggle('hide')
    toShow()
}