document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('js-message');
    if (messageElement) {
        messageElement.textContent = "The JavaScript file loaded successfully!";
    }
});
