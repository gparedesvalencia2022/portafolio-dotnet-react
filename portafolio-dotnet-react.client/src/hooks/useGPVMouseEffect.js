import { useEffect } from "react";
import { startGPVMouse } from "../effects/gpvMouseEffect";

export function useGPVMouseEffect(duration = 30000) {
    useEffect(() => {
        if (!duration) return;
        startGPVMouse(duration);
    }, [duration]);
}
