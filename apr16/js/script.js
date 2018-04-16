// var name = new person('fname', 'lname', 'brown');

var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log(theDate.toLocaleString('us-en', {month: 'long'}));

var myBday = new Date(2018, 1, 01);
var dateStr = `
    Today's date is ${theDate.getDate()}th of ${theDate.toLocaleString('us-en', {month: 'long'})} ${theDate.getFullYear()}
`;

//do this mm/dd/yy

var bDayStr = `
    ${myBday.toLocaleString('en-us', {month: '2-digit'})}/
    ${myBday.toLocaleString('en-us', {day: '2-digit'})}/
    ${myBday.toLocaleString('en-us', {year: '2-digit'})}/
    
`;
//hhmmss

var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
    clearTimeout(myDelay);
    
});


//set interval function
var myTimer = setInterval(updateTimer, 100);
function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleDateString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}

//settimeout function

var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg(){
    document.body.classList.add('hilite');
}

function runTimer(){
    var theTime = new Date();
    var timeStr = `${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}





