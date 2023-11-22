let shop = document.getElementById("shop");

let shopItemsData = [{
    id: "HRI341",
    name: "DIN",
    price: 399,
    desc: "This is a art. Which took 4 days to paint.",
    img: "pht/girl-2696947_1280.jpg"


},
{
    id: "HRI342",
    name: "FlAWLESS",
    price: 999,
    desc: "This art is a feeling.",
    img: "pht/man-4603859_1280.webp",

},
{
    id: "HRI343",
    name: "CONNECTION",
    price: 399,
    desc: "This art is a feeling.",
    img: "pht/woman-1369253_1280.jpg",
},
{
    id: "HRI344",
    name: "BUTRY",
    price: 699,
    desc: "This art is a feeling.",
    img: "pht/man-4603859_1280.webp",
},

];

let generateShop =() =>{
return (shop.innerHTML = shopItemsData
    .map((x)=> {
    return`

        <div class="relative group">
            <img src="pht/girl-2696947_1280.jpg" class="w-full h-auto rounded-md flex justify-center">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-md">
                <div class="text-white">
                    <h3>${x.name}</h3>
                    <p>${x.desc}</p>
                    <p></p>
                    <button class="bg-white text-black rounded-md px-3 py-1">Buy</button>
                </div>
            </div>
        </div>
    `

}).join);
};

generateShop();