/*math object
integers - whole numbers 
floats - decimals
*/

// var wha = .1 * .2;
// //.020000004
// var rounded = Math.round(0.00000001);
// //.49 && below rounds down
// //.5 && up rounds up

// //math.ceil();
// var roundedUp = Math.cell(0.00000001);
// console.log(rounded, roundedUp);

// //math.floor()
// var roundedDown = Math.floor(0.9999);


// var pi = Math.PI;

// //math.pow()
// console.log(Math.pow(8,2));

// //math.sqrt();
// console.log(Math.sqrt(64));

// //math.random()
// console.log(Math.random());

// console.log('round:'+rounded, '.ceil():'+roundedUp, '.floor();'+roundedDown, '.PI():'+pi);

//random number generator

// var rand = Math.random();
// rand = (rand * 11);
// console.log (rand);

// function pickANUM(){
//     var username = prompt('guess my number betwee 0 and 10');
//     checkNum(userNum);
// }
// pickANUM();

// function pickAnotherNum(){
//     var userNum = prompt('guess again');
//     checkNum(userNum);
// }

// function checkNum(num){
//     if(num < rand){
//         alert(num + 'is too low. Pick again');
//         pickANUM();
//     }else if(num > rand){
//         alert(num + 'is too high, Pick again');
//         pickANUM();
//     }else {
//         alert(number + 'is the right number!  You win!');
//     }
// }

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#submit');
var resetBtn = document.querySelector('#reset');
var userPickRes = document.querySelector('p');

submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);


//global variable
var rand;
var attempts = 3;

function getRandNum(){
    
    attempts = 3;
    userPickRes.innerHTML = '';
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
}
getRandNum();
//not in right place
//clue: swhere we can get a value we can also set a value
function getUserPick(){
    attempts = attempts -1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
    
}

function checkUserPick(x){
    if(attempts > 0){
        if(x < rand){
            printUserRes(x + ' is too low, pick again');
        }else if (x > rand){
            printUserRes(x + ' is too high, pick again');
        }else if (x == rand){
            printUserRes( x + ' is the right number, you win!');
        }
        else{
        printUserRes('Wrong anwser!');
        }
    }else {
        printUserRes('Game over');
    }
}

function printUserRes(userRes){
   userPickRes.innerHTML = userRes;
   console.log(userRes);
}

//add another button that will run a functin that will reset random number

//on load, pick a new random number after
//number has been picked run a function
//that sets the background color
//tip: hsl(x, 50%, 50%)
//bonus: reset the color when the user resets the game
var randColor;

function getRand1color(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor + ', 50%, 50%)';
}
getRand1color();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){
    
    var width = Math.round((e.x/window.innerWidth)*100);
    var height = Math.round((e.y/window.innerHeight)*100);
    // document.body.style.backgroundColor = 'hsl(' + randColor + ',' +width +'%,' + height +'%)';
    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;

});

