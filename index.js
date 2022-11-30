let conta = 0
let gorjeta = 0
let pessoas = 0
let botaoAtivo = 0

function receberConta() {
  conta = Number(document.querySelector('#bill-input').value)
  validarDados()
}

function receberPorcentagem(x) {
  if (botaoAtivo !== 0) {
    botaoAtivo.classList.remove('buttonActive')
  }

  if (x === 0) {
    gorjeta = Number(document.querySelector('#tip-input').value)
    validarDados()
    return
  }
  gorjeta = x

  botaoAtivo = document.querySelector(`input[value="${x}%"]`)
  botaoAtivo.classList.add('buttonActive')
  document.querySelector('#tip-input').value = ''

  validarDados()
}

function receberPessoas() {
  pessoas = Number(document.querySelector('#people-input').value)
  validarDados()
  return
}

function validarDados() {
  if (conta !== 0 && gorjeta !== 0 && pessoas !== 0) {
    calcularTotais()
    return
  }
  return
  //Parte que deu erro.
}

function calcularTotais() {
  const gorjetaPerCapita = (conta * (gorjeta / 100)) / pessoas
  const tipAmountP = document.querySelector('#tip-amount_result')
  tipAmountP.innerText = `$${gorjetaPerCapita.toFixed(2)}`

  const totalPerCapita = conta / pessoas + gorjetaPerCapita
  const totalP = document.querySelector('#total_result')
  totalP.innerText = `$${totalPerCapita.toFixed(2)}`
}

function reset() {
  conta = 0
  document.querySelector('#bill-input').value = ''

  gorjeta = 0
  if (botaoAtivo !== 0) {
    botaoAtivo.classList.remove('buttonActive')
  }
  document.querySelector('#tip-input').value = ''
  botaoAtivo = 0

  pessoas = 0
  document.querySelector('#people-input').value = ''

  const tipAmountP = document.querySelector('#tip-amount_result')
  tipAmountP.innerText = `$0.00`

  const totalP = document.querySelector('#total_result')
  totalP.innerText = `$0.00`
}
