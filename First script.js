   // console.log("My first JavaScript. Hello world!");

   // window.alert("For security reasons, please accept cookies before proceeding.")

   //-------- HOW TO DECLARE AND ASSIGN  A VARIABLE ------//
   // let age; (this is best for user input, only declare, don't assign)
   // age = 21;
   // let age = 21; //21 is a number data type
   // age = age + 1;
   // age++;

   // let firstName = "Blossom"; //string data type
   // let secondName = 'Ezeokeke';
   // let secondName = 'Ezeokeke ' + " Hadiza " + "Simi";
   // var student = "True"; //boolean true or false 

   // console.log(age);
   // console.log(firstName);
   // console.log(secondName);
   // console.log(student);

   //--- INPUTS FOR CONSOLE ONLY ---//
   // console.log("Hello", firstName);
   // console.log("Your surname is", secondName);
   // console.log("You are", age, "years old");
   // console.log("Enrolled:", student);

   //---- LINK TO INDEX.HTML (INPUT FOR PAGE,shows on main page) ----//
   // document.getElementById("p1").innerHTML = "Hello " + firstName + "<hr> " + firstName + "<hr>";
   // document.getElementById("p2").innerHTML = "<h1>" + "Your second name is " + secondName + "&nbsp" + firstName + "</h1>";
   // document.getElementById("p3").innerHTML = "You have just turned " + age + "<img src="./first image.jpg" alt="" > ";

 //---- CONTACTS PAGE ----//
// let firstName = "Stephen";
// let state = "Maiduguri";
// console.log("Hello", firstName);
// console.log("You live in", state);
// document.getElementById("contacts").innerHTML = "Hello " + firstName + " you are welcome to " + state;

//----LINK TO ABOUT.HTML ---//
// let firstName = "Laila";
// let state = "Abia";
// console.log("Hello", firstName);
// console.log("You live in", state);
// document.getElementById("about").innerHTML = "Hello " + firstName + ", I am ready!";

   //---------- ARITHMETIC EXPRESSIONS -----------//
   // let students = 20;

   //---- USING OPERATORS(+)-----//
   //  students = students + 1; 
   //  students += 1;
   // students++;

   //---- USING OPERATORS(-)-----//
   // students = students - 1; 
   // students -= 1;
   // students--;

   //---- USING OPERATORS(*)-----//
   // students = students * 2; 
   //  students *= 2;

   //---- USING OPERATORS(%)-----//
   // students = students % 2; 
   //  students %= 2;

   // console.log("There are", students, "students in my class");


//----- CONCAT OF STRINGS ----//
// let x = "John " + "Doe";
// let y = 5 + 5 + 5;
// document.getElementById("demo").innerHTML = x + " is " + y + " years old";
// console.log("Hello", x, "you are", y, "years old.");

// ---- EXPONENTIATION/EXPONENTS----//
// let x = 5 ** 2;
// document.getElementById("p4").innerHTML = x;
// console.log(x);

//---------------------//
// let x = Math.pow(5,3);
// document.getElementById("p4").innerHTML = x;
// console.log(x);

//---------------------//

// let x = "John";
// let y = "Doe";
// let z = x + y;
// document.getElementById("p4").innerHTML = x  + "&nbsp" + y + " you are welcome!."
// console.log(x , y, "you are welcome!")

//---------------------//
let username;

document.getElementById("myButton").onclick = function(){ 
username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myLabel").innerHTML = "<b> " + "Hello " + username + "</b>";
}


