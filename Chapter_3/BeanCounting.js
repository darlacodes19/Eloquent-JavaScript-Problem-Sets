//getting the nth lcharacter from a string by writing string.charAt(n)
//the returned value will be a string contining only one character
//string.length to get length of string 


function returnCharacter (string , n) {

    return string.charAt(n)
}


// console.log(returnCharacter('hello' , 1))


//Create a function called countBS
//takes a string as only argument
//counts the numbers of uppercase B's
//split string into array
//filter by letter
//create new string that holds that result
//join array
//return length of the new string








//Create a function called countChar 
//Takes two arguments ,first one is the string and the second one indicates the character that is to be counted rewrite count bs to make use of this new function 


function countChar (string , letter) {

    const onlyLetter = string.split('').filter((l) => {return l === letter}).join('')

   return onlyLetter.length 
}

function countBs(string) {

    return countChar(string, 'B')
 }
 

