 console.log("I like pizza, it is a great way to start my day " )
console.log("My first JavaScript. Hello world!");

// window.alert("For security reasons, please accept cookies before proceeding.")

//-------- HOW TO DECLARE AND ASSIGN  A VARIABLE ------//
// let age; (this is best for user input, only declare, dont assign)
// age = 21;
let age = 21; //21 is a number data type
// age = age + 1;
age++;

let firstName = "Blossom"; //string data type
let secondName = 'Ezeokeke';
// let secondName = 'Ezeokeke ' + " Hadiza " + "Simi";
var student = "True"; //boolean true or false 

console.log(age);
console.log(firstName);
console.log(secondName);
console.log(student);

//--- MAKING THESE INPUTS INTERACTIVE ---//
console.log("Hello", firstName);
console.log("Your surname is", secondName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName + "<hr> " + firstName;
document.getElementById("p2").innerHTML = "<h1>" + Your second name is " + secondName + "&nbsp" + firstName;
document.getElementById("p3").innerHTML;





