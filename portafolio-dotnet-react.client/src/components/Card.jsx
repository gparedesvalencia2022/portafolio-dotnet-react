import { motion } from "framer-motion";

export default function Card({ children }) {
    return (
        <motion.div
            className="card p-3"
            initial={{ opacity: 0, y: 40 }}   // aparece desde abajo
            whileInView={{ opacity: 1, y: 0 }} // animación al entrar en pantalla
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // solo una vez
            whileHover={{ scale: 1.05, rotate: 0.3 }}// efecto hover pro
        >
            {children}
        </motion.div>
    );
}
