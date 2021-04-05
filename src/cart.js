const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
  addToShoppingCartButtons.forEach((addToCartButton) => {
      addToCartButton.addEventListener('click', addToCartClicked);
  });

const shoppingCartItemsContainer = document.querySelector(
      '.shoppingCartItemsContainer');
  
  function addToCartClicked(event) {
      const button = event.target;
      const item = button.closest('.container');
  
      const itemTitle = item.querySelector('.card-title').textContent;
      const itemPrice = item.querySelector('.card-price').textContent;
      const itemImage = item.querySelector('.card-img').src;
  
      addItemToShoppingCart(itemTitle, itemPrice, itemImage);
      
      function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
        const shoppingCartRow = document.createElement('div');
        const shoppingCartContent = `
        <div class="shoppingCartItem">
            <div class="card-img">
            <img src='${itemImage}'></div>
            <div class="card-title"><h3><span>Title:</span> ${itemTitle}</h3></div>
            <div class="card-price"><h3><span>Price:</span> $ ${itemPrice}</h3></div>
        </div> `;
        shoppingCartRow.innerHTML = shoppingCartContent;
        shoppingCartItemsContainer.append(shoppingCartRow);
        
      }
    }