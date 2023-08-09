    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    console.log(arrayOfTodos[1].title)
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        const orderedList = document.getElementById('todo-list')
        const newTodo = document.createElement('LI')
        const textNode = document.createTextNode(arrayOfTodos[1].title)
        orderedList.appendChild(newTodo)
        newTodo.appendChild(textNode)
    }
    
    // make a for loop
