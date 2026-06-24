// ============================================================
//  DATA
// ============================================================
const PRODUCTS = [{
    id: 1,
    name: 'Leica M3 Vintage Camera',
    category: 'cameras',
    price: 2450,
    oldPrice: 2800,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&crop=center',
    badge: 'Rare',
    description: '1954 Leica M3 with summicron 50mm f/2 lens. Perfect working condition.'
}, {
    id: 2,
    name: 'Rolex Oyster Perpetual 1958',
    category: 'watches',
    price: 4200,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop&crop=center',
    badge: 'Vintage',
    description: 'Stainless steel manual wind, original dial and bezel. Recently serviced.'
}, {
    id: 3,
    name: 'The Beatles – Abbey Road (1st Press)',
    category: 'vinyl',
    price: 320,
    oldPrice: 450,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=300&fit=crop&crop=center',
    badge: '1st Press',
    description: 'UK first pressing, Apple Records, with original inner sleeve. Near mint.'
}, {
    id: 4,
    name: 'Mid-Century Teak Sideboard',
    category: 'furniture',
    price: 1850,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=300&fit=crop&crop=center',
    badge: 'Danish',
    description: '1960s Danish teak sideboard with sliding doors and tapered legs.'
}, {
    id: 5,
    name: 'Victorian Sapphire Brooch',
    category: 'jewelry',
    price: 780,
    oldPrice: 950,
    image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=400&h=300&fit=crop&crop=center',
    badge: 'Antique',
    description: '18k gold with natural sapphire and seed pearls. Circa 1880.'
}, {
    id: 6,
    name: 'Nintendo Entertainment System (NES)',
    category: 'gaming',
    price: 210,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=400&h=300&fit=crop&crop=center',
    badge: 'CIB',
    description: 'Complete in box with Super Mario Bros. and Duck Hunt. All cables included.'
}, {
    id: 7,
    name: 'Vintage Paris Travel Poster',
    category: 'posters',
    price: 145,
    oldPrice: 190,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKQlcQ2zY8n02mSb_HDAe-PECRYKbkwIpEY6a23zqOrxnNjzH2Zc3PGRB&s=10',
    badge: '1930s',
    description: 'Original lithograph travel poster for Paris. Framed and ready to hang.'
}, {
    id: 8,
    name: 'First Edition – The Great Gatsby',
    category: 'books',
    price: 3200,
    oldPrice: 4000,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center',
    badge: 'Signed',
    description: '1925 first edition, first printing. Inscribed by F. Scott Fitzgerald.'
}, {
    id: 9,
    name: 'Polaroid SX-70 Land Camera',
    category: 'cameras',
    price: 480,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop&crop=center',
    badge: 'Working',
    description: 'Original Polaroid SX-70 with leather case and manual. Fully functional.'
}, {
    id: 10,
    name: 'Omega Speedmaster Professional',
    category: 'watches',
    price: 5600,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=300&fit=crop&crop=center',
    badge: 'Moonwatch',
    description: '1972 Speedmaster with calibre 861 movement. Original bracelet and box.'
}, {
    id: 11,
    name: 'Pink Floyd – Dark Side (UK 1st)',
    category: 'vinyl',
    price: 280,
    oldPrice: 340,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQIIse6dEbDuV7-rTXe7YykuqvjizAjzdlXkhAk-lpSr3XYEqC_Y4QmKD&s=10',
    badge: 'Harvest',
    description: 'UK first pressing with solid blue triangle. Includes posters and stickers.'
}, {
    id: 12,
    name: 'Art Deco Walnut Desk',
    category: 'furniture',
    price: 2200,
    oldPrice: null,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUOc3t6T-lSrQBSKWVNnGyvTBKrzL079kHD5X2QvZhBna_eF-8aljibH5&s=10',
    badge: 'Art Deco',
    description: '1930s walnut desk with brass handles and leather writing surface.'
}, {
    id: 13,
    name: 'Tiffany & Co. Silver Necklace',
    category: 'jewelry',
    price: 540,
    oldPrice: 700,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=300&fit=crop&crop=center',
    badge: 'Vintage',
    description: 'Sterling silver necklace with turquoise pendant. Original box included.'
}, {
    id: 14,
    name: 'Sega Genesis (Mega Drive)',
    category: 'gaming',
    price: 160,
    oldPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Sega-Genesis-Mk2-6button.jpg',
    badge: 'CIB',
    description: 'Complete with Sonic the Hedgehog and all original packaging.'
}, {
    id: 15,
    name: 'Marilyn Monroe Vintage Poster',
    category: 'posters',
    price: 95,
    oldPrice: 130,
    image: 'https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=400&h=300&fit=crop&crop=center',
    badge: '1950s',
    description: 'Original movie poster for "The Seven Year Itch". Linen-backed.'
}, {
    id: 16,
    name: 'Leather-Bound Shakespeare Collection',
    category: 'books',
    price: 480,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop&crop=center',
    badge: 'Fine Bind',
    description: '7-volume set, finely bound in full leather with gilt edges. 1900s.'
}, {
    id: 17,
    name: 'Canon AE-1 Program Camera',
    category: 'cameras',
    price: 320,
    oldPrice: 400,
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&h=300&fit=crop&crop=center',
    badge: 'Classic',
    description: 'Canon AE-1 Program with 50mm f/1.8 lens. Excellent condition.'
}, {
    id: 18,
    name: 'Cartier Tank 1970s',
    category: 'watches',
    price: 3800,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=300&fit=crop&crop=center',
    badge: 'Luxury',
    description: '18k gold Cartier Tank with manual movement. Original strap and buckle.'
}, ];

// ============================================================
//  STATE
// ============================================================
let state = {
    cart: [],
    wishlist: [],
    activeCategory: 'all',
    searchQuery: '',
    theme: 'light',
    orders: [],
};

// ============================================================
//  DOM REFS
// ============================================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const grid = $('#productGrid');
const emptyState = $('#emptyState');
const countEl = $('#productCount');
const searchInput = $('#searchInput');
const catBtns = $$('.cat-btn');
const cartBtn = $('#cartBtn');
const cartBadge = $('#cartBadge');
const cartSidebar = $('#cartSidebar');
const cartOverlay = $('#cartOverlay');
const closeCart = $('#closeCart');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const checkoutBtn = $('#checkoutBtn');
const wishlistBtn = $('#wishlistBtn');
const wishlistBadge = $('#wishlistBadge');
const themeToggle = $('#themeToggle');
const toastContainer = $('#toastContainer');
const ordersBtn = $('#ordersBtn');
const ordersBadge = $('#ordersBadge');
const ordersOverlay = $('#ordersOverlay');
const ordersList = $('#ordersList');
const closeOrders = $('#closeOrders');
const paymentOverlay = $('#paymentOverlay');
const paymentSummary = $('#paymentSummary');
const payBtn = $('#payBtn');
const payAmount = $('#payAmount');
const closePayment = $('#closePayment');
const cardNumber = $('#cardNumber');
const cardExpiry = $('#cardExpiry');
const cardCvv = $('#cardCvv');
const cardName = $('#cardName');
const cardDetails = $('#cardDetails');
const codInfo = $('#codInfo');
const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');

// ============================================================
//  HELPERS
// ============================================================
const USD_TO_INR_RATE = 83.5;
const INR_FORMATTER = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
});

function formatPrice(amount) {
    return INR_FORMATTER.format(amount * USD_TO_INR_RATE);
}

function getProduct(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getCartItem(id) {
    return state.cart.find(item => item.id === id);
}

function isInWishlist(id) {
    return state.wishlist.includes(id);
}

function getCartTotal() {
    return state.cart.reduce((sum, item) => {
        const p = getProduct(item.id);
        return sum + (p ? p.price * item.quantity : 0);
    }, 0);
}

function getCartCount() {
    return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function generateOrderId() {
    return 'RV-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
}

function generateTracking() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'TRK-';
    for (let i = 0; i < 10; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function getStatusIndex(status) {
    const map = { 'processing': 0, 'shipped': 1, 'delivered': 2 };
    return map[status] ?? 0;
}

// ============================================================
//  PERSISTENCE
// ============================================================
function saveState() {
    try {
        localStorage.setItem('retroVaultState', JSON.stringify(state));
    } catch (e) { /* ignore */ }
}

function loadState() {
    try {
        const raw = localStorage.getItem('retroVaultState');
        if (raw) {
            const saved = JSON.parse(raw);
            state.cart = saved.cart || [];
            state.wishlist = saved.wishlist || [];
            state.activeCategory = saved.activeCategory || 'all';
            state.searchQuery = saved.searchQuery || '';
            state.theme = saved.theme || 'light';
            state.orders = saved.orders || [];
        }
    } catch (e) { /* ignore */ }
}

// ============================================================
//  TOAST
// ============================================================
function showToast(message, type = 'success') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span class="msg">${message}</span>
    `;
    toastContainer.appendChild(el);
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px)';
        setTimeout(() => el.remove(), 400);
    }, 2800);
}

// ============================================================
//  RENDER PRODUCTS
// ============================================================
function renderProducts() {
    const query = state.searchQuery.toLowerCase().trim();
    const filtered = PRODUCTS.filter(p => {
        const matchCategory = state.activeCategory === 'all' || p.category === state.activeCategory;
        const matchSearch = p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        countEl.textContent = '0 items';
        return;
    }
    emptyState.classList.add('hidden');
    countEl.textContent = `${filtered.length} item${filtered.length > 1 ? 's' : ''}`;

    grid.innerHTML = filtered.map(p => {
        const inCart = !!getCartItem(p.id);
        const liked = isInWishlist(p.id);
        const hasOld = p.oldPrice && p.oldPrice > p.price;
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="image-wrap">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" />
                    ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
                    <button class="wishlist-btn ${liked ? 'liked' : ''}" data-id="${p.id}" aria-label="Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="info">
                    <span class="category-label">${p.category}</span>
                    <div class="name">${p.name}</div>
                    <div class="price">
                        ${formatPrice(p.price)}
                        ${hasOld ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ''}
                    </div>
                    <button class="add-cart-btn ${inCart ? 'in-cart' : ''}" data-id="${p.id}">
                        <i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i>
                        ${inCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });

    grid.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleWishlist(id);
        });
    });

    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            const id = parseInt(card.dataset.id);
            showProductDetail(id);
        });
    });
}

// ============================================================
//  CART
// ============================================================
function addToCart(productId) {
    const existing = getCartItem(productId);
    if (existing) {
        existing.quantity += 1;
        showToast('Added another! 🛍️', 'success');
    } else {
        state.cart.push({ id: productId, quantity: 1 });
        showToast('Added to cart! 🛍️', 'success');
    }
    updateCartUI();
    renderProducts();
    saveState();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
    renderProducts();
    saveState();
    showToast('Removed from cart', 'success');
}

function changeQty(id, delta) {
    const item = getCartItem(id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== id);
    }
    updateCartUI();
    renderProducts();
    saveState();
}

function updateCartUI() {
    const count = getCartCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';

    if (state.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty.</p>
                <p style="font-size:0.85rem;margin-top:4px;">Start adding some vintage gems!</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }

    let html = '';
    state.cart.forEach(item => {
        const p = getProduct(item.id);
        if (!p) return;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img class="thumb" src="${p.image}" alt="${p.name}" />
                <div class="details">
                    <div class="name">${p.name}</div>
                    <div class="price">${formatPrice(p.price)}</div>
                    <div class="qty-control">
                        <button class="qty-dec" data-id="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-inc" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-id="${item.id}" aria-label="Remove">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });
    cartItems.innerHTML = html;

    cartItems.querySelectorAll('.qty-inc').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            changeQty(id, 1);
        });
    });
    cartItems.querySelectorAll('.qty-dec').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            changeQty(id, -1);
        });
    });
    cartItems.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    cartTotal.textContent = formatPrice(getCartTotal());
}

// ============================================================
//  WISHLIST
// ============================================================
function toggleWishlist(id) {
    const idx = state.wishlist.indexOf(id);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'success');
    } else {
        state.wishlist.push(id);
        showToast('Added to wishlist ❤️', 'success');
    }
    updateWishlistUI();
    renderProducts();
    saveState();
}

function updateWishlistUI() {
    wishlistBadge.textContent = state.wishlist.length;
    wishlistBadge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
}

// ============================================================
//  PRODUCT DETAIL (Modal)
// ============================================================
function showProductDetail(id) {
    const p = getProduct(id);
    if (!p) return;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.6);
        backdrop-filter: blur(6px); z-index: 3000;
        display: flex; align-items: center; justify-content: center;
        padding: 24px; animation: fadeIn 0.3s ease;
    `;
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
            document.body.style.overflow = '';
        }
    });

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: var(--bg); border-radius: var(--radius);
        max-width: 600px; width: 100%; max-height: 90vh;
        overflow-y: auto; padding: 32px;
        box-shadow: var(--shadow-hover);
        position: relative;
    `;

    const inCart = !!getCartItem(p.id);
    const liked = isInWishlist(p.id);

    modal.innerHTML = `
        <button style="position:absolute;top:16px;right:20px;font-size:1.4rem;color:var(--text-muted);background:none;border:none;cursor:pointer;" id="modalClose">
            <i class="fas fa-times"></i>
        </button>
        <img src="${p.image}" alt="${p.name}" style="width:100%;border-radius:var(--radius-sm);margin-bottom:16px;max-height:300px;object-fit:cover;background:var(--border);" />
        <div style="display:flex;justify-content:space-between;align-items:start;gap:12px;flex-wrap:wrap;">
            <div>
                <span style="font-size:0.8rem;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.5px;">${p.category}</span>
                <h2 style="font-family:var(--font-heading);font-size:1.6rem;margin:4px 0 8px;">${p.name}</h2>
            </div>
            ${p.badge ? `<span style="background:var(--primary);color:#fff;padding:4px 14px;border-radius:50px;font-size:0.75rem;font-weight:600;text-transform:uppercase;">${p.badge}</span>` : ''}
        </div>
        <p style="color:var(--text-light);margin:12px 0 16px;line-height:1.7;">${p.description}</p>
        <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:20px;">
            <span style="font-size:1.8rem;font-weight:700;color:var(--primary-dark);">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span style="font-size:1.1rem;color:var(--text-muted);text-decoration:line-through;">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <button class="detail-cart-btn" style="flex:1;padding:12px 24px;border-radius:50px;background:${inCart ? '#27ae60' : 'var(--primary)'};color:#fff;font-weight:700;font-size:1rem;border:none;transition:0.3s;display:flex;align-items:center;justify-content:center;gap:8px;">
                <i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i>
                ${inCart ? 'In Cart' : 'Add to Cart'}
            </button>
            <button class="detail-wish-btn" style="padding:12px 20px;border-radius:50px;border:2px solid var(--border);background:var(--bg-card);color:var(--text);font-weight:600;transition:0.3s;display:flex;align-items:center;gap:8px;">
                <i class="fas fa-heart" style="color:${liked ? 'var(--accent)' : 'var(--text-muted)'};"></i>
                ${liked ? 'Liked' : 'Wishlist'}
            </button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    modal.querySelector('#modalClose').addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = '';
    });

    modal.querySelector('.detail-cart-btn').addEventListener('click', () => {
        addToCart(p.id);
        overlay.remove();
        document.body.style.overflow = '';
        setTimeout(() => showProductDetail(p.id), 100);
    });

    modal.querySelector('.detail-wish-btn').addEventListener('click', () => {
        toggleWishlist(p.id);
        overlay.remove();
        document.body.style.overflow = '';
        setTimeout(() => showProductDetail(p.id), 100);
    });

    const escHandler = (e) => {
        if (e.key === 'Escape') {
            overlay.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// ============================================================
//  THEME
// ============================================================
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    state.theme = isDark ? 'light' : 'dark';
    saveState();
}

function loadTheme() {
    if (state.theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// ============================================================
//  PAYMENT & CHECKOUT (with COD)
// ============================================================
function openPayment() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    const total = getCartTotal();
    let itemsHtml = '';
    state.cart.forEach(item => {
        const p = getProduct(item.id);
        if (p) {
            itemsHtml +=
                `<div class="row"><span>${p.name} × ${item.quantity}</span><span>${formatPrice(p.price * item.quantity)}</span></div>`;
        }
    });
    paymentSummary.innerHTML = `
        ${itemsHtml}
        <div class="row total">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
        </div>
    `;
    payAmount.textContent = formatPrice(total);
    paymentOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset form and set default method
    document.querySelector('input[name="paymentMethod"][value="card"]').checked = true;
    cardDetails.style.display = 'block';
    codInfo.style.display = 'none';
    cardNumber.value = '';
    cardExpiry.value = '';
    cardCvv.value = '';
    cardName.value = '';
    payBtn.disabled = false;
    payBtn.innerHTML = `<i class="fas fa-lock"></i> Pay ${formatPrice(total)}`;
}

function closePaymentModal() {
    paymentOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function processPayment() {
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // If COD, skip card validation
    if (selectedMethod === 'cod') {
        // Place order directly with COD
        placeOrder('Cash on Delivery');
        return;
    }

    // Card validation
    const num = cardNumber.value.replace(/\s/g, '');
    if (num.length < 15) {
        showToast('Please enter a valid card number.', 'error');
        return;
    }
    if (!cardExpiry.value.match(/^\d{2}\/\d{2}$/)) {
        showToast('Please enter a valid expiry date (MM/YY).', 'error');
        return;
    }
    if (cardCvv.value.length < 3) {
        showToast('Please enter a valid CVV.', 'error');
        return;
    }
    if (cardName.value.trim().length < 2) {
        showToast('Please enter the cardholder name.', 'error');
        return;
    }

    const paymentMethod = 'Card ending in ' + num.slice(-4);
    placeOrder(paymentMethod);
}

function placeOrder(paymentMethod) {
    payBtn.disabled = true;
    payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

    setTimeout(() => {
        const total = getCartTotal();
        const order = {
            id: generateOrderId(),
            items: state.cart.map(item => ({
                ...item,
                name: getProduct(item.id)?.name || 'Unknown',
                price: getProduct(item.id)?.price || 0,
            })),
            total: total,
            date: new Date().toISOString(),
            status: 'processing',
            tracking: generateTracking(),
            paymentMethod: paymentMethod,
        };

        state.orders.unshift(order);
        state.cart = [];
        updateCartUI();
        renderProducts();
        saveState();
        updateOrdersUI();

        closePaymentModal();
        showToast(`🎉 Order placed! Order #${order.id}`, 'success');

        ordersBadge.textContent = state.orders.length;
        ordersBadge.style.display = state.orders.length > 0 ? 'flex' : 'none';

        payBtn.disabled = false;
        payBtn.innerHTML = `<i class="fas fa-lock"></i> Pay ${formatPrice(total)}`;

        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
}

// ============================================================
//  ORDERS / HISTORY
// ============================================================
function updateOrdersUI() {
    ordersBadge.textContent = state.orders.length;
    ordersBadge.style.display = state.orders.length > 0 ? 'flex' : 'none';

    if (state.orders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders">
                <i class="fas fa-receipt"></i>
                <h3>No orders yet</h3>
                <p>Your order history will appear here once you make a purchase.</p>
            </div>
        `;
        return;
    }

    let html = '';
    state.orders.forEach(order => {
        const statusClass = order.status;
        const statusLabel = order.status.charAt(0).toUpperCase() + order.status.slice(1);
        const date = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const steps = [
            { key: 'processing', label: 'Processing' },
            { key: 'shipped', label: 'Shipped' },
            { key: 'delivered', label: 'Delivered' }
        ];
        const currentIdx = getStatusIndex(order.status);

        let stepsHtml = '';
        steps.forEach((step, idx) => {
            const isDone = idx < currentIdx;
            const isActive = idx === currentIdx;
            const cls = isDone ? 'done' : (isActive ? 'active' : '');
            stepsHtml += `
                    <div class="step ${cls}">
                        <span class="dot"></span>
                        <span class="label">${step.label}</span>
                    </div>
                    ${idx < steps.length - 1 ? `<div class="step-line ${isDone ? 'done' : ''}"></div>` : ''}
                `;
        });

        html += `
            <div class="order-card">
                <div class="order-top">
                    <div>
                        <div class="order-id">#${order.id}</div>
                        <div class="order-date">${date}</div>
                    </div>
                    <span class="order-status ${statusClass}">
                        <i class="fas ${order.status === 'processing' ? 'fa-spinner fa-pulse' : order.status === 'shipped' ? 'fa-truck' : 'fa-check-circle'}"></i>
                        ${statusLabel}
                    </span>
                </div>
                <div class="order-items">
                    ${order.items.map(i => `<span class="item-tag">${i.name} × ${i.quantity}</span>`).join('')}
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                    <span class="order-total">Total: ${formatPrice(order.total)}</span>
                    <span style="font-size:0.8rem;color:var(--text-muted);">
                        <i class="fas ${order.paymentMethod.includes('Card') ? 'fa-credit-card' : 'fa-money-bill-wave'}"></i> 
                        ${order.paymentMethod}
                    </span>
                </div>
                <div class="order-tracking">
                    <span class="tracking-label"><i class="fas fa-map-pin"></i> Tracking:</span>
                    <span class="tracking-number">${order.tracking}</span>
                </div>
                <div class="tracking-steps">
                    ${stepsHtml}
                </div>
            </div>
        `;
    });
    ordersList.innerHTML = html;
}

function openOrders() {
    ordersOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateOrdersUI();
}

function closeOrdersModal() {
    ordersOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================================
//  PAYMENT METHOD TOGGLE
// ============================================================
paymentMethods.forEach(method => {
    method.addEventListener('change', (e) => {
        const isCard = e.target.value === 'card';
        cardDetails.style.display = isCard ? 'block' : 'none';
        codInfo.style.display = isCard ? 'none' : 'block';
        // Update button text
        const total = getCartTotal();
        if (isCard) {
            payBtn.innerHTML = `<i class="fas fa-lock"></i> Pay ${formatPrice(total)}`;
        } else {
            payBtn.innerHTML = `<i class="fas fa-truck"></i> Place Order (COD)`;
        }
    });
});

// ============================================================
//  EVENTS
// ============================================================

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeCategory = btn.dataset.category;
        renderProducts();
        saveState();
    });
});

searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderProducts();
    saveState();
});

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
});

cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
});

checkoutBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    setTimeout(openPayment, 300);
});

closePayment.addEventListener('click', closePaymentModal);
paymentOverlay.addEventListener('click', (e) => {
    if (e.target === paymentOverlay) closePaymentModal();
});
payBtn.addEventListener('click', processPayment);

cardNumber.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    let formatted = '';
    for (let i = 0; i < val.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += val[i];
    }
    e.target.value = formatted;
});

cardExpiry.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length >= 2) {
        val = val.slice(0, 2) + '/' + val.slice(2);
    }
    e.target.value = val;
});

cardCvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
});

ordersBtn.addEventListener('click', openOrders);
closeOrders.addEventListener('click', closeOrdersModal);
ordersOverlay.addEventListener('click', (e) => {
    if (e.target === ordersOverlay) closeOrdersModal();
});

wishlistBtn.addEventListener('click', () => {
    if (state.wishlist.length === 0) {
        showToast('Your wishlist is empty. Start saving favorites!', 'error');
    } else {
        const names = state.wishlist.map(id => getProduct(id)?.name).filter(Boolean).join(', ');
        showToast(`❤️ Wishlist: ${names}`, 'success');
    }
});

themeToggle.addEventListener('click', toggleTheme);

// ============================================================
//  INIT
// ============================================================
loadState();
loadTheme();
updateCartUI();
updateWishlistUI();
updateOrdersUI();
renderProducts();
searchInput.value = state.searchQuery || '';

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('open')) {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
        if (paymentOverlay.classList.contains('open')) {
            closePaymentModal();
        }
        if (ordersOverlay.classList.contains('open')) {
            closeOrdersModal();
        }
    }
});

console.log('🕰️ RetroVault — Vintage Marketplace ready!');
console.log(`📦 ${PRODUCTS.length} products loaded.`);
console.log(`📋 ${state.orders.length} orders in history.`);
console.log('💾 State loaded from localStorage.');
