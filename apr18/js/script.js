//var paras = document.querySelector('p');
//paras.classlist.contains('classname');

//for(var i = 0; i < paras.length; i++){
   // console.log(paras[i].classlist.contains('paras'));
   
    //if(!paras[i].classlist.contains('paras')){
    //console.log("that's true");
    //}else
   // if(0){
       // console.log("that's not true");
    //}
//}

// console.log(3 == '3');
// console.log(typeof(3));

// == loose comparison
//=== strick comparison

// var usernum = prompt;
// var usernum = prompt('pick a number');

// if(!usernum){
// console.log(3+usernum);
// }else {
//     console.log('please enter something');
// }

var weatherKey = '3656bf2b2c7085a0d515c67418815c8d';
var myUl = document.querySelector('ul');
// console.log(new XMLHttpRequest());

var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3656bf2b2c7085a0d515c67418815c8d');
console.log(req);
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        processData(apiData);
    }
}
req.send(null);
//console.log(req.responseText);

function processData(data){
    console.log(data);
    for(var i = 0; i < data.list.length; i++){
        var timeOfDay = data.list[i].dt;
        //console.log(data.list[i]);
        var myLi = `
        <li>
            <p>${timeOfDay}</p>
        </li>
        `;
        myUl.innerHTML += myLi;
    }
}



