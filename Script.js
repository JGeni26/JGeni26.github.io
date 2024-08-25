let cart = [];

        function addToCart(name, price) {
            if (!cart.some(item => item.name === name)) {
                cart.push({name, price});
                renderCart();
            }
        }

        function removeFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            renderCart();
        }

        function renderCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `<span>${item.name} - $${item.price}</span>
                                      <button onclick="removeFromCart('${item.name}')">Remove</button>`;
                cartItemsContainer.appendChild(cartItem);
            });
        }