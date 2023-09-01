
const startbutton = document.querySelector('.startbutton');
const stopbutton = document.querySelector('.stopbutton');
const prevphoto = document.querySelector('.prevphoto');



let counter ;

startbutton.onclick = () => {

  counter = setTimeout(() => {

    prevphoto.setAttribute('src', 'https://bengali.cdn.zeenews.com/bengali/sites/default/files/styles/zm_700x400/public/2018/03/06/111639-bally-6-3-18.jpg?itok=P2cWBpbO')

   }, 5000);

}



stopbutton.onclick = () => {

    clearTimeout(counter)
}