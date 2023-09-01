

const setAlert = (msg , type =  "danger") => {

    return `
    <p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>
    `

}


const isEmail = (email) => {

    const pattern = /^[a-z0-9-\.]*@[a-z]*\.[a-z-0-9]{2,5}$/;

    return pattern.test(email)
}

const isPhone = (phone) => {

    const pattern = /^(01|8801|\+8801)[0-9]{9}$/

    return pattern.test(phone)
}


