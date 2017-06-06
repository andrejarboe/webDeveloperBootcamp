//Print all nums between -10 and 19
console.log('Print all nums between -10 and 19');

for(i = -10; i <  20; i++){
  console.log(+i);
}

//Print all even nums between 10 and 40
console.log('Print all even nums between 10 and 40');

for(i = 10; i <= 40; i++){
  if(i % 2 === 0){
    console.log(+i);
  }
}

//Print all odd nums between 300 and 333
console.log('Print all even nums between 300 and 333');

for(i = 300; i <= 333; i++){
  if(i % 2 !== 0){
    console.log(+i);
  }
}


//Print all nums divisible by 5 and 3 between 5 and 50
console.log('Print all nums divisible by 5 and 3 between 5 and 50');

for(i = 5; i <= 50; i++){
  if(i % 5 === 0 && i % 3 === 0){
    console.log(+i);
  }
}
