function cheatcode() {
    var code = prompt("Please enter cheat code");
    var clue = 44;
    if(code == clue){
        alert("You are the champion cheater! Claim your LVL 1 prize at Geekwise Academy.  LVL up skip stage 1.");

    }else {
            alert("Wrong, Proceed to dice rolling!");
        }
}

function cheatcode1() {
    var code = prompt("Please enter cheat code");
    var clue = "127.0.0.1";
    if(code == clue){
        alert("You are the champion cheater! Claim your LVL 2 prize at Geekwise Academy.  LVL up skip stage 2.");

    }else {
            alert("Wrong, Proceed ");
        }
}


function rolldice(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    //var odd = [3,5,7,9,11];
    //var even =[2,4,6,8,10,12];
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
        }else {
            status.innerHTML += " > Loser, game over.";
        }
    }
    //}else if(dicetotal == even){
    //     status.innerHTML += " You win, lvl up!";
        
    // }else {
    //     status.innerHTML += " You lose, game over.";
        
    // }
    
function lvl2(){

}

