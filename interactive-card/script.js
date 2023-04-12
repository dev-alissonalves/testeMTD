// Pegando valores dos campos
const inputValueCardholderName = document.getElementById("info-card-name");
const inputValueCardNumber = document.getElementById("info-card-number");
const inputValueCardExpDateMonth = document.getElementById("info-exp-date-month");
const inputValueCardExpDateYear = document.getElementById("info-exp-date-year");
const inputValueCardCodeSecurity = document.getElementById("info-code-security");

// Pegando os campos do cartão nos quais os valores serão inseridos em tempo real
let cardFieldName = document.querySelector(".card-name");
let cardFieldNumber = document.querySelector(".card-number");
let cardFieldExpDate = document.querySelector(".card-exp-date");
let cardFieldCVC = document.querySelector(".card-info-cvc");

inputValueCardholderName.oninput = () => {
    cardFieldName.innerText = inputValueCardholderName.value
}

inputValueCardNumber.oninput = () => {
    cardFieldNumber.innerText = inputValueCardNumber.value
}

inputValueCardExpDateMonth.oninput = () => {
    cardFieldExpDate.innerText = inputValueCardExpDateMonth.value
}

inputValueCardCodeSecurity.oninput = () => {
    cardFieldCVC.innerText = inputValueCardCodeSecurity.value
}