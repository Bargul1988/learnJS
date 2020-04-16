console.log('hello world');

const input = document.querySelector('.numberInput');
console.log(input);


const button = document.querySelector('.button');


const buttonMinus = document.querySelector('.buttonSubtraction');

const buttonMultiplication = document.querySelector('.buttonMultiplication');

const buttonSplit = document.querySelector('.buttonSplit');




input.value = 5;

// button.onclick = add;
//
// function add() {
//     input.value = 13;
// }



const drawResult = () => {

    document.querySelector('.resultAdd').textContent = document.querySelector('.resultAdd').textContent  - - input.value;
}


const drawResultMinus = () => {

    document.querySelector('.resultAdd').textContent = document.querySelector('.resultAdd').textContent  -  input.value;
}

const drawResultMultiplication = () => {

    document.querySelector('.resultAdd').textContent = document.querySelector('.resultAdd').textContent  *  input.value;
}

const drawResultSplit = () => {

    document.querySelector('.resultAdd').textContent = document.querySelector('.resultAdd').textContent  /  input.value;
}

button.onclick=drawResult;
buttonMinus.onclick=drawResultMinus;
buttonMultiplication.onclick=drawResultMultiplication;
buttonSplit.onclick=drawResultSplit;