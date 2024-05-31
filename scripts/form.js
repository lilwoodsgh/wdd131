// script.js

document.addEventListener("DOMContentLoaded", function() {
  var lastModifiedDate = document.lastModified;
  var footerElement = document.createElement("footer");
  footerElement.textContent = "Last Modified: " + lastModifiedDate;
  document.body.appendChild(footerElement);
});

 // Handle form submission
 const form = document.getElementById('reviewForm');
 const confirmationMessage = document.getElementById('confirmationMessage');
 const reviewCount = document.getElementById('reviewCount');
 let totalReviews = 0;

 form.addEventListener('submit', (event) => {
     event.preventDefault();
     totalReviews += 1;
     reviewCount.textContent = totalReviews;
     confirmationMessage.classList.remove('hidden');
     form.reset();
 });


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
          id: "fc-1888",
          name: "Flux Capacitor",
          "avg-rating": 4.5
        },
        {
          id: "fc-2050",
          name: "Power Laces",
          "avg-rating": 4.7
        },
        {
          id: "fs-1987",
          name: "Time Circuits",
          "avg-rating": 3.5
        },
        {
          id: "ac-2000",
          name: "Low Voltage Reactor",
          "avg-rating": 3.9
        },
        {
          id: "jj-1969",
          name: "Warp Equalizer",
          "avg-rating": 5.0
        }
    ];

    const productSelect = document.getElementById('products');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const form = document.getElementById('reviewForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', event => {
        event.preventDefault();
        confirmationMessage.classList.remove('hidden');
        let count = localStorage.getItem('reviewCount') || 0;
        localStorage.setItem('reviewCount', ++count);
        confirmationMessage.textContent = `Thank you for your review! You have submitted ${count} reviews.`;
        form.reset();
    });
});
