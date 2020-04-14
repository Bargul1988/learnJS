let location1 = Math.floor( Math.random()*5);
let location2 = location1+1;
let location3 = location1 +2;
let guess ;
let hits = 0;
let guesses = 0; // значение текущего выстрела
let isSunk = false;

while ( isSunk == false){
      guess = prompt("Fire! number 0 - 6",0)
    if ( 0 > guess || guess >  6 ){
        alert("Чилсо должно быть от 0 до 6");
    }else {
        guesses =guesses+1;
        if (guess ==location1||guess== location2||guess== location3){
            hits = hits +1;
            alert('Одна палуба уничтожена');
            if (guess== location1)
                location1 =undefined;
            if (guess== location2)
                location2 =undefined;
            if (guess== location3)
                location3 =undefined;

            if(hits ==3){
                alert("Вы уничтожили корабль");
                isSunk = true;

            }
        } else{
            alert("Mimo");
        }


    }

}

alert("Статистика:  вы уничтожили корабль за  " + guesses + " выстрелов." +
    "Ваш процент поподания "+ Math.round(3/guesses *100) + " %" );




console.log(location1,location2,location3)
console.log(isSunk)