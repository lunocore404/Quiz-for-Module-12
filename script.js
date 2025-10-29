// This function runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('js-message');
    if (messageElement) {
        messageElement.textContent = "The JavaScript file loaded successfully!";
    }
});
