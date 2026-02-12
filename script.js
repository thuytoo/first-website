document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
});

// Smooth reveal effect on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('section').forEach((section) => observer.observe(section));
