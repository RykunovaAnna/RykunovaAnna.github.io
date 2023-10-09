const btn = document.querySelector("#btn");
const out = document.querySelector("#out");
const kolInput = document.getElementById("kol");
const select1 = document.getElementById("select1");

window.addEventListener("DOMContentLoaded", function (event) {
   console.log("DOM fully loaded and parsed");
   btn.onclick = function calculatePrice() {
        const quantity = parseInt(kolInput.value);
        const validQuantity = /^[1-9]\d*$/.test(kolInput.value);
        if ((!validQuantity) || quantity <= 0) {
            alert("Пожалуйста, введите корректное количество товаров.");
            kolInput.value = "";
            select1.value = "";
            out.innerHTML = "";
            return;
        }
        const productValue = parseInt(select1.value);
        const price = quantity * productValue;
        out.innerHTML = "Цена: " + price + "₽";
    }
});