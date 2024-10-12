let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('p').innerText.replace('$', ''));

        cart.push({ title, price });
        total += price;

        updateCart();
    });
});

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.title} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(itemDiv);
    });

    document.getElementById('total').innerText = `Totali: $${total.toFixed(2)}`;
}
