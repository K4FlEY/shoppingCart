let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "HRI341",
    name: "DINQ",
    price: 399,
    desc: "This is a art. Which took 4 days to paint.",
    img: "pht/girl-2696947_1280.jpg",
},
{
    id: "HRI342",
    name: "FlAWLESS",
    price: 999,
    desc: "A captivating piece that taps into the core emotions shared by humanity.",
    img: "pht/woman-1369253_1280.jpg",
},
{
    id: "HRI343",
    name: "CONNECTION",
    price: 399,
    desc: "This art is a feeling.",
    img: "pht/koi-fish-swimming-serene-pond-is-beautiful-generative-ai_206725-742.avif",
},

{
    id: "HRI1345",
    name: "BUFF",
    price: 399,
    desc: "An exquisite masterpiece that seamlessly weaves together elements from various cultures, creating a tapestry of diversity.",
    img: "pht/bird.avif"
},
{
    id: "HRI344",
    name: "BUTRY",
    price: 699,
    desc: "This art is a feeling.",
    img: "pht/man-4603859_1280.webp",
},

{
    id: "HRI1346",
    name: "REPV",
    price: 389,
    desc: "This artwork exudes an enduring elegance that transcends temporal boundaries.",
    img: "pht/redeye.avif"

   
},];

let basket = []

let generateShop =() => {
return (shop.innerHTML = shopItemsData.map((x)=> {
    let {id, name, price, desc, img} = x;
    return`
        <div class="relative group" product_id=${id}>
            <img src=${img} class="w-full h-auto rounded-md flex justify-center">
            <div class="absolute inset-0 flex items-center text-center  justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-md">
                <div class="text-white">
                    <h3>${name}</h3>
                    <p>${price}</p>
                    <p>${desc}</p>
                    <button class="bg-pink-200 hover:bg-pink-500 text-black rounded-md px-3 py-1" >Buy</button>
                </div> 
            </div>
        </div>
    `

}).join(""));
};

generateShop();



// ex6 arrow function

let increment = (id)=>{
    let selectedItems = id;
    console.log(selectedItems.id);

    basket.push({
        id: selectedItems.id,
        item: 1,
    })
}
let decrement = ()=>{}
let update = ()=>{}