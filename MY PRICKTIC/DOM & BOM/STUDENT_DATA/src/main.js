
// get student data create element 
const new_student_data = document.querySelector('#new_student_data');
const msg = document.querySelector('.msg');
const result_msg = document.querySelector('.result_msg');

// get student photo show list
const student_list = document.querySelector('.student_list')
// get singe_student_view 
const singe_student_view = document.querySelector('.singe_student_view')
// get student_edit_data_from
const student_edit_data_from = document.querySelector('#student_edit_data_from');
//get student_result_add_form
const student_result_add_form = document.querySelector('#student_result_add_form');


// show all student data 

const showAllStudentData = () => {

    // get local data
    const oldStudentData = getLsData('student_data')

    let content = ''

    // all student data show map
    oldStudentData.map((data, index) => {
       
        content += `<tr class="align-middle">
        <td>${index+1}</td>
    <td>
        <img style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" src="${data.photo}" alt="">
    </td>
    <td>${data.name}</td>
    <td>${data.roll}</td>
    <td>${data.reg}</td>
    <td>
       ${data.results == null ? ' <button class="btn btn-info" data-bs-target="#student_result_data" data-bs-toggle="modal" onclick ="studentAddResult(\''+ data.id +'\')">Add Result</button>' : '<button class="btn btn-primary ">view Result</button>'}
       
        
    </td>
    <td>
        <i class="fa-regular fa-eye btn btn-primary" data-bs-target="#student_singe_view" data-bs-toggle="modal" onclick = "showSingeData('${data.id}')"></i>
        <i class="fas fa-edit btn btn-warning" data-bs-target="#student_edit_data" data-bs-toggle="modal" onclick="studentDataEdit('${data.id}')"></i>
        <i class="fas fa-trash btn btn-danger" onclick = "studentDataDelete('${data.id}')"></i>
    </td>
    </tr>`

    })

    student_list.innerHTML = content ;

}

// function invoke 
showAllStudentData()



// show student singe data 

const showSingeData = (id) => {
   
    let oldStudentData = getLsData('student_data')

    let singeView = oldStudentData.find((data) => data.id == id)


    singe_student_view.innerHTML = `<div class="header d-flex justify-content-between">
    <h3>Student info</h3>
    <button class="btn-close" data-bs-dismiss="modal"></button>
   </div> <hr>

   <img style="height: 300px; width: 300px; border-radius: 50%; object-fit: cover; display: inline-block; margin: auto;
   border: 4px solid #FFFF ;" src="${singeView.photo}" alt="">
  
  <table class="table table-striped my-2">
    <tbody>
        <tr>
            <td>#</td>
            <td>Taitle</td>
            <td>Taitle Info</td>
        </tr>
        <tr>
            <td>1</td>
            <td>StudentId</td>
            <td>154825144</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Student Name</td>
            <td>${singeView.name}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Roll Number</td>
            <td>${singeView.roll}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Reg Number</td>
            <td>${singeView.reg}</td>
        </tr>
    </tbody>
  </table>`
  

}


// studentDataDelete function create

const studentDataDelete = (id) => {
   
    // get local stogare data
    const oldStudentData = getLsData('student_data')

    const ubdateStudent = oldStudentData.filter((data) => data.id !== id)

    // ubdata local storage 
    ubdateLsData('student_data',ubdateStudent )
    
    // function invoke
    showAllStudentData()
}

// student edit data function
const studentDataEdit = (id) => {

    // get local storge data
    const oldStudentData = getLsData('student_data')

    const editStudentData = oldStudentData.find((data) => data.id == id)

    student_edit_data_from.querySelector('input[name=name]').value = editStudentData.name
    student_edit_data_from.querySelector('input[name=photo]').value = editStudentData.photo
    student_edit_data_from.querySelector('input[name=roll]').value = editStudentData.roll
    student_edit_data_from.querySelector('input[name=reg]').value = editStudentData.reg
    student_edit_data_from.querySelector('input[name=id]').value = editStudentData.id
    student_edit_data_from.querySelector('img#prevImg').setAttribute('src', editStudentData.photo)

}

//student_edit_data_from on submit evan
student_edit_data_from.onsubmit = (e) => {
    e.preventDefault()

    // get form data 
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    // distackture form data
    const {name, photo, roll, reg, id} = data

    // get local storage data
    const oldStudentData = getLsData('student_data')

    oldStudentData[oldStudentData.findIndex((item) => item.id == id)] = {
        ...oldStudentData.findIndex((item) => item.id == id),
        ...data
    }

    ubdateLsData('student_data', oldStudentData)
    showAllStudentData()

}


// new_student_data evan fire

new_student_data.onsubmit = (e) => {
    e.preventDefault()

    // get from data
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    // data distackcure
    const {photo , name , roll , reg} = data


    // condition
    if(!photo || !name|| !roll || !reg){  
        msg.innerHTML = createAlert('all fields are required !');

    } else{
        msg.innerHTML = createAlert(`${name}_Data Create Done`, 'success');

        //get local storage data
        let oldStudentData = getLsData('student_data')
        
        if(oldStudentData.find((item) => item.roll == roll )){
         return   msg.innerHTML = createAlert(`This roll ${roll} already exist`, 'warning')
        }
        if(oldStudentData.find((item) => item.reg == reg )){
         return   msg.innerHTML = createAlert(`This reg ${reg} already exist`, 'info')
        }

        // set local storage data
        createLsData('student_data', {...data, id : generateRandomId(), results : null})
        
        // function invoke
        showAllStudentData()

        // form data reset
        e.target.reset()

    }

}


// add result founciton

const studentAddResult = (id) => {
    
    // get local storag data
    const oldStudentData = getLsData('student_data')

    const resultAddData = oldStudentData.find((data) => data.id == id)

   student_result_add_form.querySelector('input[name=id]').value = resultAddData.id ;

}


student_result_add_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    // form data distackture 
    const {bangla, english, math, scince, socialScince, rel} = data


    if(!bangla || !english || !math || !scince || !socialScince || !rel){
        result_msg.innerHTML = createAlert('all fields are required !')

    }else{

        // get local storage data
        const oldStudentData = getLsData('student_data')
        
        oldStudentData[oldStudentData.findIndex((item) => item.id == data.id)] = {
        ...oldStudentData[oldStudentData.findIndex((item) => item.id == data.id)],
        results : data

       }
       
       ubdateLsData('student_data', oldStudentData)

       showAllStudentData()

    }



}