
var items = document.querySelector('#items');
var photos = document.querySelector('li');

var itemArray =[
    {
        img:"http://unsplash.it/256/256$image=206",
        alt: "image 206",
        title: "Unsplash Photo",
        cost: 100,
        desc: "desktop"
    },
    {
        img:"http://unsplash.it/256/256?image=100",
        alt: "image 100",
        title: "Another Unsplash Photo",
        cost: 75,
        desc: "beach"
    },
    {
        img:"http://unsplash.it/256/256?image=110",
        alt: "image 110",
        title: "Another Unsplash Photo",
        cost: 50,
        desc: "safari"
    },
    {
        img:"http://unsplash.it/256/256?image=125",
        alt: "image 125",
        title: "Another Unsplash Photo",
        cost: 30,
        desc: "river"
    }

];

function displayitems(arr){
 for(var i = 0; i < arr.length; i++){
    console.log(arr[i].alt);
    var item = `
    <li data-sku="00${i + 1}">
        <input type="checkbox">
        <img src="${arr[i].img}" alt="${arr[i].alt}">
        <h3>${arr[i].title}</h3>
        <p>${arr[i].cost}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sint molestiae modi sequi maiores unde atque nesciunt quidem dolores tempora?</p>
    </li>`;
    items.innerHTML += item; 
 }
 
}
displayitems(itemArray);

function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++ ){
        arr[i].addEventListener('click', function(evt){
            console.log(this.firstElementChild);
            this.classList.toggle = 'selected';
            //this.firstElementChild = true;
            //ternary operator aka super awesome if statement
            (this.firstElementChild.checked == true)?
                this.firstElementChild.checked = false: 
                this.firstElementChild.checked = true;

                //console.log(this.dataset.sku, this.dataset.sku + 1);
                //console.log(arr.slice(this.dataset.sku, parseInt (this.dataset.sku)+ 1)[0]);

                //console.log(objArr);
                //console.log(this.dataset.sku);
                selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku)+1)[0]);
                //console.log(Array.from(arr).slice(this.dataset.sku));

                console.log(selectedArray);
                
            });
    }

}
addListener(items.children,itemArray);
