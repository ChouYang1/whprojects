
function rolldice(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var status = document.getElementById("status");
    var dice01 = Math.floor(Math.random() * 6) + 1;
    var dice02 = Math.floor(Math.random() * 6) + 1;
    var dicetotal = dice01 + dice02;
    dice1.innerHTML = dice01;
    dice2.innerHTML = dice02;
    status.innerHTML = "You rolled "+dicetotal+".";

    if(dice01 == dice02){
    status.innerHTML += " Winning! Doubles!  You get a free roll!";
    }else if(dicetotal < 6){
            status.innerHTML += " < You win, lvl up!";
            console.log(dicetotal);
        }else {
            status.innerHTML += " > Loser, game over.";
            //addEventListener("click", reload());
            console.log(dicetotal);

        }
    }


function cheatcode() {
    var code = prompt("Enter cheat code");
    var clue = 5500;
    console.log(code);
    if(code == clue){
        alert("You are the champion cheater! Claim your LVL 1 prize at Geekwise Academy from Matt Higley!  LVL up skip stage 1.");
        return(true);
        }else
            alert("Wrong, Proceed to dice rolling!");
            //unlock();
            rolldice();
            //return(false);
            
            //addEventListener("click", rolldice());
                
               
            
            
        }

function cheatcode1() {
    var code1 = prompt("Enter cheat code");
    var clue1 = '127.0.0.1';
    if(code1 == clue1){
        alert("You are the champion cheater! Claim your LVL 2 prize at Geekwise Academy!  You are the Geekwise Master!  You can now add your Stage 3 game code.");

    }else {
            alert("Wrong, Proceed to game.");
            
        }
}

// function unlock(){
//     rolldice();
// }

var randnum = Math.random();
randnum = Math.floor(randnum * 11);
console.log(randnum);

var userrandnum = Math.random();
userrandnum = Math.floor(userrandnum * 11);
console.log(userrandnum);

function high(){
    if(userrandnum > randnum){
        //status.innerHTML += "Your nubmer is "+userrandnum+" win, claim LVL 2 price at Geekwise Academy.  You are the Geekwise Master!  You can now add your Stage 3 game code.";
        alert("Your number is "+userrandnum+", higher than "+randnum+" You Win!  You are the Geekwise Master, claim LVL 2 prize at Geekwise Academy!  You can now add your Stage 3 game code.");

    }else {
        //status.innerHTML += " > Loser, game over.";
        alert("Your number is "+userrandnum+", lower than "+randnum+" You lose! Game over!");
    }
    // var randnum = document.getElementById("randnum");
    // var userrandnum = document.getElementById("userrandnum");
    // var status = document.getElementById("status");
    // var randnum1 = Math.floor(randnum * 11);
    // var userrandnum1 = Math.floor(randnum * 11);
    // //var dicetotal = dice01 + dice02;
    // randnum.innerHTML = randnum1;
    // userrandnum.innerHTML = userrandnum1;
    // status.innerHTML = "Your number is "+userrandnum1+".";

    // if(userrandnum > randnum){
    // status.innerHTML += " You win!";
    //     }else {      
    //         status.innerHTML += " > Loser, game over.";
    //         //addEventListener("click", reload());
    //     }
}

function low(){
    if(userrandnum < randnum){
        //status.innerHTML += "Your number is "+userrandnum+" win, claim LVL 2 price at Geekwise Academy.  You are the Geekwise Master!  You can now add your Stage 3 game code.";
        alert("Your number is "+userrandnum+", lower than "+randnum+" You win!  You are the Geekwise Master, claim LVL 2 prize at Geekwise Academy!  You can now add your Stage 3 game code.");

        }else {
        //status.innerHTML += " > Loser, game over.";
        alert("Your number is "+userrandnum+", higher than "+randnum+" You lose! Game over!");
        }

    }


// function (num){
//     if(num < rand){
//         alert(num + ' is too low. Pick again');
//         pickAnotherNum();
//     }else if(num > rand){
//         alert(num + ' is too high. Pick again');
//         pickAnotherNum();
//     }else {
//         alert(num + ' is the right number!! You win!');
//     }
// }

