let userInput = ""
let todoList = []

while (userInput != "quit") {
    userInput = prompt("What would you like to do?")
    if (userInput == "new"){
        newItem = prompt("Enter a new todo")
        todoList.push(newItem)
    } else if(userInput == "list"){
        console.log(todoList)
    }
}