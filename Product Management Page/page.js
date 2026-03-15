var price = 1000;

var q = document.getElementById("q");
var t = document.getElementById("t");

q.addEventListener("input", function(){

var qty = q.value;

if(qty < 0){
qty = 0;
q.value = 0;
alert("Quantity cannot be negative");
}

var total = price * qty;

t.value = total;

if(total > 1000){
alert("You got a gift coupon!");
}

});