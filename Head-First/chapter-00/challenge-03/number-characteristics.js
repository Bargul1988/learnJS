let x = 0;
let str;
let even;
let bit;
let simple;

if (x <= 100 && x >= -100) {
    if (x < 0 && x >= -100) {
        str = 'отрицательное ';

    } else if (x > 0 && x <= 100) {
        str = 'положительное ';

    }else if(x===0){
        str='беззнаковаое';
    }
    if (x % 2 === 0) {
        even = 'чётное';
    } else {
        even = 'нечётное';
    }
    if (x < 10 && x > -10) {
        bit = 'однозначное';

    } else if ((x >= 10 && x < 100) || (x > -100 && x <= -10)) {
        bit = 'двузначное';
    } else {
        bit = 'трёхзначное';
    }
            let counter =0;
            for (let j = 1; j<x ; j++) {
                if(x%j ===0){
                    counter++;
                    if (counter>2)break;
                }
            }
           if(counter <= 2){

               simple = 'простое';

           }else{
               simple='составное';
           }

    console.log(`Число ${x} ${even},${bit}, ${str}, ${simple} `);
} else {
    console.log('Число не входит в диапазон от -100 до 100');
}





