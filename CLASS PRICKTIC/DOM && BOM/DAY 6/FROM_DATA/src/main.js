const createFromData = document.querySelector('#createFromData');
const photo = document.querySelector('#photo');
const photoPrevew = document.querySelector('#photoPrevew');
const galPhoto = document.querySelector('#galPhoto');
const msg = document.querySelector('.msg');
const img_box = document.querySelector('.img_box');
const galphotoprev = document.querySelector('.galphotoprev');




createFromData.onsubmit = (e) => {
    e.preventDefault()


    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

   const {name , email, phone} = data ;


   if(!name || !email || !phone){

    msg.innerHTML = setAlert('all filds are requird !')

   } else if( !isEmail(email)){

    msg.innerHTML = setAlert('E-mail is not valid', 'warning')

   } else if ( !isPhone(phone)){

    msg.innerHTML = setAlert('number is not valid', 'info')

   } else {
    msg.innerHTML = setAlert('Data stable', 'success')
    e.target.name.value = ''
    e.target.email.value = ''
    e.target.phone.value = ''
   }

}



photo.onchange  = (e) => {
    
    const imageUrl = URL.createObjectURL(e.target.files[0])

    photoPrevew.setAttribute('src', imageUrl)

}

let photoList = [];

const showgallary = () => {
    
    galPhoto.onchange = (e) => {
    
        for (let i = 0; i < e.target.files.length; i++) {
            
            const galPhotoUrl = URL.createObjectURL(e.target.files[i])
            
            photoList.push(galPhotoUrl)
        }
    
        let content = ''
    
        photoList.forEach((item,index) => {
    
            content += `<img class="galdel"  src="${item}"  alt=""> 
            <button data-dismiss="galdel" onclick="deletbutton('${item}')" class="btn-close galPhotDelet"></button>`
    
        })
    
        img_box.innerHTML = content ;
    
    }
}

showgallary()


const deletbutton = (item) => {

    let ubdateData = photoList.filter((data) => data !== item)

    photoList = ubdateData

    let content = ''
    
        photoList.forEach((item,index) => {
    
            content += `<img class="galdel"  src="${item}"  alt=""> 
            <button data-dismiss="galdel" onclick="deletbutton('${item}')" class="btn-close galPhotDelet"></button>`
    
        })
    
        img_box.innerHTML = content ;

    console.log(galPhoto.files);
 
}