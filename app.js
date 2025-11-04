// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573117650829'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  // ===== TAMAÑOS =====
  {
    id: 'Helado0',
    category: 'Helado',
    title: 'Helado Pequeño',
    price: 8800,
    desc: 'Justo para refrescarte y consentirte.',
    ingredients: ['Brownie', 'Queso', 'Chocmelos', 'Chócaramo', 'Quipitos', 'Leche condensada', 'Chips de chocolate', 'Mango', 'Oreo', 'Milo', 'Hershey’s', 'Arequipe Alpina', 'Piazza', 'Chokis', 'Minichips', 'Maní', 'Klim', 'Chocolatina Jumbo'],
    extras: [
      { name: 'Brownie', price: 3000 },
      { name: 'Queso', price: 3000 },
      { name: 'Chocmelos', price: 3000 },
      { name: 'Chócaramo', price: 3000 },
      { name: 'Quipitos', price: 3000 },
      { name: 'Leche condensada', price: 3000 },
      { name: 'Chips de chocolate', price: 3000 },
      { name: 'Mango', price: 3000 },
      { name: 'Oreo', price: 3000 },
      { name: 'Milo', price: 3000 },
      { name: 'Hershey’s', price: 3000 },
      { name: 'Arequipe Alpina', price: 3000 },
      { name: 'Piazza', price: 3000 },
      { name: 'Chokis', price: 3000 },
      { name: 'Minichips', price: 3000 },
      { name: 'Maní', price: 3000 },
      { name: 'Klim', price: 3000 },
      { name: 'Chocolatina Jumbo', price: 3000 }
    ],
    image: 'images/helado1.png'
  },
  {
    id: 'Helado1',
    category: 'Helado',
    title: 'Helado Mediano',
    price: 11800,
    desc: 'Una porción ideal para compartir.',
    ingredients: ['Brownie', 'Queso', 'Chocmelos', 'Chócaramo', 'Quipitos', 'Leche condensada', 'Chips de chocolate', 'Mango', 'Oreo', 'Milo', 'Hershey’s', 'Arequipe Alpina', 'Piazza', 'Chokis', 'Minichips', 'Maní', 'Klim', 'Chocolatina Jumbo'],
    extras: [
      { name: 'Brownie', price: 3000 },
      { name: 'Queso', price: 3000 },
      { name: 'Chocmelos', price: 3000 },
      { name: 'Chócaramo', price: 3000 },
      { name: 'Quipitos', price: 3000 },
      { name: 'Leche condensada', price: 3000 },
      { name: 'Chips de chocolate', price: 3000 },
      { name: 'Mango', price: 3000 },
      { name: 'Oreo', price: 3000 },
      { name: 'Milo', price: 3000 },
      { name: 'Hershey’s', price: 3000 },
      { name: 'Arequipe Alpina', price: 3000 },
      { name: 'Piazza', price: 3000 },
      { name: 'Chokis', price: 3000 },
      { name: 'Minichips', price: 3000 },
      { name: 'Maní', price: 3000 },
      { name: 'Klim', price: 3000 },
      { name: 'Chocolatina Jumbo', price: 3000 }
    ],
    image: 'images/helado2.png'
  },
  {
    id: 'Helado2',
    category: 'Helado',
    title: 'Helado Grande',
    price: 15500,
    desc: 'Saboréalo con quien quieras.',
    ingredients: ['Brownie', 'Queso', 'Chocmelos', 'Chócaramo', 'Quipitos', 'Leche condensada', 'Chips de chocolate', 'Mango', 'Oreo', 'Milo', 'Hershey’s', 'Arequipe Alpina', 'Piazza', 'Chokis', 'Minichips', 'Maní', 'Klim', 'Chocolatina Jumbo'],
    extras: [
      { name: 'Brownie', price: 3000 },
      { name: 'Queso', price: 3000 },
      { name: 'Chocmelos', price: 3000 },
      { name: 'Chócaramo', price: 3000 },
      { name: 'Quipitos', price: 3000 },
      { name: 'Leche condensada', price: 3000 },
      { name: 'Chips de chocolate', price: 3000 },
      { name: 'Mango', price: 3000 },
      { name: 'Oreo', price: 3000 },
      { name: 'Milo', price: 3000 },
      { name: 'Hershey’s', price: 3000 },
      { name: 'Arequipe Alpina', price: 3000 },
      { name: 'Piazza', price: 3000 },
      { name: 'Chokis', price: 3000 },
      { name: 'Minichips', price: 3000 },
      { name: 'Maní', price: 3000 },
      { name: 'Klim', price: 3000 },
      { name: 'Chocolatina Jumbo', price: 3000 }
    ],
    image: 'images/helado3.png'
  },
  {
    id: 'muudies1',
    category: 'Muudies',
    title: 'Muudie Sencillo',
    price: 2200,
    desc: 'Muudie clásico para cualquier momento.',
    ingredients: ['Brownie', 'Queso', 'Chocmelos', 'Chócaramo', 'Quipitos', 'Leche condensada', 'Chips de chocolate', 'Mango', 'Oreo', 'Milo', 'Hershey’s', 'Arequipe Alpina', 'Piazza', 'Chokis', 'Minichips', 'Maní', 'Klim', 'Chocolatina Jumbo'],
    extras: [
      { name: 'Brownie', price: 3000 },
      { name: 'Queso', price: 3000 },
      { name: 'Chocmelos', price: 3000 },
      { name: 'Chócaramo', price: 3000 },
      { name: 'Quipitos', price: 3000 },
      { name: 'Leche condensada', price: 3000 },
      { name: 'Chips de chocolate', price: 3000 },
      { name: 'Mango', price: 3000 },
      { name: 'Oreo', price: 3000 },
      { name: 'Milo', price: 3000 },
      { name: 'Hershey’s', price: 3000 },
      { name: 'Arequipe Alpina', price: 3000 },
      { name: 'Piazza', price: 3000 },
      { name: 'Chokis', price: 3000 },
      { name: 'Minichips', price: 3000 },
      { name: 'Maní', price: 3000 },
      { name: 'Klim', price: 3000 },
      { name: 'Chocolatina Jumbo', price: 3000 }
    ],
    image: 'images/sencillo.png'
  },
  {
  id: 'muudies2',
  category: 'Muudies',
  title: 'Muudie Premium 🌟',
  price: 2700,
  desc: 'Delicia helada con ingredientes premium.',
  ingredients: ['Brownie', 'Queso', 'Chocmelos', 'Chócaramo', 'Quipitos', 'Leche condensada', 'Chips de chocolate', 'Mango', 'Oreo', 'Milo', 'Hershey’s', 'Arequipe Alpina', 'Piazza', 'Chokis', 'Minichips', 'Maní', 'Klim', 'Chocolatina Jumbo'],
  extras: [
    { name: 'Brownie', price: 3000 },
    { name: 'Queso', price: 3000 },
    { name: 'Chocmelos', price: 3000 },
    { name: 'Chócaramo', price: 3000 },
    { name: 'Quipitos', price: 3000 },
    { name: 'Leche condensada', price: 3000 },
    { name: 'Chips de chocolate', price: 3000 },
    { name: 'Mango', price: 3000 },
    { name: 'Oreo', price: 3000 },
    { name: 'Milo', price: 3000 },
    { name: 'Hershey’s', price: 3000 },
    { name: 'Arequipe Alpina', price: 3000 },
    { name: 'Piazza', price: 3000 },
    { name: 'Chokis', price: 3000 },
    { name: 'Minichips', price: 3000 },
    { name: 'Maní', price: 3000 },
    { name: 'Klim', price: 3000 },
    { name: 'Chocolatina Jumbo', price: 3000 }
  ],
  image: 'images/premium.png'
},
{
  id: 'bebidas1',
  category: 'Bebidas',
  title: 'Agua',
  price: 5500,
  desc: 'Agua pura natural o con gas.',
  image: 'images/agua.png'
},
{
  id: 'bebidas2',
  category: 'Bebidas',
  title: 'Café',
  price: 5500,
  desc: 'Cafe caliente o frío para empezar el día con una sonrisa.',
  image: 'images/cafe.png'
},
{
  id: 'bebidas3',
  category: 'Bebidas',
  title: 'Cappucino',
  price: 9000,
  desc: 'Cappuccino caliente o frío para regalarte energía.',
  image: 'images/cappuccino.png'
},
{
  id: 'bebidas4',
  category: 'Bebidas',
  title: 'Té',
  price: 4500,
  desc: 'Te frío o caliente pensado para refrescarte o reconfortarte.',
  image: 'images/te.png'
}
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Helado';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${
            p.extras?.length
              ? `<h3>Adiciones</h3>
              <div class="extras-list">
                ${p.extras
                  .map(
                    (e, i) => `
                      <label>
                        <input type="checkbox" data-name="${e.name}" data-price="${e.price}">
                        <span>${e.name}</span>
                        <span class="extra-controls" data-index="${i}">
                          <button class="minus-extra">−</button>
                          <span class="extra-qty">0</span>
                          <button class="plus-extra">+</button>
                        </span>
                        <small>+$${numberWithCommas(e.price)}</small>
                      </label>
                    `
                  )
                  .join("")}
              </div>` : ""
          }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} <span class="price">$${numberWithCommas(p.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // === CIERRE DEL MODAL ===
  const closeBtn = overlay.querySelector(".close");
  closeBtn.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });

  // === VARIABLES ===
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // --- SI ES EDICIÓN, CARGAR VALORES EXISTENTES ---
  if (cartIndex !== null) {
    const item = cart[cartIndex];
    qty = item.qty;
    qtyEl.textContent = qty;
    if (item.extras?.length) {
      item.extras.forEach(e => {
        const index = p.extras.findIndex(pe => pe.name === e.name);
        if (index > -1) extrasQty[index] = e.qty;
      });
    }
    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      const qtyDisplay = input.closest('label').querySelector('.extra-qty');
      qtyDisplay.textContent = extrasQty[i];
    });
    updatePrice();
  }

  // === ACTUALIZAR PRECIO ===
  function updatePrice() {
    const extrasTotal = (p.extras || []).reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);
    const total = (p.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  // === BOTONES DE CANTIDAD PRINCIPAL ===
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if(qty>1){qty--;qtyEl.textContent=qty;updatePrice();} });

  // === BOTONES DE CADA EXTRA ===
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { extrasQty[index]++; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); });
  });
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { if(extrasQty[index]>0){ extrasQty[index]--; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); } });
  });

  // === AGREGAR O ACTUALIZAR EN EL CARRITO ===
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || []).map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] })).filter(e => e.qty > 0);
    const extrasSum = extras.reduce((a, e) => a + e.price * e.qty, 0);
    const finalUnitPrice = p.price + extrasSum;

    const item = { productId: p.id, title: p.title, price: finalUnitPrice, qty, image: p.image, extras };

    if (cartIndex !== null) {
      cart[cartIndex] = item; // actualizar producto existente
    } else {
      addToCart(item); // agregar producto nuevo
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove('hidden'); // mostrar carrito actualizado
  });
}




// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍦</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;
    const itemUnitPrice = item.price - extrasTotal; // precio base
    const itemTotal = (itemUnitPrice + extrasTotal) * item.qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  updateCartBadge();
}













// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 5000;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 5000; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - Muud 🍨✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍨 *Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

  window.open(waUrl, '_blank');
});





// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


