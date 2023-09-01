
const student_search_result_form = document.getElementById('student_search_result_form')
const result_msg = document.querySelector('.result_msg');
const lodar_img = document.querySelector('.lodar_img');
const student_result_shet_aiya = document.querySelector('#student_result_shet_aiya');





student_search_result_form.onsubmit =(e) => {
    e.preventDefault()

    lodar_img.setAttribute('class', 'd-block')
    // get form value
    const form_data = new FormData(e.target)
    const data = Object.fromEntries(form_data)

    
    // form condition
    if(!data.roll || !data.reg){
        lodar_img.setAttribute('class', 'd-none')
        result_msg.innerHTML = createAlert('All Filds are requird !', 'danger')

    } else{

        const oldStudentData = getLsData('student_data')

        const searchstudent = oldStudentData.find((item) => item.roll == data.roll && item.reg == data.reg)

       if(!searchstudent){
        e.target.reset()
        setTimeout(() => {
            lodar_img.setAttribute('class', 'd-none')
            student_result_shet_aiya.innerHTML = `<h2 style="color:red;text-align: center; ">Student Now Found !🙂</h2>`
        }, 2000);

       } else {
        student_result_shet_aiya.innerHTML =`<h2 style="color:red;"></h2>`
        setTimeout(() => {
            lodar_img.setAttribute('class', 'd-none')
            student_result_shet_aiya.innerHTML = `   <div class="student_result_shet">
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
                            <td>${searchstudent.roll}</td>
                            <td>Name</td>
                            <td>${searchstudent.name}</td>
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
                            ${fainalResult({
                                bangla : searchstudent.result.bangla,
                                english : searchstudent.result.english,
                                math : searchstudent.result.math,
                                scince : searchstudent.result.scince,
                                socialScince : searchstudent.result.socialScince,
                                religion : searchstudent.result.religion,
                            }).results == "F" ? `<td style = "color:#FFFF; background-color: red;">Faild</td>` : `<td style = "color:#FFFF; background-color: green;";>Passed</td>`}
                            
                            <td>Institute</td>
                            <td>Sorobindu larning webpage</td>
                        </tr>
                        <tr style = "vertical-align: middle;">
                           <td>Gpa</td>
                           <td>3.50</td>
                           <td>Student Photo</td>
                           <td ><img  style="height: 100px; width: 100px;  border-radius: 5px; object-fit: cover;  margin: auto;" src="${searchstudent.photo}" alt=""></td>
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
                            <td>${searchstudent.result.bangla}</td>
                            <td>${getGpaGrade(searchstudent.result.bangla).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.bangla).grade}</td>
                            <td  rowspan="6"> = ${fainalResult({
                                bangla : searchstudent.result.bangla,
                                english : searchstudent.result.english,
                                math : searchstudent.result.math,
                                scince : searchstudent.result.scince,
                                socialScince : searchstudent.result.socialScince,
                                religion : searchstudent.result.religion,
                            }).cgpa.toFixed(2)}</td>
                            <td rowspan="6"> = ${fainalResult({
                                bangla : searchstudent.result.bangla,
                                english : searchstudent.result.english,
                                math : searchstudent.result.math,
                                scince : searchstudent.result.scince,
                                socialScince : searchstudent.result.socialScince,
                                religion : searchstudent.result.religion,
                            }).results}</td>
                        </tr>
                        <tr>
                            <td>222</td>
                            <td>English</td>
                            <td>${searchstudent.result.english}</td>
                            <td>${getGpaGrade(searchstudent.result.english).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.english).grade}</td>
                        </tr>
                        <tr>
                            <td>333</td>
                            <td>Math</td>
                            <td>${searchstudent.result.math}</td>
                            <td>${getGpaGrade(searchstudent.result.math).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.math).grade}</td>
                        </tr>
                        <tr>
                            <td>444</td>
                            <td>Scince</td>
                            <td>${searchstudent.result.scince}</td>
                            <td>${getGpaGrade(searchstudent.result.scince).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.scince).grade}</td>
                        </tr>
                        <tr>
                            <td>555</td>
                            <td>Socail Scince</td>
                            <td>${searchstudent.result.socialScince}</td>
                            <td>${getGpaGrade(searchstudent.result.socialScince).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.socialScince).grade}</td>
                        </tr>
                        <tr>
                            <td>666</td>
                            <td>Riligion</td>
                            <td>${searchstudent.result.religion}</td>
                            <td>${getGpaGrade(searchstudent.result.religion).gpa}</td>
                            <td>${getGpaGrade(searchstudent.result.religion).grade}</td>
                        </tr>
                    </tbody>
                  </table>
            </div>
        </div>`
        }, 2000);
       }

    }



   

    
   
}