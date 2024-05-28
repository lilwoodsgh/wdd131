document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var footerElement = document.createElement("footer");
    footerElement.textContent = "Last Modified: " + lastModifiedDate;
    document.body.appendChild(footerElement);
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navigation = document.getElementById("navigation");

    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    
        const temples = [
            {
                templeName: "Aba Nigeria",
                location: "Aba, Nigeria",
                dedicated: "2005, August, 7",
                area: 11500,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
            },
            {
                templeName: "Manti Utah",
                location: "Manti, Utah, United States",
                dedicated: "1888, May, 21",
                area: 74792,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
            },
            {
                templeName: "Payson Utah",
                location: "Payson, Utah, United States",
                dedicated: "2015, June, 7",
                area: 96630,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
            },
            {
                templeName: "Yigo Guam",
                location: "Yigo, Guam",
                dedicated: "2020, May, 2",
                area: 6861,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
            },
            {
                templeName: "Washington D.C.",
                location: "Kensington, Maryland, United States",
                dedicated: "1974, November, 19",
                area: 156558,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
            },
            {
                templeName: "Lima Perú",
                location: "Lima, Perú",
                dedicated: "1986, January, 10",
                area: 9600,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
            },
            {
                templeName: "Mexico City Mexico",
                location: "Mexico City, Mexico",
                dedicated: "1983, December, 2",
                area: 116642,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
            },
            {
                templeName: "Accra Ghana Temple",
                location: "Accra, Greater Accra, Ghana",
                dedicated: "2004, January, 11",
                area: 17500,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
            },
            {
                templeName: "Adelaide Australia Temple",
                location: "Marden, South Australia, Australia",
                dedicated: "2000, June, 15",
                area: 10700,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x500/adelaide-australia-temple-lds-851233-wallpaper.jpg"
            },
            {
                templeName: "Belem Brazil Temple",
                location: "Belem, Para, Brazil",
                dedicated: "2022, November, 20",
                area: 28675,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/800x500/belem_brazil_temple_exterior.jpg"
            },
            {
                templeName: "Draper Utah Temple",
                location: "Draper, Utah, United States",
                dedicated: "2009, March, 20",
                area: 58300,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/800x500/draper-temple-lds-689818-wallpaper.jpg"
            }
        ];
    
        function displayTemples(filteredTemples) {
            const container = document.getElementById('temple-container');
            container.innerHTML = '';
            filteredTemples.forEach(temple => {
                const templeCard = document.createElement('div');
                templeCard.className = 'temple-card';
                templeCard.innerHTML = `
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${new Date(temple.dedicated).toDateString()}</p>
                    <p>Area: ${temple.area} sq ft</p>
                `;
                container.appendChild(templeCard);
            });
        }
    
        function filterTemples(filter) {
            let filteredTemples;
            switch (filter) {
                case 'old':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                default:
                    filteredTemples = temples;
                    break;
            }
            displayTemples(filteredTemples);
        }
     // Add event listeners to navigation links
     document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            filterTemples(filter);
            document.getElementById('main-title').textContent = event.target.textContent;
        });
    });
        // Initial display of all temples
        displayTemples(temples);
});

    