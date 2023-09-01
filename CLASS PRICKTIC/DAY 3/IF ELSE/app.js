

const name = prompt(`type your name `)
const mark = prompt(`${name} Type your Mark 📃✏`);


let grade ;
let cgpa ;

if(mark >= 0 && mark < 33){
    grade = "F"
    cgpa  = 0

} else if(mark >= 33 && mark < 40){
    grade = "D"
    cgpa  = 1.0

} else if ( mark >= 40 && mark < 50){
    grade = "C"
    cgpa  = 2.0

} else if ( mark >= 50 && mark < 60){
    grade = "b"
    cgpa  = 3.0

} else if ( mark >= 60 && mark < 70){
    grade = "A-"
    cgpa  = 3.5

} else if ( mark >= 70 && mark < 80){
    grade = "A"
    cgpa  = 4.0

}else if (mark >= 80 && mark <= 100){
    grade = "A+"
    cgpa  = 5.00

} else{
    grade = `Hi ${name} we not found your grade`
    cgpa = `Hi ${name} we not found your cgpa`
}


console.log(`Hi ${name} your grade == ${grade}
 and your cgpa == ${cgpa}`);






