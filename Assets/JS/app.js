let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = "All Products";
let maxPriceFilter = 5000;

function saveState() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateNavBadge();
}

function updateNavBadge() {
    const badge = document.getElementById('nav-cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// --- THEME MANAGEMENT ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Force dark default
    document.documentElement.setAttribute('data-theme', savedTheme);
}

window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// --- SIDEBAR CATEGORY TOGGLE ---
window.toggleCategory = function(element, mainCategory) {
    const subMenu = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "block";
        icon.innerText = "-";
    } else {
        subMenu.style.display = "none";
        icon.innerText = "+";
    }
    filterProducts(mainCategory); // Show all products in main category when opened
}

// --- RENDERING ---
function createProductCard(product) {
    const inWishlist = wishlist.some(w => w.id === product.id);
    const heartIcon = inWishlist ? "♥" : "♡";
    const heartClass = inWishlist ? "wishlist-btn active" : "wishlist-btn";

    return `
        <article class="product-card">
            <div class="card-img-container">
                <img src="${product.thumbnail}" alt="${product.title}">
                <button class="${heartClass}" onclick="toggleWishlist(${product.id})">${heartIcon}</button>
            </div>
            <div class="product-meta">
                <h3 class="product-title">${product.title}</h3>
                <span class="product-price">₹${product.price}</span>
            </div>
            <p class="product-desc">${product.shortDesc}</p>
            <div class="qty-row">
                <label>Qty</label>
                <input id="qty-${product.id}" class="qty-input" type="number" min="1" value="1">
                <button class="add-btn" onclick="addToCart(${product.id})">Add to cart</button>
            </div>
        </article>
    `;
}

window.filterProducts = function(category = currentCategory) {
    currentCategory = category;
    const search = document.getElementById('searchInput')?.value.toLowerCase() || "";
    
    document.querySelectorAll('.sidebar-menu li, .category-header').forEach(el => el.classList.remove('active'));
    
    const filtered = productsData.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search);
        const matchesCat = category === "All Products" || p.category === category || p.subCategory === category;
        const matchesPrice = p.price <= maxPriceFilter;
        return matchesSearch && matchesCat && matchesPrice;
    });

    const grid = document.getElementById('products-grid');
    if(grid) grid.innerHTML = filtered.map(createProductCard).join('');
}

window.updatePriceFilter = function(value) {
    maxPriceFilter = value;
    const display = document.getElementById('price-display');
    if (display) display.innerText = `₹${value}`;
    filterProducts(currentCategory);
}

// --- ACTIONS ---
window.toggleWishlist = function(id) {
    const product = productsData.find(p => p.id === id);
    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) wishlist.splice(index, 1);
    else wishlist.push(product);
    
    saveState();
    if (document.getElementById('products-grid')) filterProducts();
    if (document.getElementById('wishlist-grid')) renderWishlist();
    if (document.getElementById('special-offers-scroller')) renderScroller();
}

window.addToCart = function(id) {
    const product = productsData.find(p => p.id === id);
    const qtyInput = document.getElementById(`qty-${id}`);
    const quantity = qtyInput ? Number(qtyInput.value) : 1;

    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += quantity;
    else cart.push({ ...product, quantity });
    
    saveState();
    if (document.getElementById('cart-items')) renderCart();
}

// --- CART LOGIC ---
window.renderCart = function() {
    const cartContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if(!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align:center; padding: 20px; color: var(--text-primary);">Your cart is empty.</p>';
        if(totalEl) totalEl.innerText = "₹0";
        return;
    }

    let total = 0;
    cartContainer.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-left">
                    <img src="${item.thumbnail}" width="60" height="60" style="border-radius:10px; object-fit: cover;">
                    <div>
                        <h4 style="color: var(--text-primary); margin-bottom: 5px;">${item.title}</h4>
                        <span style="color: var(--accent); font-weight: bold;">₹${item.price}</span>
                    </div>
                </div>
                <div class="qty-controls">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');
    if(totalEl) totalEl.innerText = `₹${total}`;
}

window.updateQty = function(id, change) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.quantity += change;
        if(item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        saveState();
        renderCart();
    }
}

window.checkout = function() {
    if(cart.length === 0) {
        alert("Your cart is empty. Please add products to checkout.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Your total is ₹${total}. Thank you for your purchase! Redirecting...`);
    cart = [];
    saveState();
    renderCart();
}

window.renderWishlist = function() {
    const grid = document.getElementById('wishlist-grid');
    if(!grid) return;
    if (wishlist.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">Your wishlist is empty.</p>';
    } else {
        grid.innerHTML = wishlist.map(createProductCard).join('');
    }
}

// --- AUTO SCROLLER ---
function renderScroller() {
    const scroller = document.getElementById('special-offers-scroller');
    if(!scroller) return;
    scroller.innerHTML = productsData.slice(0, 8).map(createProductCard).join('');
    let scrollAmount = 0;
    setInterval(() => {
        if(scroller) {
            scroller.scrollLeft += 1;
            scrollAmount += 1;
            if(scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
                scroller.scrollLeft = 0;
                scrollAmount = 0;
            }
        }
    }, 25);
}

// --- 5. SIMULATED API INTEGRATION ---
// This simulates fetching data from a backend server
async function fetchProductsFromAPI() {
    console.log("Fetching products from server...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData); // Resolves our array as if it arrived from a database
        }, 600); // 600ms simulated network delay
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    updateNavBadge();
    // --- MOBILE MENU TOGGLE ---
window.toggleMenu = function() {
    document.querySelector('.nav').classList.toggle('active');
}
    // Using async/await to simulate waiting for the API to load before rendering
    if(document.getElementById('products-grid') || document.getElementById('special-offers-scroller')) {
        await fetchProductsFromAPI(); 
        if(document.getElementById('products-grid')) filterProducts("All Products");
        if(document.getElementById('special-offers-scroller')) renderScroller();
    }
    
    if(document.getElementById('cart-items')) renderCart();
    if(document.getElementById('wishlist-grid')) renderWishlist();
});