let all_pro = JSON.parse(localStorage.getItem("products"))

all_pro.map(function(elem){
    let box = document.createElement("div");

    let type = document.createElement("p");
    type.innerText=elem. itmtype;

    let desc= document.createElement("p");
    desc.innerText=elem. itmdesc;

    let price=document.createElement("p");
    price.innerText=elem.itmprice;

    let img = document.createElement("img");
    img.src = elem.itmimage

    let remove = document.createElement("button");
    remove.innerText = "Remove"
    remove.addEventListener("click",function(){
        removeItem(elem)
    })
    box.append(type,desc,price,img,remove)

    document.getElementById("all_products").append(box)
})

function removeItem(elem,index){
    console.log(elem,index)
    all_pro.splice(index,1)

    localStorage.setItem("products",JSON.stringify(all_pro))
    window.location.reload()
}