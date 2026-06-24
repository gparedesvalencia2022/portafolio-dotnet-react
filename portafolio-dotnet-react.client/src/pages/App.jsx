import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Home from "./Home";
import DotNet from "./DotNet";
import AIProgramming from "./AIProgramming";
import Navbar from "../components/Navbar";
import PageLoader from "../components/PageLoader";

function App() {

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

                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/dotnet" element={<DotNet />} />
                        <Route path="/ai" element={<AIProgramming />} />
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
