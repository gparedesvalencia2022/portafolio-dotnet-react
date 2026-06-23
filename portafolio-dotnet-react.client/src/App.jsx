import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DotNet from "./pages/DotNet";
import AIProgramming from "./pages/AIProgramming";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dotnet" element={<DotNet />} />
                    <Route path="/ai" element={<AIProgramming />} />
                </Routes>
            </BrowserRouter>

            {/* FOOTER */}
            <footer className="bg-dark text-white text-center p-3">
                © 2026 - Portfolio .NET Developer gparedesvalencia
            </footer>
        </>
    );
}

export default App;