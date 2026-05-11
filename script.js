let angkaPertama = '';
let operator = '';
let angkaKedua = '';


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(angkaPertama, operator, angkaKedua) {
    switch (operator) {
        case '+':
           return add(angkaPertama, angkaKedua);
        case '-':
            return subtract(angkaPertama, angkaKedua);
        case '*':
            return multiply(angkaPertama, angkaKedua);
        case '/':
            return divide(angkaPertama, angkaKedua);
    }
}

const numberListener = document.querySelectorAll('.number');
const numberDisplay = document.querySelector('.display');
const operatorListener = document.querySelectorAll('.operator');
const equalsListener = document.querySelector('.equals');
const clearListener = document.querySelector('.clear');

numberListener.forEach((tombol) => {
    tombol.addEventListener('click', (e) => {
        let teksAngka = e.target.textContent;
        if(operator === ''){
            angkaPertama += teksAngka;
            numberDisplay.textContent = angkaPertama; 
        } else {
            angkaKedua += teksAngka;
            numberDisplay.textContent = angkaKedua;
        }
        
    });
});

operatorListener.forEach((tombol) => {
    tombol.addEventListener('click', (e) => {
        let teksOperator = e.target.textContent;
        operator = teksOperator;
        numberDisplay.textContent = operator;
    });
});

equalsListener.addEventListener('click', (e) => {
    let hasil = operate(Number(angkaPertama), operator, Number(angkaKedua));
    numberDisplay.textContent = hasil;
});

clearListener.addEventListener('click', (e) => {
    angkaPertama = '';
    angkaKedua = '';
    operator = '';
    numberDisplay.textContent = '';
})