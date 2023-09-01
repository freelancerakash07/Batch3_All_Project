const startbutton = document.querySelector('.startbutton')
const stopbutton = document.querySelector('.stopbutton')
const resetbutton = document.querySelector('.resetbutton')
const regult = document.querySelector('.regult')
const audio = document.querySelector('.audio')




let counter = 0 ;
let clearcounter ;

startbutton.onclick = () => {

    clearcounter = setInterval(() => {
        counter++
        regult.innerHTML = counter
        audio.play()
    }, 1000);

}




stopbutton.onclick = () => {
    clearInterval(clearcounter)
}



resetbutton.onclick = () => {
    clearInterval(clearcounter);
    counter = 0
    regult.innerHTML = counter
}