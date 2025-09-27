document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav System
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');
    const album = document.querySelector('.album');
    const title = document.querySelector('.title');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        album.classList.toggle('hidden');
        title.classList.toggle('hidden');
    });

    // Time & Year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = `© ${currentYear}`;
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;

    // Declaration Of Temple Array
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "images/nigeria-temple.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "images/manti-temple.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "images/payson-utah-temple.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "images/guam-temple.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "images/washington-dc-temple.jpg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "images/peru-temple.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "images/mexico-city-temple.jpg"
        },
        // Add more temple objects here...
        {
            templeName: "San Luis Potosí Mexico Temple",
            location: "Arboleda 100, Fraccionamiento del Parque, Mexico",
            dedicated: "2024, March, 9",
            area: 9300,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/san-luis-potosi-mexico-temple/san-luis-potosi-mexico-temple-44841-main.jpg"
        },
        {
            templeName: "Fukuoka Japan Temple",
            location: "9-15 Hirao Johsui Machi, Chuo-ku, Japan",
            dedicated: "1999, March, 20",
            area: 10700,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-14618-main.jpg"
        },
        {
            templeName: "Durban South Africa Temple",
            location: "2 Izinga Drive, Izinga Ridge, South Africa",
            dedicated: "2016, April, 9",
            area: 19860,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
        }
    ];

    // Inserting The Temple Array
    const albumDiv = document.querySelector(".album");

    // Clear/Re-render The Album
    function displayTemples(filteredTemples) {
        albumDiv.innerHTML = ""; // Clear The Previous Cards

        // Loop Through Each Index In The Temple Array And Add Accordingly
        filteredTemples.forEach((temple, index) => {
            const card = document.createElement("section");
            card.classList.add("temple-card");

            const h3 = document.createElement("h3");
            h3.textContent = temple.templeName;

            const location = document.createElement("p");
            location.innerHTML = `<span class="purple-label">Location:</span> ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.innerHTML = `<span class="purple-label">Dedicated:</span> ${temple.dedicated}`;

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = temple.templeName;
            image.loading = "lazy";
            image.width = 400;
            image.height = 250;

            card.appendChild(h3);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(image);

            albumDiv.appendChild(card);
        });
    }

    // Convert Dedicated String To A Real Date Object
    function getTempleYear(temple) {
        const parts = temple.dedicated.split(", ");
        return parseInt(parts[0]);
    }

    // Filter Functions
    function filterTemples(criteria) {
        switch (criteria) {
            case "old":
                return temples.filter(t => getTempleYear(t) < 1900);
            case "new":
                return temples.filter(t => getTempleYear(t) > 2000);
            case "large":
                return temples.filter(t => t.area > 90000);
            case "small":
                return temples.filter(t => t.area < 10000);
            default:
                return temples; // Show All If Home or ???
        }
    }

    // Handle Nav Clicks
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = link.id.toLowerCase();
            const filtered = filterTemples(filter);
            displayTemples(filtered);
        });
    });

    // Initial Display (Home)
    displayTemples(temples);
});