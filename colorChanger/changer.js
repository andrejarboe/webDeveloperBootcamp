
//select button and body tags
var button = document.querySelector('button');
var isPurple = false;

//tell button to look for click
button.addEventListener('click', changeBg);

function changeBg(){
  if(isPurple){
    document.body.style.background = "white";
  }else {
    document.body.style.background = "purple";
  }
  isPurple = !isPurple;
}

/*
  could use document.body.classList.toggle();
*/
