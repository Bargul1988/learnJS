let counter=0
function sumOfWordIndexes(values,second) {
 for (let i=0; i<values.length;i++ ){
    if( values[i] === second){

       counter= values.indexOf(values[i]);
       counter = counter +values.lastIndexOf(values[i]);

    }

 }
 return counter;
}
let result = sumOfWordIndexes([ 'peach','apple',81, 'orange',true,[],'peach',"peach"], 'peach');
console.log(result);
