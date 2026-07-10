// src/components/PluralsightCarousel.jsx
import { useEffect, useRef } from "react";
import Carousel from "bootstrap/js/dist/carousel";
import { motion } from "framer-motion";
import { badgesData } from "../data/badgesData";

export default function PluralsightCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const el = document.getElementById("pluralsightCarousel");
        if (!el) return;

        // Limpiar instancia previa
        const existing = Carousel.getInstance(el);
        if (existing) existing.dispose();

        // Crear carousel con intervalo más corto
        const carousel = new Carousel(el, {
            interval: 6000, // 4 segundos para que sea más dinámico
            ride: "carousel",
            wrap: true,
            pause: "hover", // Pausa al pasar el mouse
        });

        // Forzar el ciclo inmediato
        carousel.cycle();

        // Guardar referencia para limpiar
        carouselRef.current = carousel;

        return () => {
            if (el) {
                const instance = Carousel.getInstance(el);
                if (instance) instance.dispose();
            }
        };
    }, []);

    // Efecto adicional para "resetear" el intervalo después de cada ciclo
    useEffect(() => {
        const el = document.getElementById("pluralsightCarousel");
        if (!el) return;

        const handleSlide = () => {
            // Forzar que el carrusel continúe sin pausa
            const instance = Carousel.getInstance(el);
            if (instance) {
                // Reiniciar el ciclo para evitar pausas largas
                instance.pause();
                setTimeout(() => {
                    instance.cycle();
                }, 100); // Pequeño delay para suavizar
            }
        };

        el.addEventListener("slid.bs.carousel", handleSlide);

        return () => {
            el.removeEventListener("slid.bs.carousel", handleSlide);
        };
    }, []);

    return (
        <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div id="pluralsightCarousel" className="carousel slide">
                <div className="carousel-inner rounded shadow">
                    {badgesData.map((badge, index) => (
                        <div
                            key={badge.id}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="container p-3 d-flex justify-content-center">
                                <div
                                    className="card bg-dark text-white p-4"
                                    style={{
                                        border: "1px solid var(--accent)",
                                        maxWidth: "400px",
                                        width: "100%",
                                        minHeight: "220px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div>
                                        <h5 className="text-white mb-2">{badge.title}</h5>
                                        <small className="text-white-50">
                                            Completed: {badge.date}
                                        </small>
                                    </div>
                                    <a
                                        href={badge.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm mt-3"
                                        style={{
                                            border: "1px solid var(--accent)",
                                            color: "var(--accent)",
                                            backgroundColor: "transparent",
                                            textAlign: "center",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "var(--accent)";
                                            e.currentTarget.style.color = "var(--bg-dark)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = "var(--accent)";
                                        }}
                                    >
                                        View on Pluralsight ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}