'use strict';

const form = document.querySelector('form');
const onlyInput = document.querySelector('.onlyInput');
const convert = document.querySelector('.convert');
const output = document.querySelector('.output p');
const toC = document.querySelector('.toC');
const toF = document.querySelector('.toF');
const change = document.querySelector('#change');
const main = document.querySelector('main');

change.addEventListener('click', function() {
    main.classList.toggle('dark-mode');

    if (main.classList.contains('dark-mode')) {
        this.innerText = 'Light mode';
    } else {
        this.innerText = 'Dark mode';
    }
});

function isNumber(input) {
    if (input.length > 0 && !isNaN(input)) {
        return true;
    } else {
        return false;
    }
}

function convertToCelsius(num) {
    const VALUE_1 = 5 / 9;
    const VALUE_2 = 32;
    let celsius = VALUE_1 * (num - VALUE_2);
    output.innerText = `${num} °F = ${celsius.toFixed(2)} °C`;
}

function convertToFahrenheit(num) {
    const VALUE_1 = 9 / 5;
    const VALUE_2 = 32;
    let Fahrenheit = (VALUE_1 * num) + VALUE_2;
    output.innerText = `${num} °C = ${Fahrenheit.toFixed(2)} °F`;
}

convert.addEventListener('click', function() {
    //Getting the input values
    let a = onlyInput.value.trim();

    // Basic validation
    if (isNumber(a) && toC.checked) {
        convertToCelsius(parseFloat(a));
        onlyInput.value = '';
    } else if(isNumber(a) && toF.checked) {
        convertToFahrenheit(parseFloat(a));
        onlyInput.value = '';
    } else {
        output.innerText = 'Please enter a valid number';
    }
});


