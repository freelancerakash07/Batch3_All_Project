
function GetGpa (mark) {

    let gpa ;

    if(mark >= 0 && mark < 33){
        gpa = 0 ;

    } else if( mark >= 33 && mark < 40) {
        gpa = 1;

    } else if ( mark >= 40 && mark < 50) {
        gpa = 2 ;

    } else if ( mark >= 50 && mark < 60) {
        gpa = 3

    } else if ( mark >= 60 && mark < 70) {
        gpa = 3.5;

    } else if ( mark >= 70 && mark < 80) {
        gpa = 4 ;

    } else if ( mark >= 80 && mark <= 100) {
        gpa = 5;

    } else {
        gpa = invalid
    }

 return gpa 

}


function GetRegult ( ban, eng, math, s, ss, rel) {

    let ban_gpa = GetGpa(ban)
    let eng_gpa = GetGpa(eng)
    let math_gpa = GetGpa(math)
    let s_gpa = GetGpa(s)
    let ss_gpa = GetGpa(ss)
    let rel_gpa = GetGpa(rel)


    if( ban >= 33 && eng >= 33 && math >= 33 && s >= 33 && ss >= 33 && rel >= 33){
        const cgpa = ( ban_gpa + eng_gpa + math_gpa + s_gpa + ss_gpa + rel_gpa ) / 6 ;

    }

return `
 
your bangla mark ${ban} && gpa ${ban_gpa}
your english mark ${eng} && gpa ${eng_gpa}
your Math mark ${math} && gpa ${math}
your sciens mark ${s} && gpa ${s_gpa}
your social sciens mark ${ss} && gpa ${ban_gpa}
your bangla mark ${ban} && gpa ${ban_gpa}

`
   
    
    


}

