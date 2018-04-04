//write function prompt user for full name
//split result into a new array
//pass array into another function
//innerhtml the first item and last time to the page
//consider how to use the .length to get the last item, # of 
//elements in array
//separate functional of two function, pass into another

/*
function getUserName(){
    var username = prompt('What is your full name?').split(" ");
    //var splitUsername = username.split(" ");
    outputUsername(username);
    //console.log(splitUsername);
}

function outputUsername(nameArray){
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // //nameArray['matt', 'higley'].length = 2 - 1
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];

    //console.log(nameArray);
    for(var i = 0; i < nameArray.length; i++);
    if(i == 0 || i == nameArray.lentgh - 1){ //double pipe check statements are true
        console.log("we got the zeroth element!", nameArray[i]);
        document.getElementById('firstname').innerHTML += nameArray[i] + "";
    }
        // else{
        // console.log("not the zeroth")}
    
}
//call function with cmd getusername
getUserName();

ARRAYS EXERCISE
*/

/*car exercise

var cars = ["toyota", "honda", "chevy"];
console.log(cars[1]);//get the 2nd element
console.log(cars.length);//how many elements

cars.push("bmw");//add bmw to array
console.log(cars)

cars.pop();
console.log(cars);

cars.pop();
console.log(cars);

var removedCar = cars.pop();
console.log(cars);
console.log(removedCar);

//unshift method
cars.unshift("mclaren", "bugatti");
console.log(cars);

//shift method
cars.shift();
console.log(cars);

//splice method
cars.splice(1,0,"red","green");
console.log(cars);

cars.splice(1, 1, "grape");
console.log(cars);

//slice method (non-destructive)
cars.slice(4);
var removed = cars.slice(2, 6);
console.log(cars);
console.log(removed);

/*create an array of 5 movies
1.begin array, add die hard
2. remove 3rd and 4th movies, and in their place, put godfather 2
godfather 3
3. add guardians of the galaxy to the end
4. duplicate index 1-3 into a new array
5. remove first movie
6. console the 2nd to last movie

*/

/*movies exercise
var movies = ["Batman", "X-Men", "Deadpool", "Matrix", "Godzilla"];
console.log(movies);//get the 2nd element
console.log(movies.length);//how many elements

movies.push("Die Hard");
console.log(movies);

movies.pop([0]);
console.log(movies);

// var removedMovie = movies.pop([3,4]);
// console.log(movies);
// console.log(removedMovie);
*/

/*
if else
*/
function getUserAge(){
    var userage = parseInt(prompt('how old are you?'));
    //AND &&
    // OR ||
    if(userage < 21){
        console.log('not old enough');
    }else if(userage == 21){
        console.log('good to go');
    }else{
        console.log('plenty old')
    }    
}
getUserAge();

/* Ternary Operator

*/
function getAge(){
    var age = parseInt(prompt('Whats my age again?'));
    (age >= "21") ? console.log('true') : console.log('false');
}
getAge();

/*
write a function and prompt the user telling the user a "story"
asking for 1 of 3 choices
each choice continues to their own function
wash rinse repeat thrice more

simple version-
alerts, prompts, and confirms
if/else if/ else

complex version-
loops
arrays
*/
