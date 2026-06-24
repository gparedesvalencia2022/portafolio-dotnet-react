import { motion } from "framer-motion";
import { useState } from "react";

export default function DotNet() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                ".NET is a software platform created by Microsoft that has evolved significantly over time.",
                "At the beginning, it was mainly used for Windows applications.",
                "Today, it is a modern cross-platform framework that runs on Windows, Linux and macOS.",
                "It is widely used in North America by startups and large companies.",
                "In simple terms, .NET has become a powerful tool for building modern applications everywhere."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                ".NET est une plateforme créée par Microsoft qui a beaucoup évolué.",
                "Au début, elle servait surtout pour Windows.",
                "Aujourd’hui, c’est une technologie moderne et multiplateforme.",
                "Elle fonctionne sur Windows, Linux et macOS.",
                "C’est un outil puissant pour créer des applications modernes."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                ".NET es una plataforma creada por Microsoft que ha evolucionado mucho.",
                "Al inicio estaba enfocada en Windows.",
                "Hoy es una tecnología moderna y multiplataforma.",
                "Funciona en Windows, Linux y macOS.",
                "Es una herramienta poderosa para desarrollar aplicaciones modernas."
            ]
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >

            <div className="container mt-5 mb-5">

                {/* TÍTULO */}
                <h1 className="mb-4 text-center">
                    .NET — The Technology I Love
                </h1>

                {/* SELECTOR */}
                <div className="text-center mb-4">
                    <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                    <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                    <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                </div>

                {/* CONTENIDO CENTRADO */}


                {/* CARD CENTRADA */}
                <div className="d-flex justify-content-center">

                    <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                        {/* SUBTÍTULO centrado */}
                        <h4 className="mb-3 text-center">
                            {contentMap[language].title}
                        </h4>

                        {/* CONTENIDO justificado */}
                        <div style={{ textAlign: "justify" }}>
                            {contentMap[language].content.map((line, i) => (
                                <p key={i} className="mb-2">
                                    {line}
                                </p>
                            ))}
                        </div>

                    </div>

                </div>



            </div>

        </motion.div>
    );
}