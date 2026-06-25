import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Home from "./Home";
import DotNet from "./DotNet";
import AIProgramming from "./AIProgramming";
import ReactTech from "./ReactTech";
import Microservices from "./Microservices";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader"; 

import { useSnowEffect } from "@/hooks/useSnowEffect";
import { useFootballEffect } from "@/hooks/useFootballEffect";
import { useMatrixRainEffect } from "@/hooks/useMatrixRainEffect";
import { useGPVMouseEffect } from "@/hooks/useGPVMouseEffect";


import { useRef } from "react";

function App() {
    const started = useRef(false);


    const month = new Date().getMonth() + 1;

    useSnowEffect(month === 12 ? 30000 : null);
    // useFootballEffect(month === 6 || month === 7 ? 30000 : null);

    //useMatrixRainEffect(30000);
    useGPVMouseEffect(3000);


    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // ✅ Detecta cambio de página
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 20);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="d-flex flex-column min-vh-100">

            <Navbar />


            {/* LOADER */}
            <AnimatePresence>
                {loading && <PageLoader />}
            </AnimatePresence>


            {/* CONTENIDO */}
            <div className="flex-grow-1">

                {/*
                AnimatePresence enables page transition animations when components enter or exit the DOM.
                mode="wait" ensures that the current page fully exits before the next one enters.
                */}

                <AnimatePresence mode="wait">

                    {/* 
                Routes defines the mapping between URL paths and React components.
                The location and key props ensure that page transitions are properly animated
                whenever the route changes.
                */}
                    <Routes location={location} key={location.pathname}>
                        {/* Each Route maps a URL path to a specific component */}
                        <Route path="/" element={<Home />} />
                        <Route path="/dotnet" element={<DotNet />} />
                        <Route path="/ai" element={<AIProgramming />} />
                        <Route path="/react" element={<ReactTech />} />
                        <Route path="/microservices" element={<Microservices />} />
                    </Routes>

                </AnimatePresence>

            </div>

            {/* FOOTER */}
            <footer className="bg-dark text-white text-center p-3">
                © 2026 - Portfolio .NET Developer gparedesvalencia
            </footer>

        </div>
    );
}

export default App;
