let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let cartCalculation = () => {
  let cartIcon = document.getElementById("cart");
  cartIcon.innerHTML = basket.map((x) => x.items).reduce((x, y) => x + y, 0);
};
cartCalculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
      let {id, items} = x;
      let search = shopItemsData.find((y)=>y.id === id) || [];
      let {img, name, price} = search;
      return`
      <div class="flex items-center justify-between border-b-2 border-black p-4">
      <div class="flex items-center space-x-4">
      <img width=70" src = ${img} alt = "pht">
        <p>${name}</p>
        <p class="text-black pl-20">${price}</p>
      </div>
    
      <div class="flex items-between space-x-4">
         <i onclick="decrement(${id})" class="bi bi-dash cursor-pointer"></i>
        <div id=${id} class="bg-gray-200 px-2 py-1 rounded">${items}</div>
        <i onclick="increment(${id})" class="bi bi-plus cursor-pointer"></i>
      </div>
    
      <i onclick="removeItem(${id})" class="bi bi-x-lg cursor-pointer"></i>
    </div> `;
    }).join(""));

  } else if (basket.length == 0) {
    shoppingCart.innerHTML = ``;

    label.innerHTML = `
        <h2 class="text-xl pb-3">Cart is empty</h2>
        <a href="arts.html"><button class="bg-black text-white rounded-xl p-2">Buy Items</button></a>`;
  }
};
generateCartItems();


let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      items: 1,
    })
  }
  else {
    search.items++;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id)

  if (search === undefined) return;
  else if (search.items === 0) return;
  else {
    search.items--;
  }
 
  update(selectedItem.id);
  basket = basket.filter((x) => x.items !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.items;
  cartCalculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
}

let clearLocalstorage =() =>{
basket = [];
generateCartItems();
localStorage.setItem("data", JSON.stringify(basket));

}

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let {items, id} = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      return items * search.price;
    }).reduce((x, y) => x + y, 0);
    label.innerHTML = 
    ` <h2 class="text-2xl pb-5">Total bill:<p class=" text-green-500 text-2xl">NOK: ${amount}</p></h2>
      <button class=" bg-green-500 px-5 p-2 rounded-lg ">Checkout</button>
      <button onclick="clearLocalstorage()" class=" bg-red-500 px-5 p-2 rounded-lg">Clear Cart</button>
      `;
  } else return;
};

TotalAmount();


