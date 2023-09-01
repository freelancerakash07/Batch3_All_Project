


function MarigeAgeCalculation  ( name , year, gender) {

let age = 2023 - year ;

let marigeAge ;
let dakname = '' ;

switch (gender) {
    case "Male":
        marigeAge = 21
        dakname = 'vaiyaaa'
        break;

     case "Female":
        marigeAge = 18 
        dakname = "apuuuuuu"  

    default:
        break;
}


if(age >= marigeAge ){
    return `Hi ${name} ${dakname} tomar biyer boyos is oky tumi kano ${ age -marigeAge } bocor dore wait kortaco`

} else {
    return `Hi ${name} ${dakname} tomar akhono biyer boyos hoy nai doya kore tumi akhono ${marigeAge- age} bocor wait koro`
}


}



console.log(MarigeAgeCalculation('akash', 2005, 'Male'));