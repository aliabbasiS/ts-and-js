const inputField = document.getElementById('inputField');
const generateButton = document.getElementById('generateButton');
const calculateButton = document.getElementById('calculateButton');
const clearButton = document.getElementById('clearButton');
 const resultDiv = document.getElementById('result');

 function isValidNumber(number) {
 return /^\d{5}$/.test(number);
}

function generateRandomNumber() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    inputField!.value = randomNumber;
    }

function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
            }
        }
        return true;
    }

function calculatePrimeNumbers() {
    const input = inputField!.value;
        if (!isValidNumber(input)) {
            resultDiv!.innerHTML = 'the input is invalid';
            return;
        }

const numbers = [];
    for (let i = 0; i <= input; i++) {
        if (isPrimeNumber(i)) {
            numbers.push(i);
            }
        }

        resultDiv!.innerHTML = `all  primary keys are: ${numbers}`;
        }

function clearData() {
    inputField!.value = '';
    resultDiv!.innerHTML = '';
    }

generateButton!.addEventListener('click', generateRandomNumber);
calculateButton!.addEventListener('click', calculatePrimeNumbers);
clearButton!.addEventListener('click', clearData);