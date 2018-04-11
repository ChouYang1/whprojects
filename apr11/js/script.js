//this - context based.  Look to th left of the dot.

var btns = document.querySelectorAll('button');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        console.log(evt.target);
        console.log(this);
    });
}


window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName  == 'BUTTON'){
    console.log(evt.target);
    console.log(this);
    }
});

var cars =['jeep', 'honda', 'jeep', 'subaru'];
var types = ['string', true, 5, [1,2,3]];
    console.log(types[3][1]);
    //console.log(cars);
    //console.log(types);

//objects

var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop','4wd']
};
console.log(car.trim);

//firstname, lastname, height, hair, hair color, facial hair, facial hair color, age

var chou ={
    firstname:'Chou',
    lastname:'Yang',
    height:'64',
    hair: true,    
    haircolor:'black',
    facialhair: true,
    facialhaircolor: 'black',
    age: '36',
    greeting: function(msg){
        console.log(this.firstname);
        console.log(msg + this.firstname);
    }
};

var types = ['string', true, 5, [1,2,3], chou];
//console.log(types);

//console.log(matt.haircolor);
chou.middlename = 'nmn';
console.log(chou);

chou.middlename = 'none';
console.log(chou);

//chou.greeting("Hey there ");

chou.firstname = "Cris";

chou.greeting("I'm now ");

//constructor object function
function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        console.log(msg + this.firstname);
    };
}

var myDad = new Person('Joe', 'Yang', 67, 'black');
var myMom = new Person("Jal", "Yang", 57, 'black');
var mySister= new Person("Holly", "Yang", 30, 'black');

mySister.greeting("Hello ");

console.log(myDad.eyecolor);
console.log(myMom.eyecolor);

//username email password

var form = document.querySelector('form');
console.log(form.elements.value);
var users = [];
var user = 0;


function Useracct(username, email, password){
    this.username = name;
    this.email = email;
    this.password = password;
    // this.gretting = function(msg){
    //     console.log(msg + this.username);
    // };
}
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(
        new Useracct(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value
        )
    );
    //user++;
    // for(var i = 0; i < form.elements.length -1; i++){
    //     console.log(form.elements[i].value);
    console.log(users);

});




