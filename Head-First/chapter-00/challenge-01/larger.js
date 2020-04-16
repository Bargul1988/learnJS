let x=1 ;
let y='2';
if (x>y){
    console.log('x больше чем y');
}else if(x<=y){
    console.log(`${x} меньше чем ${y}`);
}else if(x===y) {
    console.log('x равен y');
}else {
 console.log('одна из переменных не число');
}


console.log(typeof x==='number' ,typeof y)