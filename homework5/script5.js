var btn = document.querySelector("#btn");
var out = document.querySelector("#out");
var kolInput = document.getElementById("kol");
var select1 = document.getElementById("select1");

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    btn.onclick = function calculatePrice() {
        var quantity = parseInt(kolInput.value);  
        if (isNaN(quantity) || quantity <= 0) {
            alert("Пожалуйста, введите корректное количество товаров.");
            kolInput.value = "";
            select1.value = "";
            out.innerHTML = "";
            return;
        }
        var productValue = parseInt(select1.value);
        var price = quantity * productValue;  
        out.innerHTML = "Цена: " + price + "₽";
    }
})