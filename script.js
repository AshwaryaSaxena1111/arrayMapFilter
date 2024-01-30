const products = [
    { name: "Product 1", price: 10, description: "so beautiful" },
    { name: "Product 2", price: 20, description: "so elegant" },
    { name: "Product 3", price: 30, description: "just looking" },
    { name: "Product 4", price: 40, description: "like a waow" }
  ];
  function createProductDiv(product) {
    return `<div class="product">
              <h2>${product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Description: ${product.description}</p>
            </div>`;
  }
  function displayProducts(productsToShow) {
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';
    productsToShow.map(product => {
      productListDiv.innerHTML += createProductDiv(product);
    });
  }
  displayProducts(products);
  const filteredProducts = products.filter(product => product.price < 30);
  displayProducts(filteredProducts);