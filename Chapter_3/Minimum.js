//Write a function min that takes two arguments and returns their minimuum 

//MY SOLUTION 
function min( num1 , num2) {

 return num1 > num2 ? num2 : num1

}

//TEXTBOOK SOLUTION

function min(a, b) {
    if (a < b)
      return a;
    else
      return b;
  }

console.log(min(5,3))