import { motion } from "framer-motion";
import { useState } from "react";

export default function AIProgramming() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "Artificial Intelligence has evolved from a simple concept to one of the most powerful technologies in the world.",
                "In the early days, it was mostly theoretical, but with the rise of data and computing power, it became highly advanced.",
                "Today, AI can generate code, analyze data, and help build full applications.",
                "For developers, this is a major transformation. Tasks that once took weeks can now be done in days.",
                "However, AI does not replace developers — it is a tool.",
                "Think of it this way: the developer is a chef, and AI is a smart assistant.",
                "Together, they create a powerful collaboration."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "L’intelligence artificielle est passée d’un concept simple à une technologie très puissante.",
                "Avec l’évolution des données et de la puissance informatique, elle a énormément progressé.",
                "Aujourd’hui, l’IA peut coder, analyser et aider à créer des applications complètes.",
                "Pour les développeurs, c’est un changement majeur.",
                "Elle ne remplace pas le développeur.",
                "C’est comme un chef avec un assistant intelligent.",
                "C’est une collaboration puissant entre humain et machine."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "La inteligencia artificial ha evolucionado a una de las tecnologías más importantes.",
                "Con más datos y potencia, se ha vuelto muy avanzada.",
                "Hoy puede generar código, analizar datos y crear aplicaciones.",
                "Para los desarrolladores, esto cambia completamente el trabajo.",
                "La IA no reemplaza al programador.",
                "Es como un chef y su asistente.",
                "Es una colaboración poderosa."
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
                    How AI is Transforming Programming
                </h1>

                {/* SELECTOR */}
                <div className="text-center mb-4">
                    <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                    <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                    <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                </div>

                {/* CARD CENTRADA */}
                <div className="d-flex justify-content-center">

                    <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                        {/* SUBTÍTULO centrado */}
                        <h5 className="text-center mb-3">
                            {contentMap[language].title}
                        </h5>

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