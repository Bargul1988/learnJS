function easyUnpack(values) {
    values.push(values[0],values[2], values[values.length-2]);

    let arr =  values.slice(length-3);

    return arr;
}

let result = easyUnpack([2,3,0,6,1,24,4,6,8,10,18,0]);
console.log(result);