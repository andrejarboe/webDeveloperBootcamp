//Print all nums between -10 and 19
var num = -9;

console.log('Print all nums between -10 and 19');

while(num < 19){
  console.log(+num);
  num++;
}

//Print all even nums between 10 and 40
var num = 12;

console.log('Print all even nums between 10 and 40');

while(num < 40){
  console.log(+num);
  num += 2;
}

//Print all odd nums between 300 and 333
var num = 301;

console.log('Print all odd nums between 300 and 333');

while(num < 333){
  console.log(+num);
  num += 2;
}

//Print all nums divisible by 5 and 3 between 5 and 50
var num = 5

console.log('Print all nums divisible by 5 and 3 between 5 and 50');

while(num < 50){
  if((num % 3 === 0) && (num % 5 === 0)){
    console.log(+num);
    num++;
  }else{
    num++;
  }
}
