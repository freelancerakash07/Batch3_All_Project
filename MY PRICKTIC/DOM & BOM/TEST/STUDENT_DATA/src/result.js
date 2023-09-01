const student_search_form = document.getElementById('student_search_form');
const search_msg = document.querySelector('.search_msg');
const student_list = document.querySelector('.student_list');





student_search_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data

    const form_data = new FormData(student_search_form)
    const data = Object.fromEntries(form_data)

    
    if(!data.roll || !data.reg) {
       search_msg.innerHTML = createAlert('All Fildes are requird !😡')

    } else{

        // get ls data
        const oldStudent = getLsData('student_data')

         const search_student = oldStudent.find((item) => item.roll == data.roll && item.reg == data.reg);

       if(!search_student){
        
        student_list.innerHTML = `<h2>Student nai😣</h2>`

       } else{
        student_list.innerHTML = ` <div class="main_div">
        <div class="student_result_shet">
            <div style="background-color: #e9e9e9; margin-bottom: 30px;" class="student_result_shet_header d-flex justify-content-between">
                <div class="logo">
                    <img style="height: 150px; width: 150px; margin-right: 10px; border-radius: 50%;
                    object-fit: cover;" src="https://cdn.dribbble.com/users/8686834/screenshots/17554148/media/84310228b0d6f69ea671ade690a2ceca.jpg" alt="">
                </div>
                <div style="background-color: #c0c0d9; padding: 20px ; color: #FFFF; border-radius: 5px;" class="content">
                    <h2>Programing Education</h2>
                    <p> Intermediate and Secondary Education Boards Bangladesh</p>
                </div>
            </div>
            <div class="student_result_table">

                <table class="table table-striped table-bordered">
                    <tbody ">
                        <tr>
                            <td>Roll</td>
                            <td>${search_student.roll}</td>
                            <td>Name</td>
                            <td>${search_student.name}</td>
                        </tr>
                        <tr>
                            <td>Bord</td>
                            <td>Dhaka</td>
                            <td>Fathar's Name</td>
                            <td>Tajel Shikder</td>
                        </tr>
                        <tr>
                            <td>Group</td>
                            <td>Javascript</td>
                            <td>Mothar's Name</td>
                            <td>Rabeka Begum</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Programing</td>
                            <td>Data of Brith's</td>
                            <td>5/5/2005</td>
                        </tr>
                        <tr>
                            <td>Result</td>
                            <td>${fainalResult({bangla : search_student.result.bangla , english : search_student.result.english, math : search_student.result.math, scince : search_student.result.scince , socialScince : search_student.result.socialScince, religion : search_student.result.religion}).results == "F" ?`<td style = "color:#FFFF; background-color: red;">Faild</td>` : `<td style = "color:#FFFF; background-color: green;";>Passed</td>`}</td>
                            
                            <td>Institute</td>
                            <td>Sorobindu larning webpage</td>
                        </tr>
                        <tr style = "vertical-align: middle;">
                           <td>Gpa</td>
                           <td>3.50</td>
                           <td>Student Photo</td>
                           <td ><img  style="height: 100px; width: 100px;  border-radius: 5px; object-fit: cover;  margin: auto;" src="${search_student.photo}" alt=""></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table table-striped table-bordered align-middle">
                    <h2 class="text-center" style="background-color: #c0c0d9; padding: 10px 20px; color: #FFFF; border-radius: 5px; " >sorobindu result sheet</h2>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Subject</th>
                            <th>Mark</th>
                            <th>Gpa</th>
                            <th>Grade</th>
                            <th>Cgpa</th>
                            <th>Fainal Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>111</td>
                            <td>Bangla</td>
                            <td>${search_student.result.bangla}</td>
                            <td>${getGpaGrade(search_student.result.bangla).gpa}</td>
                            <td>${getGpaGrade(search_student.result.bangla).grade}</td>
                            <td  rowspan="6"> = ${fainalResult({bangla : search_student.result.bangla , english : search_student.result.english, math : search_student.result.math, scince : search_student.result.scince , socialScince : search_student.result.socialScince, religion : search_student.result.religion}).cgpa}</td>
                            <td rowspan="6"> = ${fainalResult({bangla : search_student.result.bangla , english : search_student.result.english, math : search_student.result.math, scince : search_student.result.scince , socialScince : search_student.result.socialScince, religion : search_student.result.religion}).results}</td>
                        </tr>
                        <tr>
                            <td>222</td>
                            <td>English</td>
                            <td>${search_student.result.english}</td>
                            <td>${getGpaGrade(search_student.result.english).gpa}</td>
                            <td>${getGpaGrade(search_student.result.english).grade}</td>
                        </tr>
                        <tr>
                            <td>333</td>
                            <td>Math</td>
                            <td>${search_student.result.math}</td>
                            <td>${getGpaGrade(search_student.result.math).gpa}</td>
                            <td>${getGpaGrade(search_student.result.math).grade}</td>
                        </tr>
                        <tr>
                            <td>444</td>
                            <td>Scince</td>
                            <td>${search_student.result.scince}</td>
                            <td>${getGpaGrade(search_student.result.scince).gpa}</td>
                            <td>${getGpaGrade(search_student.result.scince).grade}</td>
                        </tr>
                        <tr>
                            <td>555</td>
                            <td>Socail Scince</td>
                            <td>${search_student.result.socialScince}</td>
                            <td>${getGpaGrade(search_student.result.socialScince).gpa}</td>
                            <td>${getGpaGrade(search_student.result.socialScince).grade}</td>
                        </tr>
                        <tr>
                            <td>666</td>
                            <td>Riligion</td>
                            <td>${search_student.result.religion}</td>
                            <td>${getGpaGrade(search_student.result.religion).gpa}</td>
                            <td>${getGpaGrade(search_student.result.religion).grade}</td>
                        </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </div>`
       }

    }


}