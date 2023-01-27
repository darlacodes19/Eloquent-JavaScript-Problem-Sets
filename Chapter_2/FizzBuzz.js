//TASK- Wtie a program that uses console.log to print all the numbers from 1 to 100, with two exceptions
    //For numbers divisible by 3, print fizz
    //for numbers divisible by 5 and not 3, print buzz 

// MY SOLUTION
    // for(let i=1; i <=100; i++){


    //     if(i%3 ==0 && i%5==0){
    //         console.log("FizzBuzz")
    //     } else if(i % 3 == 0) {
    //         console.log("Fizz")
    //     } else if(i%5 == 0) {
    //         console.log("Buzz")
    //     }
    //     else {
    //         console.log(i)
    //     }
        
    // }



//TEXTBOOOK SOLUTION

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
