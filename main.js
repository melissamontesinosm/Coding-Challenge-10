// Task 2: Add Event Listeners for Product Selection

document.addEventListener('DOMContentLoaded', () => { //Reference to the size selector and product price 
    const sizeSelector = document.getElementById('size-selector'); 
    const productPrice = document.getElementById('product-price');
    const purchasebutton = document.getElementById('purchase-button'); // Handle Stock Availability

    const prices = { // Defining prices for sizes
        small: 8.00,
        medium: 10.00,
        large: 12.00,
    };

    sizeSelector.addEventListener('change', (event) => {  //Add event listener to show price of chosen size
        const selectedSize = event.target.value;
        const product = stock[selectedSize]; // Call data
        productPrice.textContent = `$${prices[selectedSize].toFixed(2)}`; 

        if (product.available) { //If else to know when to disable the purchase button
            purchasebutton.disabled = false;
        } else {
            purchasebutton.disabled = true;
        }

    // Task 4: Create a Checkout Event
    purchasebutton.addEventListener('Click', () => {
        if(!purchasebutton.disabled) { //If clicked and botton is not disabled,
            alert('Purchase was Successful'); // Then, display message
        } else {
            alert('Product is out of stock'); // If not, display this other message
        }
     });

    });
});

// Task 3: Handle Stock Availability

const stock = { // Define stock
    small: {price: 8.00, available: true}, 
    medium: {price: 10.00, available: true}, 
    large: {price: 12.00, available: false},
 };
