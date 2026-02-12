const button = document.getElementById('colorButton');
const body = document.body;

button.addEventListener('click', () => {
    // Each time the button is pressed, it will add or remove the "dark-mode" class from the body tag
    body.classList.toggle('dark-mode');
    
    // Change the text on the button so users know it
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
});
