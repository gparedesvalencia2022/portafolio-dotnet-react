import { useEffect } from "react";
import { startMatrixRain } from "../effects/matrixEffect";

export function useMatrixRainEffect(duration = 30000) {
    useEffect(() => {
        if (!duration) return;
        startMatrixRain(duration);
    }, [duration]);
}
