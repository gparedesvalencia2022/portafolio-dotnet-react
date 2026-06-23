import React, { useEffect, useState } from "react";
import banner from "./assets/portfolio-banner.png";
import "./App.css";

function App() {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch("/api/portfolio")
                .then(res => {
                    if (!res.ok) throw new Error("API not ready");
                    return res.json();
                })
                .then(data => setPortfolio(data))
                .catch(() => setTimeout(fetchData, 1000));
        };

        fetchData();
    }, []);

    if (!portfolio) return <div className="text-center mt-5">Loading...</div>;

    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand text-wrap">
                        My Portfolio: gparedesvalencia
                    </span>
                </div>
            </nav>

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
                        <img
                            src={banner}
                            alt="Portfolio Banner"
                            className="img-fluid banner-img shadow"
                        />
                    </div>
                </div>

                {/* TECHNOLOGIES */}
                <div className="mb-5">
                    <h2 className="text-center mb-4">🚀 Technologies</h2>
                    <div className="row">
                        {portfolio.technologies.map((tech, i) => (
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
                        {portfolio.projects.map((proj, i) => (
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
                            {portfolio.aboutEn.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* FR */}
                        <div className="col-12 col-md-4 mb-4">
                            <h4>🇫🇷 Français</h4>
                            {portfolio.aboutFr.map((item, i) => (
                                <div key={i} className="mb-2">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* ES */}
                        <div className="col-12 col-md-4 mb-4">
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

            {/* FOOTER */}
            <footer className="bg-dark text-white text-center p-3">
                © 2026 - Portfolio .NET Developer gparedesvalencia
            </footer>
        </>
    );
}

export default App;
