var price = 3.79;
var quantity = getQuantity();
const minus_button = document.getElementById("minus_atc_button");
const plus_button = document.getElementById("plus_atc_button");


document.getElementById("item_price").innerHTML = subTotal().toFixed(2);
document.getElementById("quantity_of_item").innerHTML = quantity;
document.getElementById("gst").innerHTML = (0.05 * subTotal()).toFixed(2);
document.getElementById("qst").innerHTML =  (0.09975 * subTotal()).toFixed(2);
document.getElementById("subtotal").innerHTML = subTotal().toFixed(2);
document.getElementById("subtotal1").innerHTML = subTotal().toFixed(2);
document.getElementById("total").innerHTML = (subTotal() + qst() + gst()).toFixed(2);

function main() {
    minus_button.addEventListener('click', function() {
        minus();
    })
    
    plus_button.addEventListener('click', function() {
        plus();
    })
}

function subTotal() {
    return price * getQuantity();
}

function total() {
    document.getElementById("total").innerHTML = (subTotal() + qst() + gst()).toFixed(2)
}

function getQuantity(){
    if (!sessionStorage.getItem("product_quantity")){
        return 1;
    }

    return sessionStorage.getItem("product_quantity");
}

function gst() { 
    document.getElementById("gst").innerHTML = (0.05 * subTotal()).toFixed(2)
    return (0.05 * subTotal())
}

function qst() {
    document.getElementById("qst").innerHTML =  (0.09975 * subTotal()).toFixed(2)
    return (0.09975 * subTotal())
}

function minus() {
    quantity--;
    if (quantity < 1) {
        quantity = 1;
    }
    sessionStorage.setItem("product_quantity", quantity);
    document.getElementById("quantity_of_item").innerHTML = quantity;
    document.getElementById("item_price").innerHTML = subTotal().toFixed(2);
    document.getElementById("subtotal").innerHTML = subTotal().toFixed(2);
    document.getElementById("subtotal1").innerHTML = subTotal().toFixed(2);
    total()
    gst()
    qst()
   

}

function plus() {
    quantity++;
    sessionStorage.setItem("product_quantity", quantity);
    document.getElementById("quantity_of_item").innerHTML = quantity;
    document.getElementById("item_price").innerHTML = subTotal().toFixed(2);
    document.getElementById("subtotal").innerHTML = subTotal().toFixed(2);
    document.getElementById("subtotal1").innerHTML = subTotal().toFixed(2);
    total()
    gst()
    qst()
    
}

main();
