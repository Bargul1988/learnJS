function replace(values, string) {

    for (let i = 0; i < values.length; i++)
        if (values[i] === 'replace') {
            values[i] = string;
        }

    return values;
}

let result = replace(['replace', 'apple', 'orange', 'replace', 'orange', 'replace', 'replace'], 'peach');
console.log(result);