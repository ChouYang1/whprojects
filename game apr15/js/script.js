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
    }
}