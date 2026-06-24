export function startGPVMouseEffect(duration = 30000) {
    function createGPV(x, y) {
        const el = document.createElement("div");

        el.innerText = "gpv";

        el.style.position = "fixed";
        el.style.left = x + "px";
        el.style.top = y + "px";

        el.style.color = "#00ff00";
        el.style.background = "black";
        el.style.padding = "4px 8px";
        el.style.fontFamily = "monospace";
        el.style.fontSize = "12px";

        el.style.pointerEvents = "none";
        el.style.zIndex = "9999";
        el.style.transition = "all 1s ease-out";

        document.body.appendChild(el);

        // animación
        setTimeout(() => {
            el.style.opacity = "0";
            el.style.transform = "translateY(-20px)";
        }, 50);

        setTimeout(() => el.remove(), 1000);
    }

    const moveHandler = (e) => {
        if (Math.random() > 0.7) { // controla cantidad
            createGPV(e.clientX, e.clientY);
        }
    };

    window.addEventListener("mousemove", moveHandler);

    // detener efecto
    setTimeout(() => {
        window.removeEventListener("mousemove", moveHandler);
    }, duration);
}