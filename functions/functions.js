//Chessk if num is even
function isEven(num){
  return num % 2 === 0;
}

//Do factorial of number
function factorial(num){
  var x = 1;

  if(num === 0){
    return 1;
  }else {
    for(i= num; i >=1; i--){
      x *= i;
    }

    return x;

  }
}

//Kebab to snake
function kebabToSnake(str){
  return str.replace(/-/g, '_');

}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");
