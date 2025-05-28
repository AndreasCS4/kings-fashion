let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(itemName, price) {
  const sizeSelect = document.getElementById("size");
  const size = sizeSelect ? sizeSelect.value : "M";

  cart.push({ name: `${itemName} (Size ${size})`, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");

  if (!cartList || !totalDisplay) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - €${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})" class="remove-btn">🗑️</button>
    `;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: €${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    window.location.href = "checkout.html";
  }
}
// Automatically render the cart if elements exist
document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});
