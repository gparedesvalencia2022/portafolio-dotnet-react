import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import LanguageBlock from "../components/LanguageBlock";
import CustomCarousel from "../components/Carousel";
import { motion } from "framer-motion";
import Skeleton from "../components/Skeleton";
import { getPortfolio } from "../services/portfolioService";
import TerminalCard from "../components/TerminalCard";
import CurrencyWidget from '../components/CurrencyWidget'; // ← Importa el widget

export default function Home() {
    // ================================================================
    // 1️⃣ STATE MANAGEMENT (useState Hook)
    // ================================================================
    // useState creates and manages component state (data that changes over time)
    // 
    // "portfolio" -> variable storing current state value (initially null)
    // "setPortfolio" -> function to update state and trigger re-render
    // null -> initial value before API data loads

    const [portfolio, setPortfolio] = useState(null);

    // "language" -> tracks selected language (en/fr/es)
    // "setLanguage" -> function to change language
    // "en" -> default language (English)

    const [language, setLanguage] = useState("en");

    // ================================================================
    // 2️⃣ SIDE EFFECTS (useEffect Hook)
    // ================================================================
    // useEffect handles side effects like API calls, DOM manipulation, etc.
    // The empty dependency array [] means this runs ONLY ONCE when component mounts
    // (equivalent to componentDidMount in class components)

    useEffect(() => {
        // Async function to fetch portfolio data from API
        const fetchData = async () => {
            try {
                // Call the portfolio service (returns data or error)
                const data = await getPortfolio();

                // Check if data is invalid or contains an error
                if (!data || data.error) {
                    console.error("Error in portfolioService:", data?.status);
                    return; // Stop execution here to prevent errors
                }

                // ✅ Success: Update state with fetched data
                setPortfolio(data);
            } catch (error) {
                // ❌ Error: Log it to console (user sees Skeleton loading state)
                console.error("Error loading portfolio:", error);
            }
        };

        // Execute the fetch function
        fetchData();

        // Empty dependency array = run once on mount, never again
    }, []);

    // ================================================================
    // 3️⃣ RENDER LOGIC (Conditional Rendering)
    // ================================================================
    // If portfolio is still null (data not loaded yet), show loading skeleton
    // This prevents errors when trying to access portfolio properties

    if (!portfolio) {
        console.log("Portfolio is null"); // DEBUG: Check if loading state is active
        return <Skeleton />; // Show skeleton loading animation
    }

    // ================================================================
    // 4️⃣ DATA TRANSFORMATION (Language Mapping)
    // ================================================================
    // LanguageMap object maps language codes to display text
    // Uses portfolio data to populate about sections in different languages

    const languageMap = {
        en: {
            title: "🇬🇧 English",
            content: portfolio.aboutEn // Array of paragraphs from API
        },
        fr: {
            title: "🇫🇷 Français",
            content: portfolio.aboutFr // Array of paragraphs from API
        },
        es: {
            title: "🇪🇸 Español",
            content: portfolio.aboutEs // Array of paragraphs from API
        }
    };

    // ================================================================
    // 5️⃣ COMPONENT RENDER (JSX)
    // ================================================================
    // The component returns JSX which defines the UI structure

    return (
        // Framer Motion animation wrapper
        // - initial: starting state (opacity 0, moved down 40px)
        // - animate: ending state (opacity 1, original position)
        // - exit: state when component unmounts (fade up)
        // - transition: animation timing (0.5 seconds, smooth easing)

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container-fluid">
                <div className="container py-5">

                    {/* ============================================ */}
                    {/* HEADER - Terminal + Widget en una sola fila */}
                    {/* ============================================ */}
                    <div className="row align-items-center mb-5">
                        {/* Terminal a la IZQUIERDA */}
                        <div className="col-md-8">
                            <TerminalCard />
                        </div>

                        {/* Currency Widget a la DERECHA */}
                        <div className="col-md-4">
                            <CurrencyWidget />
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* HEADER SECTION - Title + Image */}
                    {/* ============================================ */}
                    <div className="text-center mb-5">
                        {/* Animated title with Matrix-style text */}
                        <motion.h1
                            className="fw-bold matrix-text"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {portfolio.header.title} {/* Fetched from API */}
                        </motion.h1>

                        {/* Image/Carousel Section */}
                        <div className="text-center mt-4">
                            <CustomCarousel /> {/* Image carousel component */}
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* TECHNOLOGIES SECTION */}
                    {/* ============================================ */}
                    <Section title="Technologies">
                        <div className="row">
                            {/* Map through technologies array from API */}
                            {portfolio.technologies?.map((tech, i) => (
                                <div className="col-12 col-md-4 mb-3" key={i}>
                                    <Card>{tech}</Card> {/* Display each technology */}
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* ============================================ */}
                    {/* PROJECTS SECTION */}
                    {/* ============================================ */}
                    <Section title="Projects">
                        <div className="row">
                            {/* Map through projects array from API */}
                            {portfolio.projects?.map((proj, i) => (
                                <div className="col-12 col-md-6 mb-4" key={i}>
                                    <Card>
                                        <h5>{proj.title}</h5> {/* Project title */}
                                        {/* Map through project description lines */}
                                        {proj.lines.map((line, j) => (
                                            <p key={j}>{line}</p>
                                        ))}
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* ============================================ */}
                    {/* ABOUT SECTION - Multilingual */}
                    {/* ============================================ */}
                    <Section title="About Me">
                        {/* Language toggle buttons */}
                        <div className="text-center mb-4">
                            <button
                                onClick={() => setLanguage("en")}
                                className="btn btn-outline-success me-2"
                            >
                                EN {/* English */}
                            </button>
                            <button
                                onClick={() => setLanguage("fr")}
                                className="btn btn-outline-success me-2"
                            >
                                FR {/* Français */}
                            </button>
                            <button
                                onClick={() => setLanguage("es")}
                                className="btn btn-outline-success"
                            >
                                ES {/* Español */}
                            </button>
                        </div>

                        {/* Language content card */}
                        <div className="d-flex justify-content-center">
                            <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                                {/* ✅ Centered title */}
                                <h4 className="mb-3 text-center">
                                    {languageMap?.[language]?.title}
                                </h4>

                                {/* ✅ Justified text content */}
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