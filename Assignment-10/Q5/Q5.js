document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    const lightModeButton = document.getElementById('lightModeButton');

    darkModeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        document.body.style.fontSize = '18px';
    });

    lightModeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = 'black';
        document.body.style.fontSize = '16px';
    });
});