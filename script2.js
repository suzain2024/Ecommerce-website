document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
  
        const product = {
          name: productName,
          price: productPrice
        };
  
        cart.push(product);
        alert(`${productName} has been added to your cart.`);
      });
    });
  });