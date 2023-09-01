const box = document.querySelector('.box')
const addButton = document.querySelector('.addButton')
const inputBt = document.querySelector('.inputBt')
const data = document.querySelector('.data')


let foodList = []


const showtodos = (e) => {

    let content = '';

    foodList.forEach((item, index) => {
        content += `<li class="list-group-item"><h3>${item}</h3></li> <br/>`
    })

    data.innerHTML = content
}


showtodos()


addButton.addEventListener('click', () => {
    const val = inputBt.value

    foodList.push(val)
    showtodos()
    inputBt.value = ''
})


