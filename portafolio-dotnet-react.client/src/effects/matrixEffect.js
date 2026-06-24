export function startMatrixRain(duration = 80000) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // ✅ estilos
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
    canvas.style.opacity = "0.3";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);

    // ✅ configuración
    const lineHeight = 20;
    const speed = 1;
    const spacingX = 60;

    // ✅ posiciones iniciales
    const lines = Array.from(
        { length: Math.floor(canvas.height / lineHeight) },
        (_, i) => -i * lineHeight
    );

    let animationId;

    function draw() {
        // ✅ fondo con trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ✅ estilo texto
        ctx.fillStyle = "#00ff00";
        ctx.font = "16px monospace";


        //ctx.shadowColor = "#00ff00";
        ctx.shadowBlur = 5;


        for (let i = 0; i < lines.length; i++) {
            const y = lines[i];

            // ✅ dibujar fila horizontal GPV
            for (let x = 0; x < canvas.width; x += spacingX) {
                ctx.fillText("GPV", x, y);
            }

            // ✅ mover
            lines[i] += speed;

            // ✅ reset
            if (lines[i] > canvas.height) {
                lines[i] = -lineHeight;
            }
        }

        animationId = requestAnimationFrame(draw);
    }

    draw();

    // ✅ detener efecto
    setTimeout(() => {
        cancelAnimationFrame(animationId);

        canvas.style.transition = "opacity 2s";
        canvas.style.opacity = "0";

        setTimeout(() => canvas.remove(), 2000);
    }, duration);
}