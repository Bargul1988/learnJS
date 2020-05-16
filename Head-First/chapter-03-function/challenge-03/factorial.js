let fct = 1;

function factorial(x) {
    if (x === 1) {
    } else {
        factorial(x - 1);
        fct = fct * x;
    }
   return fct;
}

let total = factorial(5);
console.log(total);