



// alert create

const createAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>  `
}



// create local storage data

const createLsData = (key, data) => {

    let student = []

    if(localStorage.getItem(key)){
        student = JSON.parse(localStorage.getItem(key))

    }

    student.push(data)

    localStorage.setItem(key , JSON.stringify(student))

}



// get local storage data 

const getLsData = (key) => {



    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }else{
        return setudent = []
    }

}



// ubdate local storage data 

const ubdateLsData = (key, data) => {

    localStorage.setItem(key, JSON.stringify(data))

}




const generateRandomId = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36 to make it shorter
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * randomChars.length);
      randomId += randomChars[randomIndex];
    }
  
    return `${randomId}-${timestamp}`;
  }
  


