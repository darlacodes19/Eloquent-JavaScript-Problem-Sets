//Write a looop that makes seven calls to console.log to output the following triangle 


//What I'm thinking: 
    //Initialize an empty variable
    //Cleate a for loop 
    //at each iteration add a # and return that with console.log

//MY SOLUTION
let result = "";

for(let i=0; i<7; i++) {

    result+="#"
    console.log(result)

}


//TEXTBOOK SOLUTION
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);






// console.log("Im connected")