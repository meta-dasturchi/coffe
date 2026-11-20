// ==========================================
// 1. META COFFEE — 20 TA MAHSULOT MA'LUMOTLARI
// ==========================================
const COFFEE_PRODUCTS = [
    {
        id: 1,
        name: "Espresso",
        category: "hot",
        basePrice: 15000,
        description: "Boy aroma va qalin krema qatlamiga ega klassik italyan espressosi.",
        details: "100% Efiopiya va Braziliya Arabica donlaridan 9 bar bosim ostida tayyorlangan sof klassik espresso.",
        caffeine: "75 mg",
        roast: "Dark-Medium",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Double Espresso",
        category: "hot",
        basePrice: 19000,
        description: "Ikki hissa kuchli va to‘yingan ta'mga ega energiya manbai.",
        details: "Ikki porsiya konsentrlangan espresso — kunni tetik boshlashni xohlovchilar uchun ideal tanlov.",
        caffeine: "150 mg",
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Americano",
        category: "hot",
        basePrice: 16000,
        description: "Toza issiq suv bilan yumshatilgan chuqur va muvozanatli qora qahva.",
        details: "Yangi tortilgan espresso va filtrlangan yumshoq suvning mukammal uyg‘unligi.",
        caffeine: "95 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Cappuccino",
        category: "hot",
        basePrice: 18000,
        description: "Espresso, iliq sut va mayin baxmaldek sut ko‘pigining klassik uyg‘unligi.",
        details: "An'anaviy italyan retsepti asosida tayyorlangan qalin va kremsimon ko‘pikli kapuchino.",
        caffeine: "80 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Latte",
        category: "hot",
        basePrice: 20000,
        description: "Ko‘p miqdordagi ipakdek sut va yumshoq espresso asosidagi mayin ichimlik.",
        details: "Baristalarimiz tomonidan maxsus latte-art bezagi bilan taqdim etiladigan yumshoq sutli qahva.",
        caffeine: "80 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Vanilla Latte",
        category: "hot",
        basePrice: 22000,
        description: "Tabiiy Madagaskar vanili siropi qo‘shilgan xushbo‘y va mayin latte.",
        details: "Klassik latte va tabiiy vanil ekstraktining shirin, muvozanatli uyg‘unligi.",
        caffeine: "80 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Caramel Macchiato",
        category: "hot",
        basePrice: 24000,
        description: "Baxmal sut, vanil notalari va ustidan quyilgan oltin karamel sousi.",
        details: "Ko‘pirtirilgan sut ustiga quyilgan espresso va uy sharoitida tayyorlangan tuzli karamel.",
        caffeine: "85 mg",
        roast: "Medium-Dark",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Mocha",
        category: "hot",
        basePrice: 23000,
        description: "Belgiya qora shokoladi, espresso va issiq sutning boy uyg‘unligi.",
        details: "Qahva va haqiqiy kakao-shokolad ta'mini sevuvchilar uchun maxsus tayyorlangan ichimlik.",
        caffeine: "90 mg",
        roast: "Medium-Dark",
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "White Mocha",
        category: "hot",
        basePrice: 25000,
        description: "Kremsimon oq shokolad va espresso asosidagi nozik shirin ichimlik.",
        details: "Oq shokolad sousi bilan boyitilgan ipakdek sut va yangi tortilgan espresso.",
        caffeine: "85 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Flat White",
        category: "hot",
        basePrice: 21000,
        description: "Ristretto espressosi va yupqa mikro-ko‘pikli sutning to‘yingan ta'mi.",
        details: "Avstraliya uslubidagi kuchliroq qahva ta'miga ega, ipakdek silliq sutli ichimlik.",
        caffeine: "130 mg",
        roast: "Medium-Dark",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Cortado",
        category: "hot",
        basePrice: 18000,
        description: "Teng nisbatdagi espresso va iliq sutdan iborat ispan klassikasi.",
        details: "Qahva nordonligini yumshatuvchi, ammo uning haqiqiy kuchini saqlab qoluvchi ichimlik.",
        caffeine: "110 mg",
        roast: "Medium-Dark",
        image: "https://images.unsplash.com/photo-1519532059956-a63a37af5deb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Macchiato",
        category: "hot",
        basePrice: 17000,
        description: "Bir qoshiq mayin sut ko‘pigi bilan bezatilgan sof espresso.",
        details: "Sof espresso ta'mini xush ko‘ruvchilar uchun yengil sut buluti bilan boyitilgan variant.",
        caffeine: "80 mg",
        roast: "Dark",
        image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Turkish Coffee",
        category: "hot",
        basePrice: 19000,
        description: "Jezvada mayin qaynatilgan, kardamon notalariga ega an'anaviy sharqona qahva.",
        details: "O‘ta mayin yanchilgan qahva donlaridan an'anaviy usulda tayyorlanadi.",
        caffeine: "100 mg",
        roast: "Medium-Dark",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Iced Americano",
        category: "cold",
        basePrice: 18000,
        description: "Kristall muz bo‘laklari va sovuq suv bilan tetiklantiruvchi qora qahva.",
        details: "Issiq kunlarda tezkor tetiklik bag‘ishlovchi toza va yorqin ta'mli sovuq ichimlik.",
        caffeine: "95 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Iced Latte",
        category: "cold",
        basePrice: 21000,
        description: "Muzdek sut va yangi espressoning yengil va tetiklantiruvchi uyg‘unligi.",
        details: "Muz bo‘laklari ustiga quyilgan sovuq sut va ikki qatlamli espresso.",
        caffeine: "80 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Iced Caramel Latte",
        category: "cold",
        basePrice: 24000,
        description: "Sovuq sut, muz, espresso va karamel siropining salqin mukammalligi.",
        details: "Stakan devorlari karamel sousi bilan bezatilgan salqin va shirin latte.",
        caffeine: "85 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Cold Brew",
        category: "cold",
        basePrice: 23000,
        description: "16 soat davomida sovuq suvda damlangan, past nordonlikka ega chuqur ta'm.",
        details: "Maxsus shisha kolbalarda uzoq vaqt ekstraksiya qilingan tabiiy shirin notali sovuq qahva.",
        caffeine: "155 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        name: "Frappuccino",
        category: "cold",
        basePrice: 26000,
        description: "Muz, qahva, sut va mayin qaymoqli ko‘pik bilan aralashtirilgan desert ichimlik.",
        details: "Blenderda muz bilan ko‘pirtirilgan va usti qaymoq hamda shokolad bilan bezatilgan salqin ichimlik.",
        caffeine: "75 mg",
        roast: "Medium",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        name: "Affogato",
        category: "cold",
        basePrice: 25000,
        description: "Bir sharik vanilli italyan muzqaymog‘i ustiga quyilgan issiq espresso.",
        details: "Issiq va sovuq haroratlar qarama-qarshiligidan tug‘ilgan mashhur italyan qahva deserti.",
        caffeine: "75 mg",
        roast: "Dark-Medium",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        name: "Hot Chocolate",
        category: "hot",
        basePrice: 22000,
        description: "Haqiqiy eritilgan shokolad va iliq sutdan tayyorlangan quyuq ichimlik.",
        details: "Kofeinsiz, mayin va boy kakao ta'miga ega premium issiq shokolad.",
        caffeine: "5 mg",
        roast: "Cocoa Blend",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
    }
];

// Stakan hajmlari va qo'shimcha narx farqlari
const CUP_SIZES = [
    { key: "small", label: "Small", ml: "250 ml", extra: 0 },
    { key: "medium", label: "Medium", ml: "350 ml", extra: 5000 },
    { key: "large", label: "Large", ml: "450 ml", extra: 10000 }
];

// ==========================================
// 2. HOLAT (STATE) VA LOCALSTORAGE
// ==========================================
let selectedSizes = {}; // Har bir mahsulot uchun tanlangan hajm
COFFEE_PRODUCTS.forEach(p => {
    selectedSizes[p.id] = "small";
});

let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let cart = JSON.parse(localStorage.getItem("meta_coffee_cart")) || [];

// Narxni chiroyli formatlash (masalan: 20 000 so‘m)
function formatPrice(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

function getProductPrice(product, sizeKey) {
    const sizeObj = CUP_SIZES.find(s => s.key === sizeKey) || CUP_SIZES[0];
    return product.basePrice + sizeObj.extra;
}

function saveCart() {
    localStorage.setItem("meta_coffee_cart", JSON.stringify(cart));
}

// ==========================================
// 3. MAHSULOTLARNI RENDER QILISH VA FILTER
// ==========================================
const productsGrid = document.getElementById("productsGrid");
const noProductsMsg = document.getElementById("noProductsMsg");

function renderProducts() {
    let filtered = COFFEE_PRODUCTS.filter(product => {
        const matchesCategory = currentCategory === "all" || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(currentSearch.toLowerCase().trim());
        return matchesCategory && matchesSearch;
    });

    if (currentSort === "price-asc") {
        filtered.sort((a, b) => getProductPrice(a, selectedSizes[a.id]) - getProductPrice(b, selectedSizes[b.id]));
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => getProductPrice(b, selectedSizes[b.id]) - getProductPrice(a, selectedSizes[a.id]));
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = "";
        noProductsMsg.classList.remove("hidden");
        return;
    }

    noProductsMsg.classList.add("hidden");

    productsGrid.innerHTML = filtered.map(product => {
        const activeSizeKey = selectedSizes[product.id];
        const activePrice = getProductPrice(product, activeSizeKey);

        const sizeButtonsHtml = CUP_SIZES.map(size => `
            <button 
                type="button"
                class="size-option ${activeSizeKey === size.key ? "active" : ""}" 
                onclick="selectSize(${product.id}, '${size.key}')"
            >
                ${size.label}
                <span>${size.ml}</span>
            </button>
        `).join("");

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-img-wrap">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="category-pill">${product.category === "hot" ? "Hot Coffee" : "Cold Coffee"}</span>
                    <button type="button" class="info-detail-btn" onclick="openProductDetail(${product.id})" title="Batafsil ma'lumot">i</button>
                </div>
                <div class="product-body">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    
                    <div class="size-selector">
                        ${sizeButtonsHtml}
                    </div>

                    <div class="product-bottom">
                        <span class="product-price" id="price-${product.id}">${formatPrice(activePrice)}</span>
                        <button type="button" class="add-cart-btn" onclick="addToCart(${product.id})">
                            + Add to Cart
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// Hajm tanlash funksiyasi
window.selectSize = function(productId, sizeKey) {
    selectedSizes[productId] = sizeKey;
    if (currentSort !== "default") {
        renderProducts();
        return;
    }
    const card = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (!card) return;

    const product = COFFEE_PRODUCTS.find(p => p.id === productId);
    const newPrice = getProductPrice(product, sizeKey);

    const priceEl = document.getElementById(`price-${productId}`);
    if (priceEl) priceEl.textContent = formatPrice(newPrice);

    const buttons = card.querySelectorAll(".size-option");
    buttons.forEach((btn, idx) => {
        btn.classList.toggle("active", CUP_SIZES[idx].key === sizeKey);
    });
};

// Batafsil ma'lumot oynasi
const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");

window.openProductDetail = function(productId) {
    const product = COFFEE_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const activeSizeKey = selectedSizes[product.id];
    const sizeObj = CUP_SIZES.find(s => s.key === activeSizeKey);
    const price = getProductPrice(product, activeSizeKey);

    detailModalContent.innerHTML = `
        <div class="detail-grid">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <span class="section-subtitle">${product.category === "hot" ? "HOT COFFEE" : "COLD COFFEE"}</span>
                <h3 style="font-size:1.7rem; margin-bottom:8px;">${product.name}</h3>
                <p style="color:var(--text-muted); margin-bottom:14px;">${product.details}</p>
                <div class="detail-specs">
                    <div><strong>Kofein</strong><br>${product.caffeine}</div>
                    <div><strong>Qovurish</strong><br>${product.roast}</div>
                    <div><strong>Tanlangan hajm</strong><br>${sizeObj.label} (${sizeObj.ml})</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                    <strong style="font-size:1.25rem;">${formatPrice(price)}</strong>
                    <button type="button" class="btn btn-primary" onclick="addToCart(${product.id}); closeModal(detailModal);">
                        Savatchaga qo‘shish
                    </button>
                </div>
            </div>
        </div>
    `;
    detailModal.classList.remove("hidden");
};

document.getElementById("closeDetailModal").addEventListener("click", () => closeModal(detailModal));

// Search, Filter va Sort hodisalari
document.getElementById("searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
});

document.getElementById("categoryTabs").addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    currentCategory = e.target.dataset.category;
    renderProducts();
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
});

// ==========================================
// 4. SHOPPING CART (SAVATCHA) FUNKSIYALARI
// ==========================================
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartBadge = document.getElementById("cartBadge");
const cartTotalCount = document.getElementById("cartTotalCount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const openCartBtn = document.getElementById("openCartBtn");

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
}

openCartBtn.addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

window.addToCart = function(productId) {
    const product = COFFEE_PRODUCTS.find(p => p.id === productId);
    const sizeKey = selectedSizes[productId];
    const sizeObj = CUP_SIZES.find(s => s.key === sizeKey);
    const unitPrice = getProductPrice(product, sizeKey);

    const itemKey = `${product.id}-${sizeKey}`;
    const existingItem = cart.find(item => item.key === itemKey);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            key: itemKey,
            id: product.id,
            name: product.name,
            image: product.image,
            sizeLabel: `${sizeObj.label} (${sizeObj.ml})`,
            unitPrice: unitPrice,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();

    // Savatcha animatsiyasi va bildirishnoma
    openCartBtn.classList.remove("bump");
    void openCartBtn.offsetWidth;
    openCartBtn.classList.add("bump");
    showToast(`${product.name} (${sizeObj.label}) savatchaga qo‘shildi!`);
};

window.changeQuantity = function(itemKey, delta) {
    const index = cart.findIndex(item => item.key === itemKey);
    if (index === -1) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    updateCartUI();
};

window.removeFromCart = function(itemKey) {
    cart = cart.filter(item => item.key !== itemKey);
    saveCart();
    updateCartUI();
};

document.getElementById("clearCartBtn").addEventListener("click", () => {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Savatcha tozalandi");
});

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

    cartBadge.textContent = totalCount;
    cartTotalCount.textContent = `${totalCount} dona`;
    cartTotalPrice.textContent = formatPrice(totalAmount);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-box">
                <p style="font-size:1.1rem; font-weight:600; margin-bottom:8px;">Savatchangiz bo‘sh</p>
                <p style="font-size:0.9rem;">META COFFEE menyusidan o‘zingizga yoqqan ichimlikni tanlang.</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-meta">${item.sizeLabel} • ${formatPrice(item.unitPrice)}</div>
                <div class="cart-item-controls">
                    <div class="qty-box">
                        <button type="button" class="qty-btn" onclick="changeQuantity('${item.key}', -1)">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" class="qty-btn" onclick="changeQuantity('${item.key}', 1)">+</button>
                    </div>
                    <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
                    <button type="button" class="remove-item-btn" onclick="removeFromCart('${item.key}')">O‘chirish</button>
                </div>
            </div>
        </div>
    `).join("");
}

// ==========================================
// 5. CHECKOUT VA VALIDATSIYA
// ==========================================
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");
const checkoutForm = document.getElementById("checkoutForm");

function closeModal(modalEl) {
    modalEl.classList.add("hidden");
}

document.getElementById("openCheckoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Buyurtma berish uchun avval savatchaga mahsulot qo‘shing!");
        return;
    }
    closeCart();

    const listEl = document.getElementById("checkoutItemsList");
    listEl.innerHTML = cart.map(item => `
        <li>
            <span>${item.name} (${item.sizeLabel}) × ${item.quantity}</span>
            <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
        </li>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    document.getElementById("checkoutTotalAmount").textContent = formatPrice(total);

    checkoutModal.classList.remove("hidden");
});

document.getElementById("closeCheckoutModal").addEventListener("click", () => closeModal(checkoutModal));
document.getElementById("closeSuccessModal").addEventListener("click", () => closeModal(successModal));

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const addressInput = document.getElementById("customerAddress");

    const nameErr = document.getElementById("nameError");
    const phoneErr = document.getElementById("phoneError");
    const addressErr = document.getElementById("addressError");

    nameErr.textContent = "";
    phoneErr.textContent = "";
    addressErr.textContent = "";

    let isValid = true;

    if (nameInput.value.trim().length < 3) {
        nameErr.textContent = "Iltimos, ism va familiyangizni to‘liq kiriting.";
        isValid = false;
    }

    const phoneCleaned = phoneInput.value.replace(/[\s\-()]/g, "");
    const phoneRegex = /^\+?\d{9,15}$/;
    if (!phoneRegex.test(phoneCleaned)) {
        phoneErr.textContent = "Telefon raqam formati noto‘g‘ri (masalan: +998 90 123 45 67).";
        isValid = false;
    }

    if (addressInput.value.trim().length < 5) {
        addressErr.textContent = "Yetkazib berish manzilini aniqroq kiriting.";
        isValid = false;
    }

    if (!isValid) return;

    const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("successOrderDetails").innerHTML = `
        Hurmatli <strong>${nameInput.value.trim()}</strong>, sizning <strong>#${orderNumber}</strong>-sonli buyurtmangiz (${formatPrice(total)}) META COFFEE baristalariga yuborildi!
    `;

    cart = [];
    saveCart();
    updateCartUI();
    checkoutForm.reset();

    closeModal(checkoutModal);
    successModal.classList.remove("hidden");
});

// ==========================================
// 6. MOBILE NAVBAR, SLIDER, CONTACT & ANIMATIONS
// ==========================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("open");
    });
});

// Testimonial Slider
const track = document.getElementById("testimonialTrack");
const slides = document.querySelectorAll(".testimonial-card");
let slideIndex = 0;

function updateSlider() {
    const visibleCards = window.innerWidth <= 768 ? 1 : 2;
    const maxIndex = Math.max(0, slides.length - visibleCards);
    if (slideIndex > maxIndex) slideIndex = 0;
    if (slideIndex < 0) slideIndex = maxIndex;

    const cardWidth = slides[0].offsetWidth + 24;
    track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
}

document.getElementById("nextReviewBtn").addEventListener("click", () => {
    slideIndex++;
    updateSlider();
});

document.getElementById("prevReviewBtn").addEventListener("click", () => {
    slideIndex--;
    updateSlider();
});

window.addEventListener("resize", updateSlider);

// Contact Form Demo Submission
const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        contactFeedback.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
        contactFeedback.style.background = "rgba(192, 57, 43, 0.14)";
        contactFeedback.style.color = "#C0392B";
        contactFeedback.classList.remove("hidden");
        return;
    }

    contactFeedback.textContent = `Rahmat, ${name}! Xabaringiz META COFFEE jamoasiga muvaffaqiyatli yuborildi.`;
    contactFeedback.style.background = "rgba(46, 139, 87, 0.14)";
    contactFeedback.style.color = "#1E6B3F";
    contactFeedback.classList.remove("hidden");
    contactForm.reset();
});

// Toast xabarnoma
let toastTimer;
function showToast(text) {
    const toast = document.getElementById("toastNotification");
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// Scroll Reveal animatsiyasi
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Dastlabki yuklash
renderProducts();
updateCartUI();