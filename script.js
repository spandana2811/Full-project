// Product data
const products = [
  { id: 1, name: "Product 1", category: "electronics", price: 500, rating: 4, image: "https://images.pexels.com/photos/32574226/pexels-photo-32574226.jpeg" },
  { id: 2, name: "Product 2", category: "fashion", price: 700, rating: 3, image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg" },
  { id: 3, name: "Product 3", category: "home", price: 900, rating: 5, image: "https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg" },
  { id: 4, name: "Product 4", category: "electronics", price: 300, rating: 4, image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg" },
  { id: 5, name: "Product 5", category: "fashion", price: 1000, rating: 4, image: "https://images.pexels.com/photos/236215/pexels-photo-236215.jpeg" },
];

let filteredProducts = products;

// DOM elements
const productGrid = document.getElementById("product-grid");
const categoryFilter = document.getElementById("category-filter");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const applyFilterButton = document.getElementById("apply-filter");
const sortOptions = document.getElementById("sort-options");

// Function to render products
function generateProducts(productList) {
  productGrid.innerHTML = "";
  productList.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
        <p>Rating: ${product.rating}</p>
      </div>
    `;
    productGrid.insertAdjacentHTML("beforeend", productHTML);
  });
}

generateProducts(products);

// Filter functionality
applyFilterButton.addEventListener("click", () => {
  const category = categoryFilter.value;
  const minPrice = parseFloat(minPriceInput.value) || 0;
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

  filteredProducts = products.filter(product => {
    if (category !== "all" && product.category !== category) return false;
    if (product.price < minPrice) return false;
    if (product.price > maxPrice) return false;
    return true;
  });

  generateProducts(filteredProducts);
});

// Sort functionality
sortOptions.addEventListener("change", () => {
  const sortValue = sortOptions.value;
  let sortedProducts = [...filteredProducts];

  switch (sortValue) {
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      sortedProducts.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  generateProducts(sortedProducts);
});
