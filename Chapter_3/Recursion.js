//Zero is even 
//One is odd
//For any number N, its evenness is the same as N - 2 

// P - a number
// R - a boolean value
// E
// P

//MY SOLUTION

function isEven (number) {

    //Base case

    if(number === 0) return true
    if(number === 1) return false

    //use terinary to account for maximum call stack exceeded error 
    //if number is negative, I want to add 2 instead of subtracting 2 

    return number < 0 ?  isEven(number+2) : isEven(number-2)

 }

 console.log(isEven(2))

 

 //TEXBOOK SOLUTION

 function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }
