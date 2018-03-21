function welcome(){
    var username = prompt("What is your name?");
    document.getElementById('Welcome').innerHTML = username;
}
//popup function page accessed
//welcome();

function fireworks(){
        document.getElementById('h1').style.backgroundImage = "url('/img/giphy.mp4')";
        document.getElementById('h1').style.color = "white";
}

        resizeHeader();
        navColor();
        

function togglecolor(){
   var tcolor = document.body.classList.add('colorize'); //add classname
   element.classList.toggle("mystyle");

}
function toggleclass(){
    var tname = document.body.classList.toggle('colorize'); //toggle class name
    element.classList.toggle("mystyle");

}


