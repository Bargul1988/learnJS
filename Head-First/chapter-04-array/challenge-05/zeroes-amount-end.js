let counter = 0;

function zerosAmountEnd(values) {

    for (let i = 0; i < values.length; values.length--) {

        if (values[values.length - 1] === 0) {

            counter = counter + 1;

        } else break;


    }
    return counter;
}

let result = zerosAmountEnd([4, 0, 4, 3, 0, 0, 0, 0, 0]);
console.log(result);