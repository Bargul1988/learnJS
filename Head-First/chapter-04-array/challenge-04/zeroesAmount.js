let counter =0;
function zeroesAmount(values) {
     debugger;
      for (let i = 0; i<values.length; values.length--) {
         if( values[values.length-1] ===0  ) {
              counter = counter + 1;
         }
      }
     return counter;
}
let result = zeroesAmount([1,0,0,0,4,0,14,0,48,0,66,66,31,0,3,5,0]);
console.log(result);