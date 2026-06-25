import { useEffect } from "react";
import { startGPVEffect } from "../effects/gpvEffect";

export function useGPVEffect(duration = 30000) {
    useEffect(() => {
        if (!duration) return;
        startGPV(duration);
    }, [duration]);
}