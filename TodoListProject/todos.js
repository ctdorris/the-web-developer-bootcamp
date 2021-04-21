let userInput = "";
const todoList = [];

while (userInput !== "quit" && userInput !== "q") {
    userInput = prompt("What would you like to do?")
    if (userInput === "new"){
        const newItem = prompt("Enter a new todo")
        todoList.push(newItem)
        console.log(`${newItem} was added to list`)
    } else if(userInput === "list"){
        let todoNumber = 0
        console.log("************")
        for (let todo of todoList){
            console.log(`${todoNumber}: ${todo}`)
            todoNumber ++
        }
        console.log("************")
    } else if(userInput == "delete"){
        const deleteNumber = prompt("Which index would you like to delete?")
        todoList.splice(deleteNumber, 1)
        console.log("Todo Removed")
    }
}

console.log("Ok, you quit the app")