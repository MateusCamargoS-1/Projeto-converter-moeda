const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency')
const result = document.getElementById('result')

function handleSubmit(e) {
    e.preventDefault()
    
    if(!inputValue.value|| inputValue.value < 0) {
        result.innerHTML = 'Informe um valor correto!'
        result.style.color = '#FF0000'
        result.style.fontSize = '1.5em'
        return
    } else if(!selectedCurrency.value) {
        result.innerHTML = 'Escolha uma moeda'
        result.style.color = '#FF0000'
        result.style.fontSize = '1.5em'
    }

    converter()
}

function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value / 5.88
        result.innerHTML = valueFormatter('bt-BR', 'EUR')
        result.style.color = '#5aba8d'
        result.style.fontSize = '3.5em'
        animateResult()
        
    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value / 5.18
        result.innerHTML = valueFormatter('en-US', 'USD')
        result.style.color = '#5aba8d'
        result.style.fontSize = '3.5em'
        animateResult()
    }

    inputValue.value = ''
    selectedCurrency.value = ''
}

function valueFormatter(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`})
    return `<span>💸</span>${value}<span>💸</span>`
}

function animateResult() {
    return result.animate([
        { transform: 'scale(0)'},
        { transform: 'scale(100px)'},
    ], { duration: 500})
}