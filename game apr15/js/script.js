function cheatcode() {
    var code = prompt("Please enter cheat code");
    var clue = 44;
    if(code == clue){
         //document.getElementById(clue).innerHTML = "You are the champion cheater!  Please claim prize at Geekwise Academy!";
        alert("You are the champion cheater! LVL up skip stage 1.");
        }else {
            alert("Wrong, Proceed to dice rolling!");
        }
}


// document.getElementById = 
function rolldice(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    //var odd = [3,5,7,9,11]
    var even =[2,4,6,8,10,12]
    var status = document.getElementById("status");
    var dice01 = Math.floor(Math.random() * 6) + 1;
    var dice02 = Math.floor(Math.random() * 6) + 1;
    var dicetotal = dice01 + dice02;
    dice1.innerHTML = dice01;
    dice2.innerHTML = dice02;
    status.innerHTML = "You rolled "+dicetotal+".";
    if(dice01 == dice02){
        status.innerHTML += " Winning! Doubles!  You get a free roll!";
    }else if(dicetotal == even){
        status.innerHTML += " You win, lvl up!";
        //console.log(dicetotal);
    }else {
        status.innerHTML += " You lose, game over.";
        //console.log(dicetotal);
    }
}


