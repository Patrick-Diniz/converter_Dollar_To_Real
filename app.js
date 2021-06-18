let btn = document.querySelector('#button');

btn.addEventListener('click', converter);

function converter() {
    let dollarValue = document.querySelector('#inputNumber').value;

    let result = document.querySelector('#result')

    correctedValue = dollarValue * 5.5

    if(dollarValue == '') {
        result.textContent = 'Fill the field!'
    } else {
        result.textContent = ` The value converted according to the Dollar exchange rate is = R$${correctedValue.toFixed(2)}`
    }

}