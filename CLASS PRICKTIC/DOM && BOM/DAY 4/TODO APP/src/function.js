


const getLsData = (key) => {

    let todos = []

    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key))
    }

}



const insartData = (key ,data ) => {

    let todos = []

    if(localStorage.getItem(key)){
      todos = JSON.parse(localStorage.getItem(key))
    }

    todos.push(data)

    localStorage.setItem('todos', JSON.stringify(todos))

}


const deletedItem = ( key,data) => {

    localStorage.setItem(key, JSON.stringify(data))

}