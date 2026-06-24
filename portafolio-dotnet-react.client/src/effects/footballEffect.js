export function startFootball(duration = 30000) {
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
        const ball = document.createElement("div");
        ball.innerText = "⚽";//"\u26BD";
        ball.style.position = "absolute";
        ball.style.top = "-20px";
        ball.style.left = Math.random() * window.innerWidth + "px";
        ball.style.fontSize = "24px";

        ball.style.animation = "fallRotate 6s linear";

        container.appendChild(ball);

        setTimeout(() => ball.remove(), 6000);
    }, 500);

    setTimeout(() => {
        // ✅ FADE OUT
        container.style.transition = "opacity 2s";
        container.style.opacity = "0";

        // ✅ eliminar después del fade
        setTimeout(() => {
            clearInterval(interval);
            container.remove();
        }, 2000); // mismo tiempo que el transition

    }, duration);

    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fallRotate {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(${window.innerHeight}px) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}