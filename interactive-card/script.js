// Pegando valores dos campos
const inputValueCardholderName = document.getElementById("info-card-name");
const inputValueCardNumber = document.getElementById("info-card-number");
const inputValueCardExpDateMonth = document.getElementById(
    "info-exp-date-month"
);
const inputValueCardExpDateYear = document.getElementById("info-exp-date-year");
const inputValueCardCodeSecurity =
    document.getElementById("info-code-security");
const buttonSubmit = document.querySelector(".button-send");
const buttonContinue = document.querySelector(".button-continue");
const form = document.querySelector(".forms");
const success = document.querySelector(".success");

//Pegando os campos de erros individuais por input
const nameError = document.querySelector(".errorMessageName");
const numberError = document.querySelector(".errorMessageNumber");
const monthError = document.querySelector(".errorMessageMonth");
const yearError = document.querySelector(".errorMessageYear");
const cvcError = document.querySelector(".errorMessageCVC");

// Pegando os campos do cartão nos quais os valores serão inseridos em tempo real
let cardFieldName = document.querySelector(".card-name");
let cardFieldNumber = document.querySelector(".card-number");
let cardFieldExpDateMonth = document.querySelector("#card-exp-date-month");
let cardFieldExpDateYear = document.querySelector("#card-exp-date-year");
let cardFieldCVC = document.querySelector(".card-info-cvc");

//Validações e injeção de conteúdo nos campos do cartão
inputValueCardholderName.oninput = () => {
    cardFieldName.innerText = inputValueCardholderName.value;
};

inputValueCardNumber.oninput = () => {
    if (inputValueCardNumber.value.length > inputValueCardNumber.maxLength) {
        inputValueCardNumber.value = inputValueCardNumber.value.slice(
            0,
            inputValueCardNumber.maxLength
        );
    } else {
        cardFieldNumber.innerText = format(inputValueCardNumber.value);
    }
};

inputValueCardExpDateMonth.oninput = () => {
    if (
        inputValueCardExpDateMonth.value.length >
        inputValueCardExpDateMonth.maxLength
    ) {
        inputValueCardExpDateMonth.value =
            inputValueCardExpDateMonth.value.slice(
                0,
                inputValueCardExpDateMonth.maxLength
            );
    } else {
        cardFieldExpDateMonth.innerText = inputValueCardExpDateMonth.value;
    }
};

inputValueCardExpDateYear.oninput = () => {
    if (
        inputValueCardExpDateYear.value.length >
        inputValueCardExpDateYear.maxLength
    ) {
        inputValueCardExpDateYear.value = inputValueCardExpDateYear.value.slice(
            0,
            inputValueCardExpDateYear.maxLength
        );
    } else {
        cardFieldExpDateYear.innerText = inputValueCardExpDateYear.value;
    }
};

inputValueCardCodeSecurity.oninput = () => {
    if (
        inputValueCardCodeSecurity.value.length >
        inputValueCardCodeSecurity.maxLength
    ) {
        inputValueCardCodeSecurity.value =
            inputValueCardCodeSecurity.value.slice(
                0,
                inputValueCardCodeSecurity.maxLength
            );
    } else {
        cardFieldCVC.innerText = inputValueCardCodeSecurity.value;
    }
};

buttonSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();

    let formIsvalid = true;

    if (!inputValueCardholderName.value) {
        nameError.classList.remove("hidden");
        formIsvalid = false;
    } else {
        nameError.classList.add("hidden");
    }
    
    if (!inputValueCardNumber.value) {
        numberError.classList.remove("hidden");
        formIsvalid = false;
    } else if (Number(inputValueCardNumber.value.length) < 16) {
        numberError.classList.remove("hidden");
        numberError.textContent = "Wrong format, numbers only";
        formIsvalid = false;
    } else {
        numberError.classList.add("hidden");
    }

    if (!inputValueCardExpDateMonth.value) {
        monthError.classList.remove("hidden");
        formIsvalid = false;
    } else if (
        Number(inputValueCardExpDateMonth.value) < 1 ||
        Number(inputValueCardExpDateMonth.value) > 12
    ) {
        monthError.classList.remove("hidden");
        monthError.textContent = "1-12 only";
        formIsvalid = false;
    } else {
        monthError.classList.add("hidden");
    }

    if (!inputValueCardExpDateYear.value) {
        yearError.classList.remove("hidden");
        formIsvalid = false;
    } else if (
        Number(inputValueCardExpDateYear.value) < 23 ||
        Number(inputValueCardExpDateYear.value) > 33
    ) {
        yearError.classList.remove("hidden");
        yearError.textContent = "23-33 only"; // 10 anos geralmente é a validade de um cartão de crédito convencional
        formIsvalid = false;
    } else {
        yearError.classList.add("hidden");
    }

    if (!inputValueCardCodeSecurity.value) {
        cvcError.classList.remove("hidden");
                formIsvalid = false;
    } else if (inputValueCardCodeSecurity.value.length > 3){
        cvcError.classList.remove("hidden");
        cvcError.textContent = "CVC Invalid";
        formIsvalid = false;
    }else {
        cvcError.classList.add("hidden");
    }
        
    if (formIsvalid) {
        form.classList.add("hidden-div");
        success.classList.remove("hidden-div");
    }
});

buttonContinue.addEventListener("click", () => {
    location.reload();
});

function format(value) {
    return value.toString().replace(/\d{4}(?=.)/g, "$& ");
}
