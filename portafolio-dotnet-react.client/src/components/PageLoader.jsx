import { motion } from "framer-motion";

export default function PageLoader() {
    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.85)",
                zIndex: 999999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#2ea043"
                }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        </motion.div>
    );
}