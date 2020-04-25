let y=1;
function factorial(x) {
   for (let i =1; i<=x; x--){
      y= y*x;
   }
   return y;
}
let total = factorial(4)
console.log(total)