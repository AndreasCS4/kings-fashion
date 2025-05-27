let cart = [];

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    // Set up item text and a small bin icon button
    li.innerHTML = `
      <span>${item.name} - €${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})" class="remove-btn" title="Remove item">
        🗑️
      </button>
    `;

    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: €${total.toFixed(2)}`;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

  


function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Thank you for your order! We'll process it soon.");
    cart = [];
    updateCart();
  }
}
