//place all variables with correct targets here//


function fire(){
    var f1 = prompt("What is your name?");
    document.getElementById('h1').innerHTML = f1;
}

function toggleColor() {
    // document.body.classList.add('colorize'); // ADD A CLASSNAME

    document.body.classList.toggle('change'); // TOGGLE A CLASSNAME
}





//place all evenlisteners here


//place all functions here

/*In your html file. 
    -Create 5 buttons.  
    -Each button must have a unique id.
    -Create: 
        -navigation w/ 3 links (add an id to the nav tag)
        -h1 (add an id)
        -p w/ lorem ipsum text (add an id)
        - two a tags (use the text inside the paragraph && add an id to both)
    -Style elements to your liking

*/

/*
In the js file:
    -create 10 variables targeting each of the id'd elements
    -create 5 eventlisteners.  1 for each of the buttons.
    -write 5 function:
        -1 that automatically runs on the page load; change <body> background
            color
        -1 that toggles the navigation from horizontal orientation to vertical
        -1 that prompts the user for their first name and adds that 
            name to the text of the file <h1>
        -1 that doubles the users name font-size and changes that color 
        -1 that changes the text color of either <a> tag


*/
