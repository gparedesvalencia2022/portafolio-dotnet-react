import { motion } from "framer-motion";

export default function Section({ title, children }) {
    return (
        <motion.div
            className="mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-center mb-4">{title}</h2>
            {children}
        </motion.div>
    );
}