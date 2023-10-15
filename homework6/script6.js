window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const out = document.querySelector("#out");
  const kolInput = document.getElementById("kol");
  const productSelect = document.getElementById("product");
  const selectElement = document.getElementById("select");
  const checkboxElement = document.getElementById("checkbox");

  const prices = {
    product1: 1500,
    product2: 500,
    product3: 1000,
    select1: 0,
    select2: 500,
    select3: 1500,
  };

  let previousChecked = null;

  function calculatePrice() {
    const quantity = parseInt(kolInput.value);
    const selectedProduct = productSelect.querySelector("input:checked").value;

    const validQuantity = /^[1-9]\d*$/.test(quantity);
    if (!validQuantity || quantity < 0) {
      alert("Пожалуйста, введите корректное количество услуг.");
      kolInput.value = "";
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
        totalCost += selectPrice;
      }
    } else if (selectedProduct === "product3") {
      selectElement.style.display = "none";
      checkboxElement.style.display = "block";
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
});





// window.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded and parsed");

//   const out = document.querySelector("#out");
//   const kolInput = document.getElementById("kol");
//   const productSelect = document.getElementById("product");
//   const selectElement = document.getElementById("select");
//   const checkboxElement = document.getElementById("checkbox");

//   const prices = {
//     product1: 1500,
//     product2: 500,
//     product3: 1000,
//     select1: 0,
//     select2: 500,
//     select3: 1500,
//   };

//   let previousChecked = null;

//   function calculatePrice() {
//     const quantity = parseInt(kolInput.value);
//     const selectedProduct = productSelect.querySelector("input:checked").value;

//     const validQuantity = /^[1-9]\d*$/.test(quantity);
//     if (!validQuantity || quantity < 0) {
//       alert("Пожалуйста, введите корректное количество услуг.");
//       kolInput.value = "";
//       out.innerHTML = "";
//       return;
//     }

//     let totalCost = prices[selectedProduct] * quantity; // Изменено

//     if (selectedProduct === "product2") {
//       selectElement.style.display = "block";
//       const selectValue = selectElement.value;
//       const selectPrice = prices[selectValue];
//       totalCost += selectPrice;
//     }

//     out.innerHTML = "Цена: " + totalCost + "₽"; // Изменено
//   }

//   kolInput.addEventListener("input", calculatePrice);
//   productSelect.addEventListener("change", function () {
//     if (previousChecked) {
//       previousChecked.checked = false;
//     }
//     this.querySelector("input:checked").checked = true;
//     previousChecked = this.querySelector("input:checked");
//     calculatePrice();
//   });
// });







  




// window.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded and parsed");
// const out = document.querySelector("#out");
// const kolInput = document.getElementById("kol");
// const productSelect = document.getElementById("product");

// const prices = {
//   product1: 700,
//   product2: 500,
//   product3: 1500,
// };

//     const selectedProduct = productSelect.value;
//     const validQuantity = /^[1-9]\d*$/.test(kolInput.value);
//     if (!validQuantity || quantity <= 0) {
//       alert("Пожалуйста, введите корректное количество услуг.");
//       kolInput.value = "";
//       out.innerHTML = "";
//       return;
//     }
//     const productValue = parseInt(select1.value);
//     const price = prices[selectedProduct];
//     const totalCost = price * quantity;
//     out.innerHTML = "Цена: " + price + "₽";
// })