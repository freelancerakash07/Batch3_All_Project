
let valList = []


const calValue = (val) => {

    valList.push(val)

    document.querySelector('.main_header').innerHTML = valList.join('')
    
}


const fainalResult = () => {

   if(valList.length > 0 ){
    document.querySelector('.main_bottom').innerHTML = eval(valList.join(''))
   }

}




const oneDelete = () => {
    valList.pop()

    document.querySelector('.main_header').innerHTML = valList.join('')
    
    if(valList.length == 0 ){
        document.querySelector('.main_bottom').innerHTML = 0
       }
}



const allDelete = () => {
    valList = []
    document.querySelector('.main_header').innerHTML = valList.join('')
    document.querySelector('.main_bottom').innerHTML = 0
}