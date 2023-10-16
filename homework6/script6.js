window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const out = document.querySelector("#out");
  const kolInput = document.getElementById("kol");
  const productSelect = document.getElementById("product");
  const selectElement = document.getElementById("select");
  const checkboxElement = document.getElementById("checkbox");
  const checkbox = document.querySelector("input[name='checkbox']");
  const radioButtons = document.querySelectorAll("input[type='radio']");

  const prices = {
    checkbox1: 5,
    product1: 1500,
    product2: 0,
    product3: 1000,
    select1: 500,
    select2: 1000,
    select3: 2000,
  };

  let previousChecked = null;

  function calculatePrice() {
    const quantity = parseInt(kolInput.value);
    const selectedProduct = productSelect.querySelector("input:checked").value;

    const validQuantity = /^[1-9][0-9]*$/.test(quantity);
    if (!validQuantity) {
      alert("Пожалуйста, введите корректное количество услуг.");
      kolInput.value = "";
      radioButtons.forEach(function(button) {
        button.checked = false;
      });
      selectElement.style.display = "none";
      checkboxElement.style.display = "none";
      out.innerHTML = "";
      return;
    }

    let totalCost = prices[selectedProduct] * quantity;

    if (selectedProduct === "product1") {
      selectElement.style.display = "none";
      checkboxElement.style.display = "none";
    } else if (selectedProduct === "product2") {
      selectElement.style.display = "block";
      checkboxElement.style.display = "none";
      const selectValue = selectElement.value;
      const selectPrice = prices[selectValue];
      if (selectPrice !== undefined) {
        totalCost += selectPrice * quantity;
      }
    } else if (selectedProduct === "product3") {
      selectElement.style.display = "none";
      checkboxElement.style.display = "block";
      const checkboxValue = checkbox.value;
      const checkboxPrice = prices[checkboxValue];
      if (checkbox.checked) {
      totalCost = prices.product3 * checkboxPrice * quantity;
      }
    }

    out.innerHTML = "Цена: " + totalCost + "₽";
  }

  kolInput.addEventListener("input", calculatePrice);
  productSelect.addEventListener("change", function () {
    if (previousChecked) {
      previousChecked.checked = false;
    }
    this.querySelector("input:checked").checked = true;
    previousChecked = this.querySelector("input:checked");
    calculatePrice();
  });

  selectElement.addEventListener("change", calculatePrice);
  checkboxElement.addEventListener("change", calculatePrice);

});