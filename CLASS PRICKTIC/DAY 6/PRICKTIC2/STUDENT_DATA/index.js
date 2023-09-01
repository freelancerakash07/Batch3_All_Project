const StudentData = [
    {
        name : "Akash Shikder",
        age  : 18,
        location : "Mirpur",
        Skil : "JavaScript",
        gender : "Male",
        isMarrid : false,
        regult : {
            ban : 70,
            eng : 80,
            math : 88,
            rel  : 66,
            s    : 55,
            ss   : 80
        },
        movie : {
            hollywood  : [ "The Shawshank Redemption ", "The Godfather", " The Dark Knight", "The Godfather Part"],
            bollywood : [ "Baahubali " , "The C", "K.G.F Chapter 2", "War"],
            tollywood : [ "Kancharapalem", "Mayabazar", "Sita Ramam", " Nuvvu Naaku "],
            

        }
    },
    {
        name : "Akash Shikder",
        age  : 18,
        location : "Mirpur",
        Skil : "JavaScript",
        gender : "Male",
        isMarrid : false,
        regult : {
            ban : 70,
            eng : 80,
            math : 88,
            rel  : 66,
            s    : 55,
            ss   : 80
        },
        movie : {
            hollywood  : [ "The Shawshank Redemption ", "The Godfather", " The Dark Knight", "The Godfather Part"],
            bollywood : [ "Baahubali " , "The C", "K.G.F Chapter 2", "War"],
            tollywood : [ "Kancharapalem", "Mayabazar", "Sita Ramam", " Nuvvu Naaku "],
            

        }
    },
    {
        name : "Akash Shikder",
        age  : 18,
        location : "Mirpur",
        Skil : "JavaScript",
        gender : "Male",
        isMarrid : false,
        regult : {
            ban : 70,
            eng : 80,
            math : 88,
            rel  : 66,
            s    : 55,
            ss   : 80
        },
        movie : {
            hollywood  : [ "The Shawshank Redemption ", "The Godfather", " The Dark Knight", "The Godfather Part"],
            bollywood : [ "Baahubali " , "The C", "K.G.F Chapter 2", "War"],
            tollywood : [ "Kancharapalem", "Mayabazar", "Sita Ramam", " Nuvvu Naaku "],
            

        }
    }
]



const getGpa = ( mark ) => {

    let gpa ;
    let grade;


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

    } else if ( mark >= 70 && mark < 80 ){

        gpa = 4 
        grade = 'A'

    } else if ( mark >= 80 && mark <= 100){

        gpa = 5 
        grade = 'A+'

    } else {
        gpa = "Invalid"
        grade = "Invalid"
    }


    return  {
        gpa : gpa,
        grade : grade
    }


}






StudentData.map( (item) => {

    console.log(`
    
    student information
----------------------------    

       student name : ${item.name}
       student age  : ${item.age}
       student location : ${item.location}
       student Skil : ${item.Skil}
       student gender : ${item.gender}
       student isMarrid status : ${item.isMarrid}




       Subject Name                   Mark                       Gap                           Grade
     ----------------              ---------                  ---------                     ------------
        Bangla ---------------- ${item.regult.ban} -------- ${getGpa(item.regult.ban).gpa}   ${getGpa(item.regult.ban).grade}
        English --------------- ${item.regult.eng} -------- ${getGpa(item.regult.eng).gpa}   ${getGpa(item.regult.eng).grade}
        Math ------------------ ${item.regult.math} ------- ${getGpa(item.regult.math).gpa}  ${getGpa(item.regult.math).grade}
        Religion -------------- ${item.regult.rel} -------- ${getGpa(item.regult.rel).gpa}   ${getGpa(item.regult.rel).grade}
        Scince ---------------- ${item.regult.s} ---------- ${getGpa(item.regult.s).gpa}     ${getGpa(item.regult.s).grade}
        Social Scince --------- ${item.regult.ss} --------- ${getGpa(item.regult.ss).gpa}    ${getGpa(item.regult.ss).grade}

======================================================================================================================================


      

    `);

})







