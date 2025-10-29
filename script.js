// FIXED: Semicolons are added.
document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('js-message'); // ADDED SEMICOLON
    if (messageElement) {
        messageElement.textContent = "The JavaScript file loaded successfully!"; // ADDED SEMICOLON
    }
}); // ADDED SEMICOLON
