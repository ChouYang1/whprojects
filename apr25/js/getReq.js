function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://rickandmortyapi.com/api/character');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            //func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText).results);
        }
    }
    req.send(null);
}