//make todo list
var todos = [];

//ask for input
var input = prompt('What would you like to do?\n \"new\" - Add A Todo\n\"list\" - List all Todos\n\"quit\" - Quit App');

while(input !== "quit"){
  //handle input
  if(input === "list"){
    console.log(todos);
  }else if (input === "new") {
    //ask for new todo
    var newTodo = prompt('Enter new todo.');
    //add to todos array
    todos.push(newTodo);
  }

  //ask again for new input
  var input = prompt('What would you like to do?\n \"new\" - Add A Todo\n\"list\" - List all Todos\n\"quit\" - Quit App');
}

console.log('OK, YOU QUIT THE APP.');
