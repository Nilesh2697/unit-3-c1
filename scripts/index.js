//store the products array in localstorage as "products"
let pro = JSON.parse(localStorage.getItem("products")) || []
let form = document.getElementById("products")
form.addEventListener("submit",myfunction)

function myfunction(event){
    event.preventDefault();

    let aType = form.type.value;
    let aDescription =  form.desc.value;
    let aPrice = form.price.value;
    let aImage = form.image.value;

    let obj = {
        itmtype : aType,
        itmdesc : aDescription,
        itmprice : aPrice,
        itmimage : aImage,
    }

    pro.push(obj)
    localStorage.setItem("products",JSON.stringify(pro))
}