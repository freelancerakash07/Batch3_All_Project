

const developer  = [
    {
        name : "Md Akash Shikder",
        age  : 16,
        logcation : "Mirpur",
        movies : ['Avatar', 'Hacking', 'Who Am', 'Wargames '],
        edu : {
            jsc : 3.5,
            ssc : 4,
            hsc : 5

        },
        food : ['haji biriyani', 'nanna biriyani', 'sultal dain'],
        mark : 55
        
    },
    {
        name : "Md Akash Shikder",
        age  : 16,
        logcation : "Mirpur",
        movies : ['Avatar', 'Hacking', 'Who Am', 'Wargames '],
        edu : {
            jsc : 3.5,
            ssc : 4,
            hsc : 5

        },
        food : ['haji biriyani', 'nanna biriyani', 'sultal dain'],
        mark : 75
        
    },
    {
        name : "Md Akash Shikder",
        age  : 16,
        logcation : "Mirpur",
        movies : ['Avatar', 'Hacking', 'Who Am', 'Wargames '],
        edu : {
            jsc : 3.5,
            ssc : 4,
            hsc : 5

        },
        food : ['haji biriyani', 'nanna biriyani', 'sultal dain'],
        mark : 85
        
    },
    {
        name : "Md Akash Shikder",
        age  : 16,
        logcation : "Mirpur",
        movies : ['Avatar', 'Hacking', 'Who Am', 'Wargames '],
        edu : {
            jsc : 3.5,
            ssc : 4,
            hsc : 5

        },
        food : ['haji biriyani', 'nanna biriyani', 'sultal dain'],
        mark : 99
        
    }
]




const gradeGpa = (mark) => {
    
    let gpa ;
    let grade  ;

    if(mark >= 0 && mark < 33){
        gpa = 0
        grade = 0

    } else if(mark >= 33 && mark < 40){
        gpa = 1
        grade = 1

    } else if (mark >= 40 && mark < 50){
        gpa = 2
        grade = 2

    } else if (mark >= 50 && mark < 60){
        gpa = 3 
        grade = 3

    } else if (mark >= 60 && mark < 70){
        gpa = 3.5
        grade = 3.5

    } else if (mark >= 70 && mark < 80){
        gpa = 4
        grade = 4

    } else if (mark >= 80 && mark <= 100){
        gpa = 5 
        grade = 5
    }


    return  {
        gpa ,
        grade
    }


}







developer.map((item) => {

    console.log(`
    This mark is gpa ${gradeGpa(item.mark).gpa}
    `);
} )