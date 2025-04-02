// ==================== CART FUNCTIONALITY ====================
let cart = [];
const cartCount = document.getElementById("cart-count");
const cartDropdown = document.getElementById("cart-dropdown");

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
}

function updateCartUI() {
    cartDropdown.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button class="remove-item" onclick="removeFromCart(${index})">❌</button>
        `;
        cartDropdown.appendChild(cartItem);
    });

    cartCount.innerText = cart.length;
    cartCount.style.display = cart.length > 0 ? "inline-block" : "none";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Toggle cart dropdown
function toggleCart() {
    cartDropdown.classList.toggle("show-cart");
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("⚠️ Please add items to your cart before checking out!");
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "checkout.html";
    }
}

// ==================== SEARCH FUNCTIONALITY ====================
function searchProduct() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let products = document.querySelectorAll(".product");
    let found = false;
    
    products.forEach(product => {
        let title = product.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }
    });

    document.getElementById("no-results").style.display = found ? "none" : "block";
}
