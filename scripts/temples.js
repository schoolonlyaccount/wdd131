document.addEventListener('DOMContentLoaded', () => {
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

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = `© ${currentYear}`;
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;
});
