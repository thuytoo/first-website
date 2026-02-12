const button = document.getElementById('colorButton');
const body = document.body;

// 1. As soon as the website finishes loading, check what the user selected last time
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    button.textContent = "Switch to Light Mode";
}

// 2. Handling events when a button is pressed
button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light'; // The default is light
    
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
    
    // 3. Save the selection to the LocalStorage drawer
    localStorage.setItem('theme', theme);
});
