




var cardList = document.querySelector('main ul');

function cardListData(cards){
    console.log(cards);
    for(var i = 0; i< cards.length; i ++){
        var card = `
            <li>
                <img src ="${cards.results[i].image}"alt =">
                <h3>${cards.results[i].name}</h3>
            </li>
        `;
        cardList.innerHTML += card;
    }
}
getReq('https://rickandmortyapi.com/api/character', cardListData);


function getCharacter(searchStr){
    var characterArr = [];
    console.log(searchStr);

    var req = new XMLHttpRequest();
    req.open('GET', 'https://rickandmortyapi.com/api/character');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            var obj = JSON.parse(req.responseText).results;
            for(var i = 0; obj.length; i++){

            console.log(obj[i].name.includes(searchStr), obj[i].name);
            if(obj[i].name.includes(searchStr)){
                cardList.innerHTML ="";
                var card = `
                    <li>
                        <img src ="${obj[i].image}" alt ="${obj[i].name}">
                        <h3>${obj[i].name}</h3>
                    </li>
                `;
                cardList.innerHTML += card;
            }


            }
            //console.log(getReq('https://rickandmortyapi.com/api/character', cardListData));
            //getReq('https://rickandmortyapi.com/api/character', cardListData);
        }
    

    }
    req.send(null);
console.log(characterArr);
}

