const app = document.getElementById("app");

const params = new URLSearchParams(window.location.search);
let activeIndex = categories.findIndex(c => c.id === params.get("id"));
if (activeIndex < 0) activeIndex = 0;

/* HEADER + CATEGORY SLIDER */
function render() {
  const cat = categories[activeIndex];

  app.innerHTML = `
    <div class="top-bar">
      <button onclick="history.back()">⬅</button>
      <div class="cat-slider" id="catSlider"></div>
    </div>

    <div class="products" id="products"></div>
  `;

  renderCategories();
  renderProducts();
}

/* CATEGORY TOP SLIDER */
function renderCategories() {
  const slider = document.getElementById("catSlider");

  categories.forEach((c, i) => {
    const item = document.createElement("div");
    item.className = "cat-item " + (i === activeIndex ? "active" : "");
    item.innerText = c.name;

    item.onclick = () => {
      activeIndex = i;
      render();
    };

    slider.appendChild(item);
  });

  /* swipe support */
  let startX = 0;

  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - startX;

    if (diff > 50 && activeIndex > 0) {
      activeIndex--;
      render();
    }
    if (diff < -50 && activeIndex < categories.length - 1) {
      activeIndex++;
      render();
    }
  });
}

/* PRODUCTS GRID */
function renderProducts() {
  const cat = categories[activeIndex];
  const box = document.getElementById("products");

  cat.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.poster}">
      <div class="info">
        <div class="title">${item.name}</div>
        <div class="price">${item.price}</div>
        <div class="desc">${item.desc}</div>
      </div>
    `;

    card.onclick = () => {
      window.location.href = `../detail/index.html?cat=${cat.id}&item=${item.id}`;
    };

    box.appendChild(card);
  });

  /* swipe vertical (category change) */
  let startY = 0;

  box.addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
  });

  box.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientY - startY;

    if (diff > 60 && activeIndex > 0) {
      activeIndex--;
      render();
    }

    if (diff < -60 && activeIndex < categories.length - 1) {
      activeIndex++;
      render();
    }
  });
}

render();