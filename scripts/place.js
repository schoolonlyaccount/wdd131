// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear}`;

// Get the last modified date of the document
const lastMod = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;

// Static values matching the HTML content
const temperature = 7;      // degrees Celsius
const windSpeed = 10;       // km/h

// Calculate wind chill in Celsius with the Environment Canada formula
function calculateWindChill(tempC, speedKmh) {
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speedKmh, 0.16)) + (0.3965 * tempC * Math.pow(speedKmh, 0.16));
}

// Function to update wind chill display based on conditions
function displayWindChill() {
    const windChill1 = document.getElementById('windChill');
    const windChill2 = document.getElementById('windChill2');

    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChill1.textContent = `${chill} °C`;
        windChill2.textContent = `${chill} °C`;
    } else {
        windChill1.textContent = "N/A";
        windChill2.textContent = "N/A";
    }
}

// Run wind chill display update on page load
window.addEventListener('load', displayWindChill);