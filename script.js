document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('js-message');
  message.textContent = "✅ CyberCore JavaScript online!";
  const button = document.getElementById('uglyButton');
  button.addEventListener('click', activateUglyMode);
});

function activateUglyMode() {
  alert("💀 Engaging Ugly Mode!");
  document.body.style.filter = "invert(1) hue-rotate(180deg)";
  document.body.style.transition = "all 1s ease";

  const emojis = ["💩", "🤡", "🌀", "😵‍💫", "✨"];
  for (let i = 0; i < 25; i++) {
    const e = document.createElement("div");
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    Object.assign(e.style, {
      position: "fixed",
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      fontSize: Math.random() * 40 + 20 + "px",
      animation: "fall 4s linear infinite",
      zIndex: 9999
    });
    document.body.appendChild(e);
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
