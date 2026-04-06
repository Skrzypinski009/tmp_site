const cart = [];

function cardSelected(element, name, img) {
  // 1. Podświetlenie
  element.classList.toggle('selected');

  // 2. Dodawanie/Usuwanie z koszyka
  const index = cart.findIndex(item => item.name === name);
  if (index === -1) {
    cart.push({ name, img });
  } else {
    cart.splice(index, 1);
  }

  updateCartUI();
  updateCartCount();
}

function updateCartUI() {
  const container = document.getElementById('cart-items-container');
  if (cart.length === 0) {
    container.innerHTML = "<p>Koszyk jest pusty</p>";
    return;
  }
  container.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}">
                    <span>${item.name}</span>
                </div>
            `).join('');
}

function updateCartCount() {
  const countTag = document.getElementById('cart-count');
  if (countTag) {
    countTag.innerText = cart.length;
    countTag.style.display = cart.length > 0 ? 'block' : 'none';
  }
}

function openCart() {
  document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}
