document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('js-message');
    if (messageElement) {
        messageElement.textContent = "The JavaScript file loaded successfully!";
    }
    window.addEventListener("load", () => {
  // Flashy ugly intro
  const msg = document.createElement("div");
  msg.innerHTML = "😱 WELCOME TO THE UGLIEST QUIZ EVER!!! 😵‍💫";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%) rotate(0deg)";
  msg.style.fontFamily = "Comic Sans MS, Papyrus, cursive";
  msg.style.fontSize = "3rem";
  msg.style.fontWeight = "bold";
  msg.style.padding = "20px";
  msg.style.background = "linear-gradient(45deg, lime, hotpink, cyan, yellow)";
  msg.style.color = "black";
  msg.style.border = "10px ridge red";
  msg.style.textShadow = "2px 2px 5px magenta";
  msg.style.zIndex = "9999";
  msg.style.animation = "spinAndFlash 2s infinite linear";

  document.body.appendChild(msg);

  // Random color chaos in background
  let interval = setInterval(() => {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, 200);

  // End chaos after 4 seconds
  setTimeout(() => {
    clearInterval(interval);
    msg.remove();
    document.body.style.backgroundColor = "white"; // reset
  }, 4000);
});

// add ugly spin animation
const style = document.createElement("style");
style.textContent = `
@keyframes spinAndFlash {
  0% { transform: translate(-50%, -50%) rotate(0deg); color: red; }
  25% { transform: translate(-50%, -50%) rotate(90deg); color: yellow; }
  50% { transform: translate(-50%, -50%) rotate(180deg); color: lime; }
  75% { transform: translate(-50%, -50%) rotate(270deg); color: cyan; }
  100% { transform: translate(-50%, -50%) rotate(360deg); color: magenta; }
}
`;
document.head.appendChild(style);

});
