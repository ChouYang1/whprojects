// document.getElementById('btn2').style.color = "red";
// document.getElementById('btn2').style.fontSize = 32px;

/* add js folder and script.js to portfolio projecet
    link to script.js at the bottom of the page before </body>
    In html, add a buttton to index page 
    Write a new  function in the script.js
    On button click, change page background color and text color 
*/

// console.log("Here is my first console message");
// console.info("This is info.");
// console.warn("Danger will Robinson");
// console.error("Uh Uh uh, You didn't say the magic word.");

// alert('Here is my popup.');
//confirm("Did you remember to lock your car?");

//Browser confirm
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);

//Browser prompt
// prompt("What is your name?");
// console.log(userName);

/* Variables, Must start with lowercase
                Must start a letter

*/
var username;
var room1;
var user_name;
var userName;
var theUserFirstNameOnly;

var age = 27;
var decade = 10;
var double = 2;
var divide = 4;
//divide result by 4
var newAge = ((age + decade) * double)/divide;
//pemdas matters

console.log(newAge);

//var stringAge = "27";

//concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");


// alert(`firstName lastName`);

// alert(`${firstName} ${lastname}`);

function getUserVehicle(){
var make = prompt("What is make of vehicle");
var color = prompt("What is the color?");
var year = prompt("What is the year?");

//var result = color + "," year +" "+ make +".";
//alert(result);
alert(`${make} ${color} ${year}`);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");
    document.getElementById('primaryUser').innerHTML = first + " " + last + " " + place;
}

function x(){
    var a = prompt("Who?");
    var b = prompt("What?");
    var c = prompt("When?");
    document.getElementById('x').innerhtml = a + " " + b + " " + c;
}

function y(){
    var a = prompt("Length?");
    var b = prompt("Width?");
    var c = prompt("Height?");
    document.getElementById('y').innerhtml = a + " " + b + ", and" + c;
}

function z(){
    var a = prompt("Distance?");
    var b = prompt("Height above sea lvl?");
    var c = prompt("Area?");
    document.getElementById('z').innerhtml = a + " " + b + ", and" + c;
}


//change background on click
// in style.scss apply to index.html
function toggleColors(){
    document.getElementById('portfolio').style.backgroundImage = "lineargradient(to top, hsl(0, 0%, 9%) 50%, hsla(0, 0%, 1))";
    document.getElementById('portfolio').style.color ='white';
}