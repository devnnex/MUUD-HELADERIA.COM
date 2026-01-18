const API = "https://script.google.com/macros/s/AKfycbwork3f4AGfa3_rMQOxrzoTm8tMIrFQ2u0UsUW1hfBdqyDng67FUPaKzcnuz7dILsL-/exec";
let products = [];

load();

function load() {
  let actionName = "";
  switch(currentMode) {
    case "productos": actionName = "getProducts"; break;
    case "adiciones": actionName = "getAdditions"; break;
    case "toppings": actionName = "getToppings"; break;
  }

  fetch(`${API}?action=${actionName}`)
    .then(r => r.json())
    .then(d => {
      products = d;
      render();
    });
}


function render() {
  const c = document.getElementById("adminProducts");
  c.innerHTML = "";

  products.forEach(p => {
    c.innerHTML += `
      <div class="card">
        <h3>${p[1]}</h3>
        <p>$${p[3].toLocaleString()}</p>
        <small>${p[4]}</small>
        <button onclick="edit(${p[0]})">Editar</button>
        <button onclick="remove(${p[0]})">Eliminar</button>
      </div>
    `;
  });
}

function openForm() {
  Swal.fire({
    title: "Nuevo producto",
    html: `
      <input id="n" class="swal2-input" placeholder="Nombre">
      <input id="p" class="swal2-input" placeholder="Precio">
      <textarea id="d" class="swal2-textarea" placeholder="Descripción"></textarea>
    `,
    preConfirm: () => {
      fetch(`${API}?action=addProduct&nombre=${n.value}&precio=${p.value}&descripcion=${d.value}`)
        .then(load);
    }
  });
}

function edit(id) {
  const p = products.find(x => x[0] == id);

  Swal.fire({
    title: "Editar",
    html: `
      <input id="n" class="swal2-input" value="${p[1]}">
      <input id="p2" class="swal2-input" value="${p[3]}">
      <select id="e" class="swal2-input">
        <option ${p[4]=="disponible"?"selected":""}>disponible</option>
        <option ${p[4]=="agotado"?"selected":""}>agotado</option>
      </select>
    `,
    preConfirm: () => {
      fetch(`${API}?action=updateProduct&id=${id}&nombre=${n.value}&precio=${p2.value}&estado=${e.value}`)
        .then(load);
    }
  });
}

function remove(id) {
  fetch(`${API}?action=deleteProduct&id=${id}`)
    .then(load);
}


//SECCION PARA AGREGAR TOPPINGS Y ADICIONES Y DETERMINAR QUE ES
// LO QUE SE ESTÁ AGREGANDO 

let currentMode = "productos"; // default

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.admin-nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.admin-nav button[onclick="setMode('${mode}')"]`).classList.add('active');

  load(); // recarga según el modo
}
