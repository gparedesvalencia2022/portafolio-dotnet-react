import { useEffect } from "react";
import { startFootball } from "../effects/footballEffect";

export function useFootballEffect(duration = 30000) {
    useEffect(() => {
        if (!duration) return;
        startFootball(duration);
    }, [duration]);
}