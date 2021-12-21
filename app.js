const price= [
    {
        category:"Stock Products",
        Id:1,
        range: "Varies",
        image: "img/8.jpg",

    },

    {
        category:"Luxury Products",
        Id:2,
        range: "Varies",
        image: "img/6.jpg",
  
    },

    {
        category:"Sales Products",
        Id:1,
        range: 6000,
        image: "img/5.jpg",

    }
]


const displaypricing = price.map(function(item){
    return (
        `<div class="pricing">
                <img src =${item.image} />
                <h5 class="Price-title">${item.category}</h5>
                <p class="price-range">${item.range}</p>
            </div>
        </div>`
    )
})

const priceList =document.getElementById("price-grid");
priceList.innerHTML= displaypricing.join("")


const togglebtn = document.getElementById("nav-icon1")
const sideReveal =document.getElementById("header")


togglebtn.addEventListener("click",function(){
  
    togglebtn.classList.toggle('open');
    
    if (sideReveal.style.display==="none"){
        sideReveal.style.display= "block"
    }

})