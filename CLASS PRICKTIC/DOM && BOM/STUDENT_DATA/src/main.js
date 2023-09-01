

// get html element
const new_student_data = document.querySelector('#new_student_data');
const msg = document.querySelector('.msg');
const student_list = document.querySelector('.student_list');
const single_Student_view = document.querySelector('.single_Student_view');
const edit_ariya = document.querySelector('.edit_ariya');





const showStudentData = () => {

    let data = getLsData('student_data)')

    console.log(data);

    let content = '';

    data.map((item, index) => {
        content += `<tr class="align-middle">
        <td>1</td>
    <td>
        <img style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" src="${item.photo}" alt="">
    </td>
    <td>${item.name}</td>
    <td>${item.roll}</td>
    <td>${item.reg}</td>
    <td>
        <button class="btn btn-info">Add Result</button>
        <button class="btn btn-primary ">view Result</button>
    </td>
    <td>
        <i class="fa-regular fa-eye btn btn-primary" data-bs-target="#student_singe_view" data-bs-toggle="modal" onclick="singleStudentView(${item.roll})"></i>
        <i class="fas fa-edit btn btn-warning" onclick="studentDataEdit(${item.roll})" data-bs-target="#student_post_edit" data-bs-toggle="modal"></i>
        <i class="fas fa-trash btn btn-danger" onclick="studentDataDelete(${item.roll})"></i>
    </td>
    </tr>`
    })

    student_list.innerHTML = content ;

}


showStudentData()




new_student_data.onsubmit = (e) => {

    e.preventDefault()

    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data);

    const {photo, name , roll , reg} = data

    if( !photo || !name || !roll || !reg){
        
        msg.innerHTML = createAlert('All filds are requird!')

    } else{

        msg.innerHTML = createAlert('Data_stable', 'success')
        createLsData('student_data', data)
        e.target.reset()
        showStudentData()
       
    }



}



const studentDataDelete = (roll) => {
    let oldStudentData = getLsData('student_data')

    let ubdateStudentData = oldStudentData.filter((data) => data.roll != roll)


    ubdateLsData('student_data', ubdateStudentData) 
    showStudentData()  
}



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
            <td>154825144</td>
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




const studentDataEdit = (roll) => {
    let allstudent = getLsData('student_data')

    let editDAta = allstudent.find((data) => data.roll == roll)

    edit_ariya.innerHTML = `<form action="" id="student_post_edit">
    <div class="my-3">
        <label for="">Student_Photo</label>
        <input value='${editDAta.photo}' name="photo" type="text" class="form-control">
    </div>
    <div class="my-3">
        <label for="">Student_Name</label>
        <input value='${editDAta.name}' name="name" type="text" class="form-control">
    </div>
    <div class="my-3">
        <label for="">Student_Roll</label>
        <input value='${editDAta.roll}' type="text" class="form-control" name="roll">
    </div>
    <div class="my-3">
        <label for="">Student_Reg</label>
        <input value='${editDAta.reg}' name="reg" type="text" class="form-control">
    </div>
    <div class="my-3">
        
        <input type="submit" class="btn btn-primary">
    </div>
</form>`

}