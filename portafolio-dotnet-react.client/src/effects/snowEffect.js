export function startSnow(duration = 30000) {
    const snowContainer = document.createElement("div");
    snowContainer.style.position = "fixed";
    snowContainer.style.top = "0";
    snowContainer.style.left = "0";
    snowContainer.style.width = "100%";
    snowContainer.style.height = "100%";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.zIndex = "9999";
    document.body.appendChild(snowContainer);

    const interval = setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.innerText = "❄️";
        snowflake.style.position = "absolute";
        snowflake.style.top = "-20px";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.animation = "fall linear";

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);

    }, 200);



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
        @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(${window.innerHeight}px); }
        }
    `;
    document.head.appendChild(style);
}