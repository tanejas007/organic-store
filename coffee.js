var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var coffeeDIV=document.getElementById("coffeeDIV");
var COFFEE=[
    {name:'BRU',price:130},
    {name:'NesCafe',price:90},
    {name:'NesCafe Gold',price:100},
];

function HTMLcoffeeProduct(con) {
    let URL = `/img/coffee/coffee${con}.jpg`;
    let btn = `btnCoffee${con}`;
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem; width:16rem; align-items:center;" src="${URL}" alt="Card image cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <p class="card-text">${COFFEE[con-1].name}</p>
                <p class="card-text">${COFFEE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${COFFEE[con-1].name}','${COFFEE[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${COFFEE[con-1].name}','${COFFEE[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}





function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}

function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

function render(){


}

(()=>{
    for(let index = 1; index <= 3; index++){
        coffeeDIV.innerHTML+=`${HTMLcoffeeProduct(index)}`;

    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();