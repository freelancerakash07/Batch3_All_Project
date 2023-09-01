//Create a loop that will rotate from 1000 to 300//


for(let i = 1000 ;  i >= 300 ; i--) {
   console.log(`loop number = ${i}`);
}





// Find the even and odd numbers from 1 and 1000 through for loop

for ( let i = 1 ; i <= 1000 ; i++ ){

    // even numbers
    if(i % 2 == 0){
        console.log(`enen number == ${i}`);
    }

    // odd number
    if( i % 2 == !0 ){
        console.log(`odd number == ${i}`);
    }

}




// Find the number divisible by 7 between 1 and 1000


for( let i = 1 ; i <= 1000 ; i++ ){

    //divisible by 7
    if( i % 7 == 0){
        console.log(`divisibale by 7 == ${i}`);
    }
    
}







//Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4


for( let i = 1 ; i <= 500 ; i++){
    
    //divisible by 3 and 4
    if( i % 3 == 0 && i % 4 == 0){
        console.log(`divisible by 3 and 4 == ${i}`);
    }
}



//Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.


for( let i = 10000 ; i <= 9950 ; i-- ){

    //decrement
    console.log(`decrement operators == ${i}`);
}



for( let i = 50 ; i <= 10050 ; i++ ){
    
    //increment
    console.log(`increment operators == ${i}`);
}





for( let i = 5; i > 10; i++ ){
    console.log(i);
}



// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
 

for( let i = 1 ; i <= 1000 ; i = i+3 ){

    //divisible by 11
    if( i % 11 == 0) break; {
        console.log(`divisible by 11 == ${i}`);
       
    }
}