

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


/**
 * ganarate random id
 * @returns 
 */

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
  

/**
 * get gpa and grade
 * @param {*} mark 
 * @returns 
 */

  const getGpaGrade = (mark) => {

    let gpa ;
    let grade ;

    if ( mark >= 0 && mark < 33 ){
        gpa = 0
        grade = 'F'

    } else if ( mark >= 33 && mark < 40 ){
        gpa = 1
        grade = 'D'

    } else if ( mark >= 40 && mark < 50 ){
        gpa = 2
        grade = 'C'

    } else if ( mark >= 50 && mark < 60 ){
        gpa = 3
        grade = 'B'

    } else if ( mark >= 60 && mark < 70 ){
        gpa = 3.5
        grade = 'A-'

    } else if ( mark >= 70 && mark < 80){
        gpa = 4
        grade = 'A'

    } else if ( mark >= 80 && mark <= 100){
        gpa = 5
        grade = 'A+'

    } else {
        gpa = 'invalid'
        grade = 'invalid'
    }

    return  {
        gpa : gpa,
        grade : grade
    }
}




const fainalResult = (mark) => {

    let cgpa ;
    let results ;

    let totalgpa = getGpaGrade(mark.bangla).gpa + getGpaGrade(mark.english).gpa + getGpaGrade(mark.math).gpa + getGpaGrade(mark.scince).gpa + getGpaGrade(mark.socialScince).gpa + getGpaGrade(mark.religion).gpa

     cgpa = totalgpa / 6


    if(mark.bangla >= 33 && mark.english >= 33 && mark.math >= 33 && mark.scince >= 33 && mark.socialScince >= 33 && mark.religion >= 33){

        if(cgpa >= 1 && cgpa <2){
            results = "D"

        } else if( cgpa >= 2 && cgpa < 3){
            results = "C"

        } else if(cgpa >= 3 && cgpa < 3.5){
            results = "B"

        } else if ( cgpa >= 3.5 && cgpa < 4){
            results = "A-"

        } else if (cgpa >= 4 && cgpa < 5 ){
            results = "A"

        } else if (cgpa >= 5) {
            results = "A+"
        } else{
            results = "invalid !"
        }
         
        return {
            cgpa : cgpa,
            results : results
        }

    } else{
        return {
            cgpa : cgpa,
            results : "F"
        }
    }

}


