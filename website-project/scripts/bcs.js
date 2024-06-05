document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var footerElement = document.createElement("footer");
    footerElement.textContent = "Last Modified: " + lastModifiedDate;
    document.body.appendChild(footerElement);
});

// scripts/temples.js

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('active');
    });
    
});
