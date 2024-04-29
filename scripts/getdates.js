document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var footerElement = document.createElement("footer");
    footerElement.textContent = "Last Modified: " + lastModifiedDate;
    document.body.appendChild(footerElement);
});
