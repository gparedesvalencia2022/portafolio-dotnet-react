import { useEffect } from "react";
import { startSnow } from "../effects/snowEffect";
export function useSnowEffect(duration = 30000) {
    useEffect(() => {
        if (!duration) return;
        startSnow(duration);
    }, [duration]);
}
