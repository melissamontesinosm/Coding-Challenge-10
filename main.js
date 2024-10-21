// Task 2: Add Event Listeners for Product Selection

document.addEventListener('DOMContentLoaded', () => { //Reference to the size selector and product price 
    const sizeSelector = document.getElementById('size-selector'); 
    const productPrice = document.getElementById('product-price');
    const purchasebutton = document.getElementById('purchase-button'); // Task 3: Handle Stock Availability

    const prices = { // Defining prices for sizes
        small: 8.00,
        medium: 10.00,
        large: 12.00,
    };

    //Used add event listener to update price when size is selected
    sizeSelector.addEventListener('change', (event) => {
        const selectedSize = event.target.value;
        const product = stock[selectedSize]; // Task 3: Used to call stock data
        productPrice.textContent = `$${prices[selectedSize].toFixed(2)}`; 

        if (product.available) { //If else function used to identify when to disable purchase button
            purchasebutton.disabled = false;
        } else {
            purchasebutton.disabled = true;
        }

    });
});

