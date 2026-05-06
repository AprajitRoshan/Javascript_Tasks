let allProducts = [];

const productContainer = document.getElementById("productContainer");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const cartCount = document.getElementById("cartCount");

const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

updateCartCount();

fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        message.style.display = "none";

        loadCategories(data);
        displayProducts(data);
    })
    .catch(error => {
        message.innerText = "Failed to load data";
        console.log(error);
    });

function displayProducts(data) {
    productContainer.innerHTML = "";

    if (data.length === 0) {
        productContainer.innerHTML = "<h2>No products found</h2>";
        return;
    }

    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const shortTitle =
            product.title.length > 50
                ? product.title.slice(0, 50) + "..."
                : product.title;

        const shortDesc =
            product.description.length > 60
                ? product.description.slice(0, 60) + "..."
                : product.description;

        card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${shortTitle}</h3>
        <div class="price">$${product.price}</div>
        <div class="rating">${getStars(product.rating.rate)} ${product.rating.rate}</div>
        <p>${shortDesc}</p>
        <button onclick="viewMore(${product.id})">View More</button>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="removeFromCart(${product.id})">Remove</button>
        `;

        productContainer.appendChild(card);
    });
}

function loadCategories(data) {
    const categories = [];

    data.forEach(product => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.innerText = category;
        categoryFilter.appendChild(option);
    });
}

function getStars(rating) {
    const roundedRating = Math.round(rating);
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }

    return stars;
}

function viewMore(id) {
    const product = allProducts.find(item => item.id === id);

    modalImage.src = product.image;
    modalTitle.innerText = product.title;
    modalCategory.innerText = "Category: " + product.category;
    modalPrice.innerText = "$" + product.price;
    modalRating.innerText =
        "Rating: " + getStars(product.rating.rate) + " " + product.rating.rate +
        " (" + product.rating.count + " reviews)";
    modalDescription.innerText = product.description;

    productModal.style.display = "flex";
}

closeModal.addEventListener("click", function () {
    productModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === productModal) {
        productModal.style.display = "none";
    }
});

function addToCart(id) {
    const product = allProducts.find(item => item.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert("Product added to cart");
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Product removed from cart");
    } else {
        alert("This product is not in cart");
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.innerText = cart.length;
}

function applyFilters() {
    let filteredProducts = [...allProducts];

    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortValue = sortPrice.value;

    filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    if (sortValue === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortPrice.addEventListener("change", applyFilters);