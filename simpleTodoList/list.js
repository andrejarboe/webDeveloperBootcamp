//make todo list
var todos = ["buy hat", "workout"];

//ask for input
var input = prompt('What would you like to do?\n\"new\" - Add A Todo\n\"list\" - List all Todos\n\"delete" - Remove a Specfic Todo \n\"quit\" - Quit App');

while(input !== "quit"){
  //handle input
  if(input === "list"){
    listTodos();
  }else if (input === "new") {
    addTodo();
  }else if (input === "delete") {
    deleteTodo();
  }
  //ask again for new input
  var input = prompt('What would you like to do? \n \"new\" - Add A Todo \n \"list\" - List all Todos \n \"delete" - Remove a Specfic Todo \n \"quit\" - Quit App');
}

console.log('OK, YOU QUIT THE APP.');

//Functions to make whil loop smaller
function listTodos(){
  console.log('**********');
  todos.forEach(function(todo, i){
    console.log(i + ": " +todo);
  });
  console.log('**********');
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt('Enter new todo.');
  //add to todos array
  todos.push(newTodo);
  console.log('Added todo');
}

function deleteTodo(){
  //ask fo index of todo to delete
  var index = prompt('Enter index of todo to delete.')
  //delete that todo
  //splice()
  todos.splice(index, 1);
  console.log('Deleted todo.');
}
