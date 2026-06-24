import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import LanguageBlock from "../components/LanguageBlock";
import CustomCarousel from "../components/Carousel";
import { motion } from "framer-motion";
import Skeleton from "../components/Skeleton";

export default function Home() {
    // useState is a React Hook used to create and manage component state (data that can change over time)

    // "portfolio" -> variable that stores the current state value (initially null)
    // "setPortfolio" -> function used to update the state and trigger a re-render
    // null -> initial value before data is loaded from the API

    const [portfolio, setPortfolio] = useState(null);

    const [language, setLanguage] = useState("en");

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



    if (!portfolio) {
        console.log("Portfolio is null"); // DEBUG
        return <Skeleton />;
    }


    const languageMap = {
        en: {
            title: "🇬🇧 English",
            content: portfolio.aboutEn
        },
        fr: {
            title: "🇫🇷 Français",
            content: portfolio.aboutFr
        },
        es: {
            title: "🇪🇸 Español",
            content: portfolio.aboutEs
        }
    };



    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >


            <div className="container-fluid">
            <div className="container py-5">

                {/* HEADER */}
                <div className="text-center mb-5">


                        <motion.h1
                            className="fw-bold matrix-text"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {portfolio.header.title}
                        </motion.h1>



                    {/* IMAGE */}
                    <div className="text-center mt-4">
                        {/* CAROUSEL */}
                            <CustomCarousel />
                    </div>
                </div>

                {/* TECHNOLOGIES */}

                <Section title="Technologies">
                    <div className="row">
                        {portfolio.technologies?.map((tech, i) => (
                            <div className="col-12 col-md-4 mb-3" key={i}>
                                <Card>{tech}</Card>
                            </div>
                        ))}
                    </div>
                </Section>


                {/* PROJECTS */}
                <Section title="Projects">
                    <div className="row">
                        {portfolio.projects?.map((proj, i) => (
                            <div className="col-12 col-md-6 mb-4" key={i}>
                                <Card>
                                    <h5>{proj.title}</h5>
                                    {proj.lines.map((line, j) => (
                                        <p key={j}>{line}</p>
                                    ))}
                                </Card>
                            </div>
                        ))}
                    </div>
                    </Section>

                   



                    {/* ABOUT */}
                    <Section title="About Me">
                        <div className="text-center mb-4">
                            <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                            <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                            <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                        </div>

                        <div className="d-flex justify-content-center">

                            <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                                {/* ✅ título centrado */}
                                <h4 className="mb-3 text-center">
                                    {languageMap?.[language]?.title}
                                </h4>

                                {/* ✅ contenido justificado */}
                                <div style={{ textAlign: "justify" }}>
                                    {languageMap?.[language]?.content?.map((item, i) => (
                                        <p key={i} className="mb-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </Section>                
            </div>
            </div>
        </motion.div>
    );
}