import { useEffect } from "react";
import Carousel from "bootstrap/js/dist/carousel";

export default function CustomCarousel() {

    useEffect(() => {
        const el = document.getElementById("portfolioCarousel");
        if (!el) return;

        const existing = Carousel.getInstance(el);
        if (existing) existing.dispose();

        const carousel = new Carousel(el, {
            interval: 6000,
            ride: "carousel",
            wrap: true
        });

        carousel.cycle();

    }, []);

    return (
        <div className="mt-4">
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
        </div>
    );
}