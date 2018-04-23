// if(typeof Storage !== "undefined"){
//     console.log('yay storage')
// }else {
//         console.log('boo.')
// }
// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');

// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);

// function setLocalStorage(){
// localStorage.setItem('firstname', 'chou');

// }

// function setSessionStorage(){
//     sessionStorage.setItem('vehicle', 'yota');
    
//     }

var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem("details") !== null){
    saveBtn.removeEventListener('click', getUserInfo);
    saveBtn.removeEventListener('click', checkPassword);

}
saveBtn.addEventListener('click', getUserInfo);

//evt listen for event
function getUserInfo(evt){
    evt.preventDefault();

    var radio = document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    localStorage.setItem("details", JSON.stringify(UserInfo(username, password, radio)));
   // console.log(username, password);
}
document.querySelector('label[for ="theme"]');

function UserInfo(un, pw, theme){
    this.user = un;
    this.pass = pw;
    this.theme = theme;
}

function checkUserinfo(){
    if(localStorage.getItem("details") !== null){
        document.querySelector('input[type="theme"]').style.display = 'none';

        var userInfo = JSON.parse(localStorage.getItem("details"));
        document.querySelector('input[type="text"]').value = userInfo.user;

        alert('Please enter your password');
        //console.log(userInfo);
    }
    
}
checkUserinfo();

function checkPassword(evt){
    evt.preventDefault();
    var userName =MD5(document.querySelector('input[type="password"]'));
    var userPass =MD5(document.querySelector('input[type="password"]'));
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userName === userInfo.user && userPass === userInfo.pass){
        alert("Welcome home!");
        document.body.classList.add(userInfo.theme);
    }else {
        alert("Please enter proper credentials");
    }
}