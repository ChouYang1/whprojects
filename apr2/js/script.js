// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontsize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontsize ='32px';

var pByTagname = document.getElementsByTagName('p');
console.log(pByTagname);
// pByTagname[9].style.color = 'blue';
console.log(pByTagname.length);

//for loop
// |-----------|arguments
// |--------|new variable
// |-----------|number of loops
//                |-|incrementor
for(var i = 0; i < 10; i++){
pByTagname[i].style.color = 'red';
console.log(i);
}

//create a new variable of name
//using length of name
//console each index to the browser

var myName = "Chou"
console.log(myName.length);
for(var i = 0; i < myName.length; i++){
    console.log(i);
    console.log(myName[i]);
}

//create a function that prompts the the user for their name
//create a separate function that loops through each letter logging to the browser

/* function func1(){
    func2(passUsersName){

    }
    function func2(getUsersName){
        console.log(getUsersname);
    }
}
    */
// var uname = prompt("Username");
// for(var i = 0; i < uname.length; i++){
//     console.log(i);
//     console.log(uname[i]);
// }

// function getUsername(){
//     var username = prompt("your name");
//     console.log(username + 'from inside the function');

//     printUsername(username); commentpass in username, argument
// }
// getUsername();
// function printUsername(x){ commentparameter x doesnt care what it is, empty () means not expecting data delivered to function
//     console.log(x);
//     for(var i = 0; i < x.length; i++){
//     console.log(x[i]);
//     }

// }

// 2nd ex start
// function getUserNums(){
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }

// function addUserNums(x, y){
//     alert(parseInt(x) + parseInt(y));

// }
// getUserNums();
// 2nd ex end

//write a function that asks the user for three colors
//write another function that loops thru "arguments" array
//apply each color to corresponding paragraph

/*
['p', 'p', 'p']
['red', 'green', 'blue']

p1.color = red
p2.color = green
p3.color = blue

*/

function getUserColors(){
    var userColors = prompt('pick some colors (comma separated)');
    console.log(userColors);

    var userTrimmedColors = [];
    for(var i = 0; i < userTrimmedColors; i++);
    userTrimmedColors.push(userColors[i].trim());
    assignUserColors(userTrimmedColors);

    // var color1 = prompt('Enter a color');
    // var color2 = prompt('Enter a color');
    // var color3 = prompt('Enter a color');
    // assignUserColors(color1, color2, color3);
}

function assignUserColors(x, y, z){
    for(var i = 0; i < x.length; i++);
    //for(var i = 0; i < arguments.length; i++);
    paragraphs[i].style.color = arguments[i];
    console.log(x, y, z);

}
getUserColors(); //diplays prompt data





