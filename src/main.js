// Consumiendo la api
fetch('https://www.omdbapi.com/?s=name&apikey=1d0a44db')

  .then(response => response.json())
  .then(data => {
    console.log(data)

// const divData = document.getElementById('card')
// divData.classList.addToCart();

    let allMovies = document.getElementById('card')
    allMovies.innerHTML = data.Search.map((data)=> {
      return `
      <div class="container">
          <div class="card-img">
          <img src='${data.Poster}'></div>
          <div class="card-title"><h3><span>Title:</span> ${data.Title}</h3></div>
          <div class="card-content"><h3><span>Year:</span> ${data.Year}</h3></div>
          <h3 class="card-price"><span>Price:</span> $ ${10}</h3>
          <button class="addToCart">Add To Cart</button>
      </div>
      `
  }).join("") 
  })
//   .catch(err => console.log(err))

  const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
  addToShoppingCartButtons.forEach((addToCartButton) => {
      addToCartButton.addEventListener('click', addToCartClicked)
  });
  
  const shoppingCartItemsContainer = document.querySelector(
      '.shoppingCartItemsContainer');
  
  function addToCartClicked(event) {
      const button = event.target;
      const item = button.closest('.card');
  
      const itemTitle = item.querySelector('.card-title').textContent;
      const itemPrice = item.querySelector('.card-price').textContent;
      const itemImage = item.querySelector('.card-img').src;
  
      addItemToShoppingCart(itemTitle, itemPrice, itemImage);
      
      function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
          const shoppingCartRow = document.createElement('div');
         const shoppingCartContent = `
            <div class="card-img">
            <img src='${data.Poster}'></div>
            <div class="card-title"><h3><span>Title:</span> ${data.Title}</h3></div>
            <div class="card-content"><h3><span>Year:</span> ${data.Year}</h3></div>
            <div class="card-price"><h3><span>Price:</span> $ ${10}</h3></div>
         `;
      }
  }