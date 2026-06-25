export function startTypingEffect(text, speed, onUpdate) {
    if (!text) return;

    let i = 0;

    const interval = setInterval(() => {
        onUpdate(text.slice(0, i));
        i++;

        if (i > text.length) {
            clearInterval(interval);
        }
    }, speed);

    return interval;
}