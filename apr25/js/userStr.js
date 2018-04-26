function userStr(evt){
// function getUserSearch(evt){
//     if(
//         evt.key !== 'undefined' &&
//         evt.key !== 'Backspace' &&
//         evt.key !== 'Tab'
//     )

//     str += evt.key;
    
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&access_token=${clientId}, githubUsers`);


}