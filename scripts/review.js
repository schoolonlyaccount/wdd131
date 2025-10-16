//#region - [Get current year and last file modification date]

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `© ${currentYear}`;
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;

//#endregion
// <->
//#region - [The Counter]

const reviewCountKey = "reviewCount";
const reviewDisplay = document.getElementById("reviewCount");
if (sessionStorage.getItem("formSubmitted") === "true") {
    let reviewCount = Number(localStorage.getItem(reviewCountKey)) || 0;
    reviewCount++;
    localStorage.setItem(reviewCountKey, reviewCount);
    sessionStorage.removeItem("formSubmitted");
    reviewDisplay.textContent = reviewCount;
} else {
    const currentCount = localStorage.getItem(reviewCountKey) || 0;
    reviewDisplay.textContent = currentCount;
}

//#endregion