for (let i = 1; i < 100; i++) {

    let counter = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            counter++;
            if (counter > 2) break;


        }

    }
    if (counter <= 2) {
        console.log(i)
    }

}


//
//
// if ((i % j == 0)&&(i/j ==j)) {
//
//
// }
//
//
// // console.log(i)
