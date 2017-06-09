function printReverse(arr){
  for(i = arr.length -1; i >= 0; i--){
    console.log(arr[i]);
  }
}

printReverse([1,2,3,4]);

//*** isUniform(["a","a","a","a"]); ***
function isUniform(arr){
  var first = arr[0];

  //iterate throuugh array
  //start at 1 becase comre [0] to [0] is redundent
  for(i = 1; i < arr.length; i ++){
    //compare index to arr
    if(first !== arr[i]){
      return false;
    }
  }
  return true;
}

isUniform([1,1,1,1]);
isUniform([1,1,2,1]);
isUniform(["a","b","a","a"]);
isUniform(["a","a","a","a"]);

//*** sumArray()
function sumArray(arr){
  var sum = 0;

  arr.forEach(function(index){
    sum += index;
  });

  return sum;
}

sumArray([1,2,3]);

//*** max()
function max(arr){
  var max = arr[0];

  arr.forEach(function(index){
    //compare indedx to current max
    if(max < index){
      max = index;
    }
  });

  return max;
}

max([10,3,17,4, 17]);
