document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var footerElement = document.createElement("footer");
    footerElement.textContent = "Last Modified: " + lastModifiedDate;
    document.body.appendChild(footerElement);
});

// scripts/temples.js

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navigation = document.getElementById("navigation");

    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});
