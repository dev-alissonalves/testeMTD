// Pegando valores dos campos
const inputValueCardholderName = document.getElementById("info-card-name");
const inputValueCardNumber = document.getElementById("info-card-number");
const inputValueCardExpDateMonth = document.getElementById("info-exp-date-month");
const inputValueCardExpDateYear = document.getElementById("info-exp-date-year");
const inputValueCardCodeSecurity = document.getElementById("info-code-security");
const buttonSubmit = document.querySelector(".button-send");
const buttonContinue = document.querySelector(".button-continue");
const form = document.querySelector(".forms");
const nameError = document.querySelector(".hidden-card-name");

// Pegando os campos do cartão nos quais os valores serão inseridos em tempo real
let cardFieldName = document.querySelector(".card-name");
let cardFieldNumber = document.querySelector(".card-number");
let cardFieldExpDateMonth = document.querySelector("#card-exp-date-month");
let cardFieldExpDateYear = document.querySelector("#card-exp-date-year");
let cardFieldCVC = document.querySelector(".card-info-cvc");

inputValueCardholderName.oninput = () => {
    cardFieldName.innerText = inputValueCardholderName.value;
    console.log("está funcionando...")
};

inputValueCardNumber.oninput = () => {
    cardFieldNumber.innerText = format(inputValueCardNumber.value);
};

inputValueCardExpDateMonth.oninput = () => {
    cardFieldExpDateMonth.innerText = inputValueCardExpDateMonth.value;
};

inputValueCardExpDateYear.oninput = () => {
    cardFieldExpDateYear.innerText = inputValueCardExpDateYear.value;
};

inputValueCardCodeSecurity.oninput = () => {
    cardFieldCVC.innerText = inputValueCardCodeSecurity.value;
};

buttonSubmit.addEventListener("click", (evt) =>{
    evt.preventDefault();
});

function format(value) {
    return value.toString().replace(/\d{4}(?=.)/g, "$& ");
}
