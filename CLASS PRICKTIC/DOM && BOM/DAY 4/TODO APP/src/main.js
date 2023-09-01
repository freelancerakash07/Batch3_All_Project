const inputButton = document.querySelector('.inputButton');
const output = document.querySelector('.output');
const saveData = document.querySelector('.saveData');





const showTodo = () => {

let todos = getLsData('todos')

console.log(todos);

    let content = '';
    
    todos.map((item, index) => {
        content += `<tr>
        <th scope="row">1</th>
        <td>${item}</td>
        <td>In progress</td>
        <td>
          <button type="submit" onclick = "deletbutton('${item}')" class="btn btn-danger">Delete</button>
          <button type="submit" onclick = "finisButton('${item}')" class="btn btn-success ms-1">Finished</button>
        </td>
      </tr>`
    })

    output.innerHTML = content

}


showTodo()



saveData.addEventListener('click', () => {



 let val = inputButton.value ;

 if(val){

  insartData('todos', val)

  inputButton.value = ''

 }else{
    alert('todo must be emty')
 }




 showTodo()

})




const deletbutton = (item) => {

 let todos = getLsData('todos')

let ubdatingTodo = todos.filter((data) => data !== item )

deletedItem('todos', ubdatingTodo)

showTodo()

}





const finisButton = (item) => {

 

}