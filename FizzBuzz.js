// Fizz Buzz
// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3,
//  print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const FizzBuzz = (num)=>{

 for(let i=1; i<=num;i++){
     if ( i%2===0 && i%3===0){                        // check for this condition has to be done first, I know the reason I hope you too!
       console.log("FizzBuzz")
     }
     else if (i%3 === 0){                           // Can be done with the help of ternary operator 
                                                           // but sometimes old looks gold
        console.log("Fizz")
     }
     else if (i%2===0 ) {
        console.log("Buzz")
     }
    else
    console.log(i)
   

}

}
FizzBuzz(8)