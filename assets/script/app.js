const products = [
  {
    id: 1,
    name: "Z ARCHIWUM X",
    desc: "SOS I MOZZARELLA I PASTA TRUFLOWA I NDUJA I MASCARPONE",
    price: 44.5,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    category: "new",
  },
  {
    id: 2,
    name: "CALZONE",
    desc: "SOS | SER | SZYNKA | PIECZARKI",
    price: 42.0,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    category: "new",
  },
  {
    id: 3,
    name: "TRUFFLE BURGER",
    desc: "Premium beef, truffle mayo, caramelized onions",
    price: 85.0,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    category: "new",
  },
  {
    id: 18,
    name: "CHICKEN TENDERS",
    desc: "Crispy fried chicken strips with honey mustard",
    price: 60.0,
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    category: "new",
  },

  {
    id: 5,
    name: "ALE URWAŁ",
    desc: "BBQ, Ser, Bekon, Gorgonzola, Chorizo, Chutney, Nachos",
    price: 42.5,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    category: "pizza",
  },
  {
    id: 6,
    name: "MARSJANIN",
    desc: "Sos pomidorowy, ser, boczek, kiełbasa, chutney z czerwonej cebuli",
    price: 42.5,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    category: "pizza",
  },
  {
    id: 7,
    name: "MARGHERITA",
    desc: "Classic tomato sauce, fresh mozzarella, basil",
    price: 35.0,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    category: "pizza",
  },
  {
    id: 8,
    name: "PEPPERONI",
    desc: "Tomato sauce, mozzarella, double pepperoni",
    price: 40.0,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    category: "pizza",
  },
  {
    id: 20,
    name: "HAWAIIAN",
    desc: "Tomato sauce, mozzarella, ham, and fresh pineapple",
    price: 38.0,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    category: "pizza",
  },
  {
    id: 21,
    name: "VEGGIE SUPREME",
    desc: "Tomato sauce, mozzarella, bell peppers, onions, olives",
    price: 37.0,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    category: "pizza",
  },

  {
    id: 9,
    name: "KOSMICZNA NIESPODZIANKA",
    desc: "Sos curry | Ser | Kurczak kebab | Brokuł | Kukurydza",
    price: 43.5,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    category: "sets",
  },
  {
    id: 10,
    name: "FAMILY COMBO",
    desc: "2 Large Pizzas, 10 Wings, 2 Fries, 1L Drink",
    price: 150.0,
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    category: "sets",
  },
  {
    id: 11,
    name: "PARTY BOX",
    desc: "3 Medium Pizzas, Cheesy Bread, 2L Drink",
    price: 180.0,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    category: "sets",
  },
  {
    id: 22,
    name: "COUPLE DEAL",
    desc: "1 Medium Pizza, 2 Drinks, 1 Dessert",
    price: 90.0,
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    category: "sets",
  },
  {
    id: 23,
    name: "KIDS MEAL",
    desc: "Small Margherita, Juice Box, Toy",
    price: 50.0,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    category: "sets",
  },

  {
    id: 12,
    name: "COCA COLA",
    desc: "Napój gazowany 0.5L",
    price: 8.5,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
    category: "drinks",
  },
  {
    id: 13,
    name: "PEPSI",
    desc: "Cold refreshing Pepsi 0.5L",
    price: 8.5,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
    category: "drinks",
  },
  {
    id: 14,
    name: "FRESH ORANGE",
    desc: "Freshly squeezed orange juice 300ml",
    price: 15.0,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
    category: "drinks",
  },
  {
    id: 24,
    name: "SPRITE",
    desc: "Lemon-lime soda 0.5L",
    price: 8.5,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
    category: "drinks",
  },

  {
    id: 15,
    name: "CZOSNKOWY",
    desc: "Sos czosnkowy domowej roboty",
    price: 4.0,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    category: "sauces",
  },
  {
    id: 16,
    name: "BBQ SAUCE",
    desc: "Smoky classic BBQ sauce",
    price: 4.0,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    category: "sauces",
  },
  {
    id: 17,
    name: "SPICY MAYO",
    desc: "Creamy and spicy mayonnaise",
    price: 5.0,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    category: "sauces",
  },
  {
    id: 26,
    name: "KETCHUP",
    desc: "Classic tomato ketchup",
    price: 2.0,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    category: "sauces",
  },
  {
    id: 27,
    name: "SWEET CHILI",
    desc: "Asian style sweet chili sauce",
    price: 5.0,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    category: "sauces",
  },
];

let cart = [];
let currentCategory = "new";

const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;
const iconDark = document.getElementById("theme-icon-dark");
const iconLight = document.getElementById("theme-icon-light");

themeToggle.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  iconDark.classList.toggle("hidden");
  iconLight.classList.toggle("hidden");
});

const productsGrid = document.getElementById("products-grid");

const cartBadge = document.getElementById("cart-badge");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const cartModal = document.getElementById("cart-modal");
const cartModalPanel = document.getElementById("cart-modal-panel");
const cartModalBackdrop = document.getElementById("cart-modal-backdrop");
const cartModalClose = document.getElementById("cart-modal-close");

const views = [
  {
    container: document.getElementById("cart-container"),
    items: document.getElementById("cart-items"),
    empty: document.getElementById("empty-cart"),
    total: document.getElementById("cart-total"),
    checkout: document.getElementById("checkout-btn"),
  },
  {
    container: document.getElementById("cart-container-mobile"),
    items: document.getElementById("cart-items-mobile"),
    empty: document.getElementById("empty-cart-mobile"),
    total: document.getElementById("cart-total-mobile"),
    checkout: document.getElementById("checkout-btn-mobile"),
  },
];

function filterCategory(category) {
  currentCategory = category;
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((btn) => {
    if (btn.dataset.cat === category) {
      btn.className =
        "category-btn px-6 py-2.5 rounded-full bg-brand text-white font-bold text-sm whitespace-nowrap tracking-wide border border-brand shrink-0 transition-colors duration-200";
    } else {
      btn.className =
        "category-btn px-6 py-2.5 rounded-full bg-white dark:bg-darkPanel border border-gray-200 dark:border-darkBorder text-gray-700 dark:text-gray-300 font-bold text-sm hover:border-brand/50 transition-colors duration-200 whitespace-nowrap tracking-wide shrink-0";
    }
  });

  renderProducts();
}

function renderProducts() {
  const filteredProducts = products.filter(
    (p) => p.category === currentCategory,
  );

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML =
      '<div class="col-span-full text-center py-10 text-gray-500 font-medium transition-colors duration-200">No products found in this category.</div>';
    return;
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
<div class="glass-panel bg-white/70 dark:bg-darkPanel/70 border border-gray-200 dark:border-darkBorder p-3 rounded-3xl flex gap-4 bento-hover transition-all duration-200 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
<div class="w-28 h-28 rounded-2xl overflow-hidden shrink-0 relative">
<img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-200"></div>
</div>
<div class="flex-1 flex flex-col justify-between py-1 relative z-10 min-w-0">
<div>
<h3 class="font-bold text-sm tracking-tight uppercase transition-colors duration-200">${product.name}</h3>
<p class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-snug uppercase transition-colors duration-200">${product.desc}</p>
</div>
<div class="flex items-center justify-between mt-2">
<span class="font-bold text-brand transition-colors duration-200">${product.price.toFixed(2)} EGP</span>
<button onclick="addToCart(${product.id})" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-brand hover:text-white dark:hover:bg-brand dark:hover:text-white transition-colors duration-200 border border-gray-200 dark:border-gray-700 hover:border-brand shrink-0">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
</button>
</div>
</div>
</div>
`,
    )
    .join("");
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  updateCart();
}

function updateQuantity(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter((i) => i.id !== id);
    updateCart();
  }
}

function cartItemMarkup(item) {
  return `
<div class="flex items-center justify-between bg-white dark:bg-gray-800/50 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-200">
<div class="flex items-center gap-3 min-w-0">
<div class="w-12 h-12 rounded-xl overflow-hidden shrink-0">
<img src="${item.img}" class="w-full h-full object-cover">
</div>
<div class="min-w-0">
<h4 class="text-xs font-bold uppercase truncate max-w-[120px] transition-colors duration-200">${item.name}</h4>
<p class="text-xs text-brand font-semibold mt-0.5 transition-colors duration-200">${item.price.toFixed(2)} EGP</p>
</div>
</div>
<div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700 shrink-0 transition-colors duration-200">
<button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-700 text-gray-500 transition-colors duration-200">-</button>
<span class="text-xs font-bold w-4 text-center transition-colors duration-200">${item.quantity}</span>
<button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-700 text-gray-500 transition-colors duration-200">+</button>
</div>
</div>
`;
}

function updateCart() {
  let total = 0;
  let count = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    count += item.quantity;
  });

  const itemsHtml = cart.map(cartItemMarkup).join("");

  views.forEach((view) => {
    if (cart.length === 0) {
      view.empty.classList.remove("hidden");
      view.items.classList.add("hidden");
      view.total.textContent = "0.00 EGP";
      view.checkout.disabled = true;
    } else {
      view.empty.classList.add("hidden");
      view.items.classList.remove("hidden");
      view.items.innerHTML = itemsHtml;
      view.total.textContent = total.toFixed(2) + " EGP";
      view.checkout.disabled = false;
    }
  });

  if (count > 0) {
    cartBadge.textContent = count > 99 ? "99+" : count;
    cartBadge.classList.remove("hidden");
    cartBadge.classList.add("flex");
  } else {
    cartBadge.classList.add("hidden");
    cartBadge.classList.remove("flex");
  }
}

function openCartModal() {
  cartModal.classList.remove("hidden");
  requestAnimationFrame(() => {
    cartModalPanel.classList.remove("translate-y-full", "sm:translate-x-full");
  });
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  cartModalPanel.classList.add("translate-y-full", "sm:translate-x-full");
  document.body.style.overflow = "";
  setTimeout(() => {
    cartModal.classList.add("hidden");
  }, 350);
}

cartToggleBtn.addEventListener("click", openCartModal);
cartModalClose.addEventListener("click", closeCartModal);
cartModalBackdrop.addEventListener("click", closeCartModal);

renderProducts();
updateCart();
