const products = [
  {
    name: "Laptop Gaming",
    price: 12000000,
    image: "donload.jpg",
  },
  {
    name: "Smartphone",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    name: "Headphone",
    price: 750000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    name: "Smart Watch",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Kamera",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    name: "Keyboard Gaming",
    price: 450000,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
];

const container = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");

let totalCart = 0;

products.forEach((product) => {
  container.innerHTML += `
    <div class="card">
        <img src="${product.image}" alt="">
        <div class="card-content">
            <h3>${product.name}</h3>
            <div class="price">
                Rp ${product.price.toLocaleString("id-ID")}
            </div>

            <button class="buy-btn"
            onclick="addToCart()">
            Tambah ke Keranjang
            </button>
        </div>
    </div>
    `;
});

function addToCart() {
  totalCart++;
  cartCount.innerText = totalCart;

  alert("Produk berhasil ditambahkan!");
}

function scrollToProducts() {
  document.getElementById("produk").scrollIntoView({
    behavior: "smooth",
  });
}
