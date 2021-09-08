// Adicionando ao button a função calculo (reais x dolar) (criando um id para o button e para o input)
const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 241.880
const peso = 0.053
const iene = 0.048

const convertValues = () => {
    const inputreais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputreais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputreais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputreais / euro)
    }

    if (select.value === "BTC Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BTC' }
        ).format(inputreais / bitcoin)
    }

    if (select.value === "¥ Iene Japones") {
        currencyValueText.innerHTML = new Intl.NumberFormat('ja-JA',
            { style: 'currency', currency: 'JPY' }
        ).format(inputreais / iene)
    }

    else if (select.value === "$ Peso Argentino") {
        currencyValueText.innerHTML = new Intl.NumberFormat('es-AR',
            { style: 'currency', currency: 'ARS' }
        ).format(inputreais / peso)
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'BTC Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (select.value === '¥ Iene Japones') {
        currencyName.innerHTML = "Iene Japones"
        currencyImg.src = "./assets/iene.png"
    }

    else if (select.value === '$ Peso Argentino') {
        currencyName.innerHTML = "Peso Argentino"
        currencyImg.src = "./assets/peso.png"
    }

    convertValues()

}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)