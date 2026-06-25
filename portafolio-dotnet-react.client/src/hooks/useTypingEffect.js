import { useEffect, useState } from "react";
import { startTypingEffect } from "../effects/typingEffect";

export function useTypingEffect(text = "", speed = 30) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (!text) return;

        const interval = startTypingEffect(text, speed, setDisplayed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return displayed;
}