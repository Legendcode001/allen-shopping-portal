document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutCartItems = document.getElementById("checkout-cart-items");
    const totalPriceEl = document.getElementById("total-price");
    
    let totalPrice = 0;
    checkoutCartItems.innerHTML = "";
    
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `<span>${item.name} - $${item.price}</span>`;
        checkoutCartItems.appendChild(cartItem);
        totalPrice += item.price;
    });

    totalPriceEl.innerText = totalPrice;
});

function payWithCard() {
    alert("Redirecting to Secure Payment Page...");
    window.location.href = "https://www.jumia.com"; // Example redirect
}

function payOnDelivery() {
    alert("Your order has been placed! You will pay on delivery.");
    window.location.href = "index.html";
}
