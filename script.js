// Get button and body tags from HTML
const button = document.getElementById('colorButton');
const body = document.body;

// Function to change background color randomly
button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
    
    // Print to the console for verification (Press F12 in your browser to view)
    console.log("New background color: " + randomColor);
});
