document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const productName = card.querySelector('h3').innerText;
        const productPrice = parseFloat(card.querySelector('p').innerText.replace('$', ''));

        // Shto produktin në kartë
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
