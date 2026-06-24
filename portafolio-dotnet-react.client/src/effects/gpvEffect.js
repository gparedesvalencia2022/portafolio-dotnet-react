export function startGPVEffect(duration = 30000) {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";

    document.body.appendChild(container);

    const interval = setInterval(() => {
        const gpv = document.createElement("div");
        const colors = [
            "linear-gradient(135deg, #6c63ff, #00c6ff)", // .NET
            "linear-gradient(135deg, #ff7e5f, #feb47b)", // warm
            "linear-gradient(135deg, #00c9ff, #92fe9d)", // green
        ];
       
        const durationFall = Math.random() * 3 + 3;

          

        // ✅ ESTILO LOGO
        gpv.style.position = "absolute";
        gpv.style.top = "-40px";
        gpv.style.left = Math.random() * window.innerWidth + "px";


        gpv.style.padding = "6px 10px";
        gpv.style.background = "black";
        gpv.style.color = "#00ff00";

        gpv.style.fontFamily = "monospace";
        gpv.style.fontSize = Math.random() * 10 + 12 + "px";
        gpv.innerText = Math.random() > 0.5 ? "GPV" : "010";
        gpv.style.fontWeight = "bold";

        gpv.style.borderRadius = "4px";
        gpv.style.boxShadow = "0 0 8px #00ff00";

        gpv.style.opacity = "0.9";

        

        // ✅ ANIMACIÓN
        gpv.style.animation = `gpvFall ${durationFall}s linear`;

        //gpv.style.background = colors[Math.floor(Math.random() * colors.length)];
        gpv.style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff00";

        container.appendChild(gpv);

        setTimeout(() => gpv.remove(), 6000);

    }, 400);

    // ✅ detener y fade out
    setTimeout(() => {
        container.style.transition = "opacity 2s";
        container.style.opacity = "0";

        setTimeout(() => {
            clearInterval(interval);
            container.remove();
        }, 2000);

    }, duration);

    // ✅ KEYFRAMES
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes gpvFall {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(${window.innerHeight}px) rotate(360deg);
            }
        }
    `;

    document.head.appendChild(style);
}