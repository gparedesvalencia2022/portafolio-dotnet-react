import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import DotNet from "./pages/DotNet";
import AIProgramming from "./pages/AIProgramming";

import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    const location = useLocation(); // ✅ detecta cambio de página

    return (
        <div className="d-flex flex-column min-vh-100">

            <Navbar />

            {/* ✅ CONTENIDO CON ANIMACIÓN */}
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
