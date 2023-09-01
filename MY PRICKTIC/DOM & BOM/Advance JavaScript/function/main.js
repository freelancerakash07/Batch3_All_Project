
// const agecal = (a) => (b) => (c) => (d) => {
//     return a + b+ c + d +a
// }



// console.log(agecal(2)(8)(6)(2));




// function agecal (a) {
//     return function(b){
//         return function (c) {
//             return function (d) {
//                 return function (e) {
//                     return a + b + c + d+ e
//                 }
//             }
//         }
//     }
// }


// console.log(agecal(2)(4)(5)(2)(6));



// const agecal = (a , b , test) => {

//     return `${test()} i am ${a+b} years old`
// } 

// const test = () => {
//     return  `Hi i love js`
// }


// console.log(agecal(5, 8, test));



// const test1 = (name) => {
//     return `Hi i am ${name} `
// }

// const test2 = (skil) => {
//     return `i am ${skil} devs`
// }

// const test3 = (age) => {
//     return `i am ${age}years old`
// }

// const agecal = (a, b, test1, test2, test3) => {

//     return `${test1('Akash')} ${test2('Node.js')} ${test3(a+b)}years old`
// }



// console.log(agecal(2,5, test1, test2, test3));

// const age = 15;

// const agecal = new Promise((resolve, reject) => {

//     if(age >= 21){
//         resolve('vai apni biye jonno rady akhon biye korte paren')

//     } else {
//         reject(`vai apner biyer boyos hoy nai apni akhono wait kore`)
//     }

// })


// agecal.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })



console.log('2'  + 5);