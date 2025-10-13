// Time & Year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `© ${currentYear}`;
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;

// Hamburger
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    function openMenu() {
        mobileNav.classList.add("open");
        hamburger.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }

    // Opening and closing
    hamburger.addEventListener("click", () => {
        if (mobileNav.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
});

// Top 10 Favorite games
const games = [
    {
        title: "1st Place",
        image: "images/soma.webp",
        ratings: {
            music: 5,
            gameplay: 3,
            story: 5,
            replayability: 2
        }
    },
    {
        title: "2nd Place",
        image: "images/the-binding-of-isaac.webp",
        ratings: {
            music: 4,
            gameplay: 5,
            story: 3,
            replayability: 5
        }
    },
    {
        title: "3rd Place",
        image: "images/dead-by-daylight.webp",
        ratings: {
            music: 4,
            gameplay: 5,
            story: 4,
            replayability: 5
        }
    },
    {
        title: "4th Place",
        image: "images/dark-deception.webp",
        ratings: {
            music: 5,
            gameplay: 5,
            story: 4,
            replayability: 4
        }
    },
    {
        title: "5th Place",
        image: "images/resident-evil-4-remake.webp",
        ratings: {
            music: 5,
            gameplay: 5,
            story: 4,
            replayability: 5
        }
    },
    {
        title: "6th Place",
        image: "images/amnesia-the-bunker.webp",
        ratings: {
            music: 3,
            gameplay: 5,
            story: 4,
            replayability: 4
        }
    },
    {
        title: "7th Place",
        image: "images/silksong.webp",
        ratings: {
            music: 5,
            gameplay: 5,
            story: 4,
            replayability: 3
        }
    },
    {
        title: "8th Place",
        image: "images/subnautica.webp",
        ratings: {
            music: 5,
            gameplay: 4,
            story: 3,
            replayability: 3
        }
    },
    {
        title: "9th Place",
        image: "images/fnaf-security-breach.webp",
        ratings: {
            music: 4,
            gameplay: 3,
            story: 3,
            replayability: 3
        }
    },
    {
        title: "10th Place",
        image: "images/doki-doki-literature-club.webp",
        ratings: {
            music: 5,
            gameplay: 2,
            story: 5,
            replayability: 1
        }
    },
];

// Coming Soons
const upcomingGames = [
    {
        title: "Dark Deception: Chapter 5",
        image: "images/dark-deception-chapter-5.webp",
    },
    {
        title: "Subnautica 2",
        image: "images/subnautica2.webp",
    },
    {
        title: "Moonshire",
        image: "images/moonshire.webp",
    },
    {
        title: "The Backworld",
        image: "images/the-backworld.webp",
    },
    {
        title: "Dewdrop Dynasty",
        image: "images/dewdrop-dynasty.webp",
    },
    {
        title: "The Joy of Creation",
        image: "images/joy-of-creation.webp",
    },
];

// Display the games - For Top 10 Favorites
function renderCards(gamesArray, selector, includeRatings = false) {
    const grid = document.querySelector(selector);

    grid.innerHTML = "";

    gamesArray.forEach(game => {
        const card = document.createElement("li");
        card.classList.add(includeRatings ? "game-card" : "game-card2");

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title} game cover" width="400" height="300" loading="lazy">
            ${includeRatings ? `
                <div class="overlay">
                    <h2>${game.title}</h2>
                    <p><strong>( Music )</strong></p>
                    <p class="star">${"⭐".repeat(game.ratings.music)}</p>
                    <p><strong>( Gameplay )</strong></p>
                    <p class="star">${"⭐".repeat(game.ratings.gameplay)}</p>
                    <p><strong>( Story )</strong></p>
                    <p class="star">${"⭐".repeat(game.ratings.story)}</p>
                    <p><strong>( Replayability )</strong></p>
                    <p class="star">${"⭐".repeat(game.ratings.replayability)}</p>
                </div>` : ''
            }
        `;
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop();
    // Render game cards based on page
    if (page === "" || page === "index.html") {
        renderCards(games, ".game-grid", true);
    } else if (page === "anxious-releases.html") {
        renderCards(upcomingGames, ".game-grid2");
    }

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    // Load saved values from localStorage
    if (localStorage.getItem("name")) {
        nameInput.value = localStorage.getItem("name");
    }
    if (localStorage.getItem("email")) {
        emailInput.value = localStorage.getItem("email");
    }

    // Save values to localStorage on input
    nameInput.addEventListener("input", () => {
        localStorage.setItem("name", nameInput.value);
    });

    emailInput.addEventListener("input", () => {
        localStorage.setItem("email", emailInput.value);
    });

    const form = document.querySelector(".contact-form");
    // Form submission feedback/confirmation
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const confirmationMessage = document.createElement("p");
            confirmationMessage.textContent = `Thanks for your message, ${name}!`;
            confirmationMessage.style.color = "var(--secondary-color)";
            confirmationMessage.style.fontSize = "1.2rem";
            confirmationMessage.style.textAlign = "center";
            confirmationMessage.style.marginTop = "2.5rem";

            form.reset();

            // Clear localStorage
            localStorage.removeItem("name");
            localStorage.removeItem("email");

            // Append message below submit button
            const buttonContainer = document.querySelector(".button-container");
            buttonContainer.appendChild(confirmationMessage);

            // remove message after 5 seconds
            setTimeout(() => {
                confirmationMessage.remove();
            }, 5000);
        });
    }
});