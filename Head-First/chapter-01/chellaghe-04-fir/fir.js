let x =5;
let snowflake = '*';
let y =8;

let a ='';
let b =' ';
let c ='**';
let counter =0;
let counterInside =0;

while (counter<x) {
    // debugger
    a=  snowflake;
    while (counterInside<y) {

        console.log(b+a);
        counterInside++;
        a =a+c;
        b= b+' ';
        


        // while (counter<y) {
        //     counter++;
        // }


    }


    counter=counter+1;
    //
    // console.log(b);
}
