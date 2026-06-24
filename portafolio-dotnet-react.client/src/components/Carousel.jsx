import { useEffect } from "react";
import Carousel from "bootstrap/js/dist/carousel";
import { motion } from "framer-motion"; // ✅ nuevo import

export default function CustomCarousel() {

    useEffect(() => {
        const el = document.getElementById("portfolioCarousel");
        if (!el) return;

        // Limpiar instancia previa (evita bugs)
        const existing = Carousel.getInstance(el);
        if (existing) existing.dispose();

        // Crear carousel
        const carousel = new Carousel(el, {
            interval: 6000,
            ride: "carousel",
            wrap: true
        });

        carousel.cycle();

    }, []);

    return (

        <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >

            <div id="portfolioCarousel" className="carousel slide">
                <div className="carousel-inner rounded shadow">

                    <div className="carousel-item active">
                        <img src="/carousel/img1.jpg" className="d-block w-100 banner-img" />
                    </div>

                    <div className="carousel-item">
                        <img src="/carousel/img2.jpg" className="d-block w-100 banner-img" />
                    </div>

                    <div className="carousel-item">
                        <img src="/carousel/img3.jpg" className="d-block w-100 banner-img" />
                    </div>

                    <div className="carousel-item">
                        <img src="/carousel/img4.jpg" className="d-block w-100 banner-img" />
                    </div>

                </div>
            </div>

        </motion.div>
    );
}