document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pizzaOrderForm');
    const orderSummary = document.getElementById('orderSummary');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const size = formData.get('size');
        const toppings = formData.getAll('toppings');

        let summary = `You ordered a ${size} pizza with the following toppings: `;
        if (toppings.length === 0) {
            summary += 'None';
        } else {
            summary += toppings.join(', ');
        }

        orderSummary.textContent = summary;
    });
});