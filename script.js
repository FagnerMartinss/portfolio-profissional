const yearSpan = document.getElementById('year');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
