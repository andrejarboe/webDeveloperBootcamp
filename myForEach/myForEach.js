function myForEach(arr, func){
  //loop through array
  for (var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }

}

//add arr.myForEach 
Array.prototype.myForEach = function(func){
  for(i = 0; i < this.length; i++){
    func(this[i]);
  }
}
