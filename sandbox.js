// script.js
console.log("Hello from JavaScript!");
// Get references to the image and hidden icons
const bottomImage = document.getElementById('bottom-image');
const hiddenIcons = document.getElementById('hidden-icons');

// Toggle icons visibility when the image is clicked
bottomImage.addEventListener('click', () => {
    if (hiddenIcons.style.display === 'none' || hiddenIcons.style.display === '') {
        hiddenIcons.style.display = 'block';
    } else {
        hiddenIcons.style.display = 'none';
    }
});


