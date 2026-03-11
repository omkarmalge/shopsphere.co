// Example product data; in a real app you might fetch this from a server
const products = [
  {
    title: "Echo Dot Speaker",
    description: "Smart speaker with voice assistant",
    price: "$29.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71cGvJ3UwEL._AC_SL1000_.jpg",
    link: "#"
  },
  {
    title: "Fire TV Streaming Stick",
    description: "Media player with voice remote",
    price: "$49.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/51RjXAE8gNL._AC_SL1000_.jpg",
    link: "#"
  },
  {
    title: "Paperwhite E-Reader",
    description: "Waterproof e-reader with high-res display",
    price: "$129.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61-5Z4z7E4L._AC_SL1000_.jpg",
    link: "#"
  }
];

function renderProducts(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Animation delay for staggered entrance
    card.style.animationDelay = (idx * 0.12) + 's';

    if (idx === 0) {
      const badge = document.createElement('div');
      badge.className = 'featured-badge';
      badge.textContent = 'Featured';
      card.appendChild(badge);
    }

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.title;

    const info = document.createElement('div');
    info.className = 'info';

    const title = document.createElement('h2');
    title.textContent = p.title;

    const desc = document.createElement('p');
    desc.textContent = p.description;

    const price = document.createElement('p');
    price.textContent = p.price;

    const btn = document.createElement('a');
    btn.href = p.link;
    btn.target = '_blank';
    btn.className = 'button';
    btn.textContent = 'View Product';

    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(price);
    info.appendChild(btn);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  });
}

// Search functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    renderProducts('product-container', filtered);
  });
}

// initial render
renderProducts('product-container', products);
