import React, { useEffect, useState } from "react";
import banner from "./assets/portfolio-banner.png";
import "./App.css";

function App() {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            console.log("Intentando llamar API...");

            fetch("/api/portfolio")
                .then(res => {
                    if (!res.ok) {
                        throw new Error("API aún no disponible");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log("Datos recibidos ✅");
                    setPortfolio(data);
                })
                .catch(err => {
                    console.log("Retry en 1s...", err);
                    setTimeout(fetchData, 1000);
                });
        };

        fetchData();
    }, []);

    if (!portfolio) return <div>Loading...</div>;

    return (
        <>           
            {/* NAVBAR */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">My Portfolio: gparedesvalencia</span>
                </div>
            </nav>

            <div className="container py-5">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h1
                        className="fw-bold matrix-text"
                        style={{                           
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            lineHeight: "1.3"
                        }}
                    >
                        {portfolio.header.title}
                    </h1>

                    {/* IMAGE BANNER */}
                    <div className="text-center mb-5">
                        <img
                            src={banner}
                            alt="Portfolio Banner"
                            className="img-fluid rounded shadow banner-img"/>
                    </div>

                   
                    
                </div>
                <br></br>

                {/* TECHNOLOGIES */}
                <div className="mb-5">
                    <h2>🚀 Technologies</h2>
                    <div className="row">
                        {portfolio.technologies.map((tech, i) => (
                            <div className="col-md-4 mb-3" key={i}>
                                <div className="card p-3 text-center">
                                    {tech}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                {/* PROJECTS */}
                <div className="mb-5">
                    <h2>🚀 Projects</h2>
                    <div className="row">
                        {portfolio.projects.map((proj, i) => (
                            <div className="col-md-6 mb-4" key={i}>
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
                <br></br>
                {/* ABOUT me */}                
                <div className="mb-5">
                    <h2 className="mb-4">About Me</h2>

                    <div className="row">

                        {/* ENGLISH */}
                        <div className="col-md-4">
                            <h4>🇬🇧 English</h4>
                            {portfolio.aboutEn.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* FRANÇAIS */}
                        <div className="col-md-4">
                            <h4>🇫🇷 Français</h4>
                            {portfolio.aboutFr.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* ESPAÑOL */}
                        <div className="col-md-4">
                            <h4>🇪🇸 Español</h4>
                            {portfolio.aboutEs.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            {/* FOOTER */}
            <footer className="bg-dark text-white text-center p-3">
                © 2026 - Portfolio .NET Developer gparedesvalencia
            </footer>
        </>
    );
}

export default App;