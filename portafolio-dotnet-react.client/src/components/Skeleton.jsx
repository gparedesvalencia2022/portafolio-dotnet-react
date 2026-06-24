import { motion } from "framer-motion";

export default function Skeleton() {
    return (
        <div className="container py-5">

            <div className="row g-4">

                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div className="col-12 col-md-4" key={i}>
                        <motion.div
                            className="skeleton-card"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}
