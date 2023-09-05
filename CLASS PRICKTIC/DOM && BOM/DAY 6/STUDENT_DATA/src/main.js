

// get html element
const new_student_data = document.querySelector('#new_student_data');
const msg = document.querySelector('.msg');
const student_list = document.querySelector('.student_list');
const single_Student_view = document.querySelector('.single_Student_view');
const student_data_edit = document.querySelector('#student_data_edit');
const student_result_add = document.querySelector('#student_result_add');
const student_edit_result_form = document.querySelector('#student_edit_result_form');





const showStudentData = () => {

    let data = getLsData('student_data')



    let content = '';

    data.map((item, index) => {
        content += `<tr class="align-middle">
        <td>${index+1}</td>
    <td>
        <img style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" src="${item.photo}" alt="">
    </td>
    <td>${item.name}</td>
    <td>${item.roll}</td>
    <td>${item.reg}</td>
    <td>
    ${item.result == null ? '<button class="btn btn-info" data-bs-target="#student_result_modal" data-bs-toggle="modal" onclick="studentAddResult(\''+item.id +'\')">Add Result </button>' :`<button class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#student_edit_result_modal" onclick="studentResultEdit('${item.id}')">Edit_Mark</button>`}
        
        
    </td>
    <td>
        <i class="fa-regular fa-eye btn btn-primary" data-bs-target="#student_singe_view" data-bs-toggle="modal" onclick="singleStudentView('${item.roll}')"></i>
        <i class="fas fa-edit btn btn-warning" data-bs-target="#student_edit_modal" data-bs-toggle="modal" onclick="studentDataEdit('${item.id}')"></i>
        <i class="fas fa-trash btn btn-danger" onclick="studentDataDelete('${item.roll}')"></i>
    </td>
    </tr>`
    })

    student_list.innerHTML = content ;

}


showStudentData()



// create student data

new_student_data.onsubmit = (e) => {

    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data);

    console.log(data);
    const {photo, name , roll , reg} = data

    if( !photo || !name || !roll || !reg){
        
        msg.innerHTML = createAlert('All filds are requird!')

    } else{

        let oldStudentData = getLsData('student_data')
       
        if(oldStudentData.some((item) => item.roll == data.roll)){
            return msg.innerHTML = createAlert('roll all rady exgist', 'warning')
            
        }
        if(oldStudentData.some((item) => item.reg == data.reg)){
            return msg.innerHTML = createAlert('reg all rady exgist', 'info')
            
        }

        msg.innerHTML = createAlert('Data_stable', 'success')
        createLsData('student_data', {...data, id : generateRandomId(), result :null})
        e.target.reset()
        showStudentData()
       
    }

   

}


// delete student data

const studentDataDelete = (roll) => {
    let oldStudentData = getLsData('student_data')

    let ubdateStudentData = oldStudentData.filter((data) => data.roll != roll)


    ubdateLsData('student_data', ubdateStudentData) 
    showStudentData()  
}


// singe data view

const singleStudentView = (roll) => {

    let allStudentData = getLsData('student_data');



    let singleStudentData = allStudentData.find((data) => data.roll == roll)

    
  
    single_Student_view.innerHTML = `<div class="header d-flex justify-content-between">
    <h3>Student info</h3>
    <button class="btn-close" data-bs-dismiss="modal"></button>
   </div> <hr>

   <img style="height: 300px; width: 300px; border-radius: 50%; object-fit: cover; display: inline-block; margin: auto;
   border: 4px solid #FFFF ;" src="${singleStudentData.photo}" alt="">
  
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
            <td>${singleStudentData.id}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Student Name</td>
            <td>${singleStudentData.name}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Roll Number</td>
            <td>${singleStudentData.roll}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Reg Number</td>
            <td>${singleStudentData.reg}</td>
        </tr>
    </tbody>
  </table>
`

    

}

// student data edit fucntion
const studentDataEdit = (id) => {

    let oldStudentData = getLsData('student_data')

  const editData = oldStudentData.find((data) => data.id == id)



   student_data_edit.querySelector('input[name=name]').value = editData.name
   student_data_edit.querySelector('input[name=photo]').value = editData.photo
   student_data_edit.querySelector('input[name=roll]').value = editData.roll
   student_data_edit.querySelector('input[name=reg]').value = editData.reg
   student_data_edit.querySelector('input[name=id]').value = editData.id
   student_data_edit.querySelector('img#prevPhoto').setAttribute('src', editData.photo)
}

// student data edit evant fire

student_data_edit.onsubmit = (e) => {
    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data);


    let oldStudentData = getLsData('student_data')

    console.log(oldStudentData[oldStudentData.findIndex((item) => item.id == data.id)]);

   oldStudentData[oldStudentData.findIndex((item) => item.id == data.id)] = {
    ...oldStudentData[oldStudentData.findIndex((item) => item.id == data.id)],
    ...data
   }

  ubdateLsData('student_data', oldStudentData)
    showStudentData()
}

// student result add founction

const studentAddResult = (id) => {
    
    const oldStudentData = getLsData('student_data')

    const studentresultAddData = oldStudentData.find((data) => data.id == id)

    student_result_add.querySelector('input[name=id]').value = studentresultAddData.id

}

// stuent result edit founction
const studentResultEdit = (id) => {
    
    // get local storage data

    const oldStudentData = getLsData('student_data')

    const studentResultSingleEdit = oldStudentData.find((data) => data.id == id);

    student_edit_result_form.querySelector('input[name=bangla]').value = studentResultSingleEdit.result.bangla
    student_edit_result_form.querySelector('input[name=english]').value = studentResultSingleEdit.result.english
    student_edit_result_form.querySelector('input[name=math]').value = studentResultSingleEdit.result.math
    student_edit_result_form.querySelector('input[name=scince]').value = studentResultSingleEdit.result.scince
    student_edit_result_form.querySelector('input[name=socialScince]').value = studentResultSingleEdit.result.socialScince
    student_edit_result_form.querySelector('input[name=religion]').value = studentResultSingleEdit.result.religion
    student_edit_result_form.querySelector('input[name=id]').value = studentResultSingleEdit.id

 
    

}

student_edit_result_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data);

    // get local storage all data
    const oldStudentData = getLsData('student_data')

    oldStudentData[oldStudentData.findIndex((item) => item.id == data.id )] = {
        ...oldStudentData[oldStudentData.findIndex((item) => item.id === data.id )],
       result : data
    }

    // ubdata local storage data

    ubdateLsData('student_data',oldStudentData)
    
    showStudentData()
    
    
}


student_result_add.onsubmit = (e) => {
    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    const oldStudentData = getLsData('student_data')

   oldStudentData[ oldStudentData.findIndex((item) => item.id == data.id )] = {
    ... oldStudentData[ oldStudentData.findIndex((item) => item.id == data.id )],
    result : data
    
   }

   ubdateLsData('student_data', oldStudentData)
   showStudentData()

   e.target.reset()
  
}