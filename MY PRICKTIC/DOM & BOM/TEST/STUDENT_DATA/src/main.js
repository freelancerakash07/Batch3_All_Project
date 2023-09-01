
const add_new_student_data_form = document.querySelector('#add_new_student_data_form');
const msg = document.querySelector('.msg');
const student_show_list = document.querySelector('#student_show_list');
const student_data_edit_form = document.querySelector('#student_data_edit_form');
const singlePreview = document.querySelector('#singlePreview');
const student_add_result_form = document.querySelector('#student_add_result_form');
const student_edit_result_form = document.querySelector('#student_edit_result_form');
const addrestutmsg = document.querySelector('.addrestutmsg');





const showAllStudent = () => {

    // get  local storage data\
    const oldStudent = getLsData('student_data')

    let content = '' ;

    oldStudent.map((data, index) => {
        content += `    <tr class="align-middle">
        <td>${index + 1}</td>
    <td>
        <img style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" src="${data.photo}" alt="">
    </td>
    <td>${data.name}</td>
    <td>${data.roll}</td>
    <td>${data.reg}</td>
    <td>
        ${data.result == null ? `<button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#student_add_result" onclick="studentAddResult('${data.id}')">Add Result</button>` : ` <button class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#student_edit_result" onclick="studentEditResult('${data.id}')">Edit Result</button>` }

        
       
    </td>
    <td>
        <i class="fa-regular fa-eye btn btn-primary" data-bs-target="#student_singe_view" data-bs-toggle="modal" onclick="studentSingelPev('${data.id}')"></i>
        <i class="fas fa-edit btn btn-warning" data-bs-toggle="modal" data-bs-target="#student_edit_data" onclick="studentDataEdit('${data.id}')"></i>
        <i class="fas fa-trash btn btn-danger" onclick = "studentDataDelete('${data.id}')"></i>
    </td>
    </tr>`
    })
   
    student_show_list.innerHTML = content ;


}


showAllStudent()

// student result add function

const studentAddResult = (id) => {
    
    // get ls data

    const oldStudent = getLsData('student_data')

    const  addResultSingleStudent = oldStudent.find((data) => data.id === id)

    student_add_result_form.querySelector('input[name=id]').value = addResultSingleStudent.id

}

// student result form evan fire
student_add_result_form.onsubmit = (e) => {

    e.preventDefault()

    // get form data 
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data)

    console.log(data);

    if(!data.bangla || !data.english || !data.math || !data.scince || !data.socialScince || !data.religion ){

       addrestutmsg.innerHTML = createAlert('all fildes are requird ! 😡', 'danger')
        return
    } 

    // get ls data
    const oldStudent = getLsData('student_data')

    oldStudent[oldStudent.findIndex((item) => item.id === data.id)] = {
        ...oldStudent[oldStudent.findIndex((item) => item.id === data.id)],
         result : data
    }

    ubdateLsData('student_data', oldStudent)

    showAllStudent()
}

// student edit result function
const studentEditResult = (id) => {

    // get ls data
    const oldStudent = getLsData('student_data')

    const studentEditResultSingle = oldStudent.find((data) => data.id === id)

    student_edit_result_form.querySelector('input[name=bangla]').value = studentEditResultSingle.result.bangla
    student_edit_result_form.querySelector('input[name=english]').value = studentEditResultSingle.result.english
    student_edit_result_form.querySelector('input[name=math]').value = studentEditResultSingle.result.math
    student_edit_result_form.querySelector('input[name=scince]').value = studentEditResultSingle.result.scince
    student_edit_result_form.querySelector('input[name=socialScince]').value = studentEditResultSingle.result.socialScince
    student_edit_result_form.querySelector('input[name=religion]').value = studentEditResultSingle.result.religion
    student_edit_result_form.querySelector('input[name=id]').value = studentEditResultSingle.result.id
   
}

// student edit result evan fire
student_edit_result_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    // get ls data
    const oldStudent = getLsData('student_data');
    
    oldStudent[oldStudent.findIndex((item) => item.id === data.id)] ={
        ...oldStudent[oldStudent.findIndex((item) => item.id === data.id)],
        result: data
    }


    ubdateLsData('student_data', oldStudent)
    showAllStudent()


}


// student single data delete
const studentDataDelete = (id) => {

    // old local storage data
    const oldStudent = getLsData('student_data')

    let ubdataStudentData = oldStudent.filter((data) => data.id !== id);

    ubdateLsData('student_data', ubdataStudentData)

    showAllStudent()

}


// student single data edit
const studentDataEdit = (id) => {

    // get local storage data

    const oldStudent = getLsData('student_data');

    let studentSingleEdit = oldStudent.find((data) => data.id == id)

    student_data_edit_form.querySelector('input[name=name]').value = studentSingleEdit.name
    student_data_edit_form.querySelector('input[name=photo]').value = studentSingleEdit.photo
    student_data_edit_form.querySelector('input[name=roll]').value = studentSingleEdit.roll
    student_data_edit_form.querySelector('input[name=reg]').value = studentSingleEdit.reg
    student_data_edit_form.querySelector('input[name=id]').value = studentSingleEdit.id
    student_data_edit_form.querySelector('img.studeneditprev').setAttribute('src',studentSingleEdit.photo)
}


// studnet sinlge data edit evan fire
student_data_edit_form.onsubmit = (e) => {
    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    // get ls data
    const oldStudent = getLsData('student_data')

    oldStudent[oldStudent.findIndex((item) => item.id == data.id)] = {
        ...oldStudent[oldStudent.findIndex((item) => item.id == data.id)],
        ...data
    }

    ubdateLsData('student_data', oldStudent)

    showAllStudent()
    
}

// student single data preview
const studentSingelPev = (id) => {
    
    // get ls data
    const oldStudent = getLsData('student_data')

    const singeviewData = oldStudent.find((data) => data.id === id)

    singlePreview.innerHTML = `<img style="height: 200px; width: 200px; border-radius: 50%; object-fit: cover;" src="${singeviewData.photo}" alt="">
    <table class="table table-striped my-3">
        <tbody>
            <tr>
               <td>#</td>
               <td>taile</td>
               <td>taile info</td>
            </tr>
            <tr>
                <td>1</td>
                <td>id</td>
                <td>${singeviewData.id}</td>
            </tr>
           <tr>
            <td>2</td>
            <td>Name</td>
            <td>${singeviewData.name}</td>
           </tr>
           <tr>
            <td>3</td>
            <td>Roll</td>
            <td>${singeviewData.roll}</td>
           </tr>
           <tr>
            <td>4</td>
            <td>Reg</td>
            <td>${singeviewData.reg}</td>
           </tr>
        </tbody>
    </table>` 

    

}



// add_new_student_data_form evan fire

add_new_student_data_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data 
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data);

    const {name, photo, roll, reg} = data 

    if( !name || !photo || !roll || !reg) {

        msg.innerHTML = createAlert('all filds are requred !', 'danger')

    } else{

        
        const oldStudent = getLsData('student_data')

        if(oldStudent.find((data) => data.reg == reg && data.roll == roll) ) {
            
            msg.innerHTML = createAlert('roll and reg axits', 'warning')
            return
        }

        if(oldStudent.find((data) => data.roll == roll) ) {
            
            msg.innerHTML = createAlert('roll axits', 'info')
            return
        }

        if(oldStudent.find((data) => data.reg == reg) ) {
            
            msg.innerHTML = createAlert('reg axits', 'warning')
            return
        }

       


        msg.innerHTML = createAlert('Data Stable🥰', 'success');

        createLsData('student_data', {...data , id : generateRandomId() , time : new Date(), result : null })
        showAllStudent()
        e.target.reset()
    }

}