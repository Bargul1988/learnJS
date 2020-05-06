let hit = [];

function numberFilter(values) {
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === 'number') {

            hit = hit + values[i];

        }

    }
    hit = Array.from(hit);

    return hit;
}

let result = numberFilter(['yo-yo', 4, 2, null, [], 0, false, "Yo", 0]);
console.log(result);
console.log(typeof result);

