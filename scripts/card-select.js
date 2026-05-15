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

function emojiEmitt(element, emoji) {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerText = emoji;

    const startX = rect.left + Math.random() * rect.width;
    const startY = rect.top + scrollTop + Math.random() * rect.height;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';

    const dx = (Math.random() - 0.5) * 350 + 'px';
    const dy = (Math.random() - 1) * 350 + 'px';
    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);

    document.body.appendChild(particle);
    particle.addEventListener('animationend', () => particle.remove());
  }
}


function cardSelectedWithEmoji(element, name, img, emoji) {
  cardSelected(element, name, img);
  emojiEmitt(element, emoji)
}
