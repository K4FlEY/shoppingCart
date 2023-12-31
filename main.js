let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =() => {
return (shop.innerHTML = shopItemsData.map((x)=> {
    let {id, name, price, desc, img} = x;
    let search = basket.find((x) =>x.id === id) || []
    return`
        <div class="relative group" id=product-id-${id}>
            <img src=${img} class="w-full h-auto rounded-md flex justify-center">
            <div class="absolute inset-0 flex items-center text-center  justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-md">
                <div class="text-white">
                    <h3>${name}</h3>
                    <p>${price}</p>
                    <p>${desc}</p>
                    <div class="flex justify-center text-2xl p-2">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quantity">${search.items === undefined ? "0" : search.items}</div>
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                  <a href="cart.html"><button class="bg-pink-200 hover:bg-pink-500 text-black rounded-md px-3 py-1">Buy</button></a>
                </div> 
            </div>
        </div>
    `

}).join(""));
};
generateShop();

// ex6 arrow function
let increment = (id)=>{
let selectedItem = id;
let search = basket.find((x) => x.id === selectedItem.id);
if(search === undefined){
    basket.push({
        id: selectedItem.id,
        items: 1,
    })
}
else{
    search.items++;
}
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
// console.log(basket);

}

let decrement = (id)=>{
let selectedItem = id;
let search = basket.find((x) => x.id === selectedItem.id)

if (search === undefined) return;
else if(search.items === 0) return;
else{
    search.items--;
}
update(selectedItem.id);
 
// console.log(basket);

localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
let search = basket.find((x) => x.id === id);
document.getElementById(id).innerHTML = search.items;
cartCalculation();
}; 

let cartCalculation = () =>{
    let cartIcon = document.getElementById("cart");
    cartIcon.innerHTML = basket.map((x) => x.items).reduce((x,y) => x + y, 0);
};

cartCalculation();