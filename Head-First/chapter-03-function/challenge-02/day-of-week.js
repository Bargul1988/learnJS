let x = 7;

function dayOfWeek(x) {
      switch (x) {


          case 1: x ='Monday';
             break;
          case 2: x= 'Tuesday';
              break;
          case 3: x = 'Wednesday';
            break;
          case 4:x = 'Thursday';
            break;

          case 5:x =('Friday');
              break;
          case 6:x =('Saturday');
              break;
          case 7:x =('Sunday');
              break;
          default: x =('Enter an integer from one to 7');

      }
           return  x;


}

const d = dayOfWeek(x)
console.log(d)



