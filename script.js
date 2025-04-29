let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}
