
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
            return true;
        }else {
            status.innerHTML += " > Loser, game over.";
            addEventListener("click", reload());
        }
    }


function cheatcode() {
    var code = prompt("Enter cheat code");
    var clue = 44;
    console.log(code);
    if(code == clue){
        alert("You are the champion cheater! Claim your LVL 1 prize at Geekwise Academy.  LVL up skip stage 1.");
        return(true);
        }else
            alert("Wrong, Proceed to dice rolling!");
            addEventListener("click", rolldice());
                console.log(dicetotal);
               
            
            
        }

function unlock2(){
function cheatcode1() {
    var code1 = prompt("Please enter cheat code");
    var clue1 = '127.0.0.1';
    if(code1 == clue1){
        alert("You are the champion cheater! Claim your LVL 2 prize at Geekwise Academy.  You are now the Geekwise Master!  You can now add your Stage 3 code.");

    }else {
            alert("Wrong, Proceed to game. ");
            
        }
}
}
function unlock(){
    if(false)
    rolldice();


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

