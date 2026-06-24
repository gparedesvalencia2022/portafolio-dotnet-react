import React, { useEffect, useState } from "react";
import banner from "../assets/portfolio-banner.png";
import Carousel from "bootstrap/js/dist/carousel";

export default function Home() {
    // useState is a React Hook used to create and manage component state (data that can change over time)

    // "portfolio" -> variable that stores the current state value (initially null)
    // "setPortfolio" -> function used to update the state and trigger a re-render
    // null -> initial value before data is loaded from the API

    const [portfolio, setPortfolio] = useState(null);

    // useEffect is a React Hook used to handle side effects (like DOM manipulation,
    // event listeners, API calls). It runs after the component renders.
    // The empty dependency array [] means it runs only once when the component mounts.
    useEffect(() => {

        // Fetch portfolio data from API with automatic retry until available
        const fetchData = () => {

            fetch("/api/portfolio")

                // Validate HTTP response status
                .then(res => {
                    if (!res.ok) throw new Error("API not ready");
                    return res.json(); // Parse response to JSON
                })

                // Update component state with fetched data
                .then(data => setPortfolio(data))

                // Retry after delay if request fails
                .catch(() => setTimeout(fetchData, 1000));
        };

        // Trigger initial data load on component mount
        fetchData();

        // Ensures the effect runs only once
    }, []);



    // useEffect is a React Hook used to handle side effects (like DOM manipulation,
    // event listeners, API calls). It runs after the component renders.
    // The empty dependency array [] means it runs only once when the component mounts.

    useEffect(() => {

        if (!portfolio) return; // ✅ espera a que DOM esté listo
        // Get the carousel element from the DOM using its id
        const carouselElement = document.getElementById("portfolioCarousel");

        // If the element does not exist or Bootstrap is not loaded, exit early
        if (!carouselElement) return;

        // Get or create a Bootstrap Carousel instance for this element

        //  Bootstrap carousel instance (correct import)
        const carousel = new Carousel(carouselElement, {
            interval: 6000,
            ride: "carousel"
        });



        // Function to pause the carousel when the mouse enters (hover)
        const onEnter = () => carousel.pause();

        // Function to resume the carousel when the mouse leaves
        const onLeave = () => carousel.cycle();

        // Add event listener for mouse enter (pause autoplay)
        carouselElement.addEventListener("mouseenter", onEnter);

        // Add event listener for mouse leave (resume autoplay)
        carouselElement.addEventListener("mouseleave", onLeave);

        // Cleanup function (VERY IMPORTANT in React)
        // This removes event listeners when the component unmounts
        // to prevent memory leaks and duplicate listeners
        return () => {
            carouselElement.removeEventListener("mouseenter", onEnter);
            carouselElement.removeEventListener("mouseleave", onLeave);
        };

    }, []); // Runs only once when the component mounts
    



    if (!portfolio) {
        console.log("Portfolio is null"); // DEBUG
        return <div>Loading...</div>;
    }


    return (
        <>

            <div className="container py-5">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h1
                        className="fw-bold matrix-text"
                        style={{
                            fontSize: "clamp(1.5rem, 5vw, 3rem)",
                            lineHeight: "1.3",
                            padding: "0 10px"
                        }}
                    >
                        {portfolio.header.title}
                    </h1>

                    {/* IMAGE */}
                    <div className="text-center mt-4">
                        {/* CAROUSEL */}
                        <div className="mt-4">
                            <div
                                id="portfolioCarousel"
                                className="carousel slide">
                                <div className="carousel-inner rounded shadow">

                                    <div className="carousel-item active">
                                        <div className="parallax-container">
                                            <img src="/carousel/img1.jpg" className="d-block w-100 banner-img" />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="parallax-container">
                                            <img src="/carousel/img2.jpg" className="d-block w-100 banner-img" />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="parallax-container">
                                            <img src="/carousel/img3.jpg" className="d-block w-100 banner-img" />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="parallax-container">
                                            <img src="/carousel/img4.jpg" className="d-block w-100 banner-img" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>

                {/* TECHNOLOGIES */}
                <div className="mb-5">
                    <h2 className="text-center mb-4">🚀 Technologies</h2>
                    <div className="row">
                        {portfolio.technologies?.map((tech, i) => (
                            <div className="col-12 col-md-4 mb-3" key={i}>
                                <div className="card p-3 text-center">
                                    {tech}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROJECTS */}
                <div className="mb-5">
                    <h2 className="text-center mb-4">🚀 Projects</h2>
                    <div className="row">
                        {portfolio.projects?.map((proj, i) => (
                            <div className="col-12 col-md-6 mb-4" key={i}>
                                <div className="card p-3">
                                    <h5>{proj.title}</h5>
                                    {proj.lines.map((line, j) => (
                                        <p key={j}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ABOUT */}
                <div className="mb-5">
                    <h2 className="text-center mb-4">About Me</h2>

                    <div className="row text-center text-md-start">

                        {/* EN */}
                        <div className="col-12 col-md-4 mb-4">
                            <h4>🇬🇧 English</h4>
                            {portfolio.aboutEn?.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* FR */}
                        <div className="col-12 col-md-4 mb-4">
                            <h4>🇫🇷 Français</h4>
                            {portfolio.aboutFr?.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* ES */}
                        <div className="col-12 col-md-4 mb-4">
                            <h4>🇪🇸 Español</h4>
                            {portfolio.aboutEs?.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}