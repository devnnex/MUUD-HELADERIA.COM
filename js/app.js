const API = "https://script.google.com/macros/s/AKfycbwork3f4AGfa3_rMQOxrzoTm8tMIrFQ2u0UsUW1hfBdqyDng67FUPaKzcnuz7dILsL-/exec";


 

function searchProducts(query) {
  const text = query.toLowerCase().trim();

  // Si está vacío → mostrar todo
  if (!text) {
    renderProducts();
    return;
  }

  const filtered = products.filter(p => {
    const name = p[1]?.toLowerCase() || "";
    const description = p[2]?.toLowerCase() || "";

    return (
      name.includes(text) ||
      description.includes(text)
    );
  });

  renderProducts(filtered);
}





// ===============================
// CONFIGURACIÓN GLOBAL
// ===============================
const WHATSAPP_NUMBER = "573117650829";

let products = [];
let toppings = [];
let additions = [];
let cart = [];

// ===============================
// CARGA INICIAL
// ===============================
Promise.all([
  fetch(`${API}?action=getProducts`).then(r => r.json()),
  fetch(`${API}?action=getToppings`).then(r => r.json()),
  fetch(`${API}?action=getAdditions`).then(r => r.json())
]).then(([p, t, a]) => {
  products = p;
  toppings = t;
  additions = a;
  renderProducts(); // 🔥 muestra todo
});


// ===============================
// RENDER PRODUCTOS
// ===============================
function renderProducts(list = products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <p style="text-align:center; opacity:.6; grid-column:1/-1">
        No hay productos en esta categoría
      </p>`;
    return;
  }

  list.forEach(p => {
    if (p[4] === "agotado") return;

    container.innerHTML += `
      <div class="card">
        <h3>${p[1]}</h3>
        <p>${p[2]}</p>
        <b>$${Number(p[3]).toLocaleString()}</b>
        <button onclick="openProductModal(${p[0]})">+</button>
      </div>
    `;
  });
}


// ===============================
// MODAL DE PRODUCTO
// ===============================
function openProductModal(productId, cartIndex = null) {

  const p = products.find(x => x[0] == productId);
  if (!p) return;

  const editingItem = cartIndex !== null ? cart[cartIndex] : null;

  let qty = editingItem ? editingItem.qty : 1;
  const selectedToppings = {};
  const selectedAdditions = {};

  // 🔁 Precargar extras si se está editando
  if (editingItem) {
    editingItem.toppings.forEach(t => {
      selectedToppings[t.name] = { ...t };
    });
    editingItem.additions.forEach(a => {
      selectedAdditions[a.name] = { ...a };
    });
  }

  const calcTotal = () => {
    let total = p[3] * qty;

    Object.values(selectedToppings).forEach(e => {
      total += (e.price || 0) * e.qty;
    });

    Object.values(selectedAdditions).forEach(e => {
      total += e.price * e.qty;
    });

    return total;
  };

  Swal.fire({
    title: "",
    customClass: {
      popup: "product-modal",
      confirmButton: "btn-primary"
    },
    html: `
      <div class="product-modal-content">

        <div class="product-header">
          <h2>${p[1]}</h2>
          <p class="product-desc">${p[2]}</p>
        </div>

        <div class="product-section">
          <label>Cantidad</label>
          <div class="qty-controls premium">
            <button id="minusQty">−</button>
            <span id="qty">${qty}</span>
            <button id="plusQty">+</button>
          </div>
        </div>

        ${toppings.length ? `
          <div class="product-section">
            <label>Toppings <span class="badge-free">FREE</span></label>
            <div id="toppingsList" class="extras-grid"></div>
          </div>
        ` : ""}

        ${additions.length ? `
          <div class="product-section">
            <label>Adiciones</label>
            <div id="additionsList" class="extras-grid"></div>
          </div>
        ` : ""}

        <div class="product-footer">
          <span>Total</span>
          <b id="modalTotal">$${calcTotal().toLocaleString()}</b>
        </div>

      </div>
    `,
    confirmButtonText: editingItem ? "Guardar cambios" : "Agregar al carrito",
    showCloseButton: true,
    didOpen: () => {

      renderExtras("toppingsList", toppings, selectedToppings, "topping");
      renderExtras("additionsList", additions, selectedAdditions, "addition");

      // 🔁 Marcar checks si se está editando
      [...document.querySelectorAll(".extra-item input")].forEach(input => {
        const name = input.parentElement.textContent.trim();
        if (selectedToppings[name] || selectedAdditions[name]) {
          input.checked = true;
        }
      });

      document.getElementById("plusQty").onclick = () => {
        qty++;
        document.getElementById("qty").innerText = qty;
        updateModalTotal();
      };

      document.getElementById("minusQty").onclick = () => {
        if (qty > 1) qty--;
        document.getElementById("qty").innerText = qty;
        updateModalTotal();
      };

      window.updateModalTotal = () => {
        document.getElementById("modalTotal").innerText =
          "$" + calcTotal().toLocaleString();
      };
    },
    preConfirm: () => {

      const itemData = {
        productId: p[0],
        name: p[1],
        basePrice: p[3],
        qty,
        toppings: Object.values(selectedToppings),
        additions: Object.values(selectedAdditions)
      };

      if (editingItem) {
        cart[cartIndex] = itemData; // ✏️ editar
      } else {
        cart.push(itemData); // ➕ nuevo
      }

      updateTotal();
    }
  });
}



// ===============================
// RENDER EXTRAS
// ===============================
function renderExtras(containerId, list, state) {
  const c = document.getElementById(containerId);
  if (!c) return;

  c.innerHTML = "";

  list.forEach(e => {

    const rawPrice = Number(e[2]);
    const isFree = !e[2] || isNaN(rawPrice);
    const price = isFree ? 0 : rawPrice;

    const label = document.createElement("label");
    label.className = "extra-item";

    label.innerHTML = `
      <span class="extra-left">
        <input type="checkbox">
        ${e[1]}
      </span>
      <small class="${isFree ? "free" : "price"}">
        ${isFree ? "FREE" : "+$" + price.toLocaleString()}
      </small>
    `;

    const checkbox = label.querySelector("input");

    checkbox.onchange = () => {
      if (checkbox.checked) {
        state[e[1]] = { name: e[1], price, qty: 1 };
      } else {
        delete state[e[1]];
      }
      window.updateModalTotal();
    };

    c.appendChild(label);
  });
}




// ===============================
// TOTAL GENERAL
// ===============================
function updateTotal() {
  const total = cart.reduce((sum, item) => {
    let t = item.basePrice * item.qty;

    item.toppings.forEach(e => t += e.price * e.qty);
    item.additions.forEach(e => t += e.price * e.qty);

    return sum + t;
  }, 0);

  document.getElementById("total").innerText =
    "$" + total.toLocaleString();
}

// ===============================
// SUMMARY
// ===============================
function getCartSummaryHTML() {
  let html = `<div class="checkout-summary">`;

  cart.forEach((item, index) => {
    html += `
      <div class="checkout-item" onclick="openProductModal(${item.productId}, ${index})">
        <div class="summary-main">
          <b>${item.qty} × ${item.name}</b>
          <span class="summary-price">
            $${calculateItemTotal(item).toLocaleString()}
          </span>
        </div>
    `;

    if (item.toppings.length) {
      html += `<div class="summary-extras"><small><b>Toppings</b></small>`;
      item.toppings.forEach(t => {
        html += `<small>• ${t.name} <span class="free">FREE</span></small>`;
      });
      html += `</div>`;
    }

    if (item.additions.length) {
      html += `<div class="summary-extras"><small><b>Adiciones</b></small>`;
      item.additions.forEach(a => {
        html += `<small>• ${a.name} (+$${a.price.toLocaleString()})</small>`;
      });
      html += `</div>`;
    }

    html += `
        <div class="qty-controls summary">
          <button onclick="event.stopPropagation(); changeQty(${index}, -1)">−</button>
          <button onclick="event.stopPropagation(); changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <hr>
    `;
  });

  const total = cart.reduce((s, i) => s + calculateItemTotal(i), 0);

  html += `
    <div class="checkout-total">
      <b>Total</b>
      <b>$${total.toLocaleString()}</b>
    </div>
  </div>`;

  return html;
}


function calculateItemTotal(item) {
  let t = item.basePrice * item.qty;
  item.toppings.forEach(e => t += e.price * e.qty);
  item.additions.forEach(e => t += e.price * e.qty);
  return t;
}


function changeQty(index, delta) {
  if (!cart[index]) return;

  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateTotal();

  // 🔁 ACTUALIZAR EL SUMMARY DENTRO DEL MISMO SWAL
  const container = Swal.getHtmlContainer();
  if (container) {
    container.innerHTML = getCartSummaryHTML();
  }
}


// ===============================
// CHECKOUT (NO SE ROMPE)
// ===============================
function openCheckout() {
  if (!cart.length) return;

  Swal.fire({
    title: "🧾 Tu pedido",
    html: `<div class="checkout-summary">${getCartSummaryHTML()}</div>`,
    showCancelButton: true,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#b7ff00",
    customClass: {
      popup: "product-modal",
      confirmButton: "btn-primary",
      cancelButton: "btn-secondary" // opcional: crear estilo gris elegante
    },
    didOpen: () => {
      // Hacer scroll si el summary es muy largo
      const summary = Swal.getHtmlContainer().querySelector(".checkout-summary");
      if (summary.scrollHeight > 220) {
        summary.style.maxHeight = "220px";
        summary.style.overflowY = "auto";
      }
    }
  }).then(r => {
    if (r.isConfirmed) openCheckoutForm();
  });
}

function openCheckoutForm() {
  Swal.fire({
    title: "📦 Datos del pedido",
    html: `
      <div class="checkout-form">
        <input id="name" placeholder="👤 Nombre">
        <input id="phone" placeholder="📞 Teléfono">
        <textarea id="notes" placeholder="📝 Notas"></textarea>

        <label for="delivery">🚚 Tipo de pedido:</label>
        <select id="delivery">
          <option value="Domicilio">Domicilio</option>
          <option value="Recogida">Recogida</option>
        </select>

        <label for="payment">💳 Método de pago:</label>
        <select id="payment">
          <option value="Efectivo">Efectivo</option>
          <option value="Transferencia">Transferencia</option>
        </select>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Enviar por WhatsApp",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#b7ff00",
    customClass: {
      popup: "product-modal",
      confirmButton: "btn-primary",
      cancelButton: "btn-secondary"
    },
    preConfirm: sendOrderToWhatsApp,
    didOpen: () => {
      // Enfocar automáticamente en el primer input
      Swal.getPopup().querySelector("#name").focus();
    }
  });
}

// ===============================
// WHATSAPP
// ===============================
function sendOrderToWhatsApp() {
  const popup = Swal.getPopup();

  const name     = popup.querySelector("#name")?.value.trim() || "No especificado";
  const phone    = popup.querySelector("#phone")?.value.trim() || "No especificado";
  const notes    = popup.querySelector("#notes")?.value.trim() || "—";
  const delivery = popup.querySelector("#delivery")?.value || "No especificado";
  const payment  = popup.querySelector("#payment")?.value || "No especificado";

  let msg = "🧾 *NUEVO PEDIDO*\n\n";

  msg += `👤 *Cliente:* ${name}\n`;
  msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `🚚 *Tipo de pedido:* ${delivery}\n`;
  msg += `💳 *Método de pago:* ${payment}\n`;
  msg += `📝 *Notas:* ${notes}\n\n`;

  msg += "====================\n";
  msg += "🍽 *DETALLE DEL PEDIDO*\n";
  msg += "====================\n\n";

  cart.forEach(item => {
    msg += `🔹 *${item.qty} x ${item.name}*\n`;

    if (item.toppings.length) {
      msg += "   🧀 *Toppings:* ";
      msg += item.toppings.map(t => t.name).join(", ") + " (FREE)\n";
    }

    if (item.additions.length) {
      msg += "   ➕ *Adiciones:* ";
      msg += item.additions.map(a => `${a.name} (+$${a.price.toLocaleString()})`).join(", ") + "\n";
    }

    msg += `   💵 *Subtotal:* $${calculateItemTotal(item).toLocaleString()}\n\n`;
  });

  const total = cart.reduce((s, i) => s + calculateItemTotal(i), 0);

  msg += "====================\n";
  msg += `💰 *TOTAL A PAGAR:* $${total.toLocaleString()}\n`;
  msg += "====================";

  // Limpiar carrito
  cart = [];
  updateTotal();
  Swal.close();

  // Redirigir a WhatsApp
  setTimeout(() => {
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, 10);

  return true;
}




// ===============================
// BUSCADOR INTELIGENTE
// ===============================
const searchInput = document.getElementById("searchInput"); // Asegúrate de tener <input id="searchInput">

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.trim().toLowerCase();

  // Filtrar productos por nombre o categoría que contengan el término
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term)
  );

  renderProductsFiltered(filtered);
});

// ===============================
// RENDERIZADO FILTRADO (desde búsqueda)
// ===============================
function renderProductsFiltered(filteredProducts) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = p.image || "images/placeholder.png"; 
    img.alt = p.name;
    img.style.height = "80px";
    img.style.borderRadius = "14px";
    img.style.objectFit = "cover";
    card.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = p.name;
    card.appendChild(title);

    const price = document.createElement("b");
    price.textContent = `$${p.price.toFixed(2)}`;
    card.appendChild(price);

    const btn = document.createElement("button");
    btn.textContent = "+";
    btn.onclick = () => addToCart(p);
    card.appendChild(btn);

    container.appendChild(card);
  });
}


