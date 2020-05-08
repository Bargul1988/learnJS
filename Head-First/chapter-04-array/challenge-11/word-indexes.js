let arr =[];
let idx ;

function wordIndexes(values,second) {

             idx =values.indexOf(second);

            while (idx !== -1) {

                arr.push(idx);
                idx = values.indexOf(second, idx+1);

            }

    return arr;
}
let result= wordIndexes(['apple', 'orange', 'orange','peach', 4, 'peach','peach'], 'peach');
console.log(result);