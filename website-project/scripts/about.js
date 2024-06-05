document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var footerElement = document.createElement("footer");
    footerElement.textContent = "Last Modified: " + lastModifiedDate;
    document.body.appendChild(footerElement);
  });
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });

    // Image Slider
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

