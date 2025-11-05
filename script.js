document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('js-message');
    if (messageElement) {
        messageElement.textContent = "The JavaScript file loaded successfully!";
    }
    window.addEventListener("load", () => {

});

document.addEventListener("DOMContentLoaded", () => {
  // Invert the entire site’s colors
  document.body.style.filter = "invert(1) hue-rotate(180deg)";
  document.body.style.transition = "filter 0.8s ease";

  // Shake all text randomly for 3 seconds
  const elements = document.querySelectorAll("*");
  elements.forEach(el => {
    el.style.animation = "shake 0.2s infinite";
  });

  // Add confetti-like random Comic Sans emojis
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = ["💩", "🤡", "🌀", "😵‍💫", "✨"][Math.floor(Math.random() * 5)];
    Object.assign(emoji.style, {
      position: "fixed",
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      fontSize: Math.random() * 40 + 20 + "px",
      fontFamily: "Comic Sans MS",
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: "fall 3s linear infinite",
      zIndex: "9999",
    });
    document.body.appendChild(emoji);
  }

  // Keyframes for the chaos
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      25% { transform: translate(-1px, -2px) rotate(-1deg); }
      50% { transform: translate(-3px, 0px) rotate(1deg); }
      75% { transform: translate(3px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -1px) rotate(1deg); }
    }
    @keyframes fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  console.log("💩 Ugly mode activated!");
});

