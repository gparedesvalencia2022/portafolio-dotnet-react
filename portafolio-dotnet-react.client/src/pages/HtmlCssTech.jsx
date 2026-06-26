import { motion } from "framer-motion";
import { useState } from "react";

export default function HtmlCssTech() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "HTML and CSS are the core technologies used to build web pages.",
                "HTML defines the structure of a page, such as headings, paragraphs and images.",
                "CSS is used to style and design the visual appearance of the page.",
                "Together, they allow developers to create modern and responsive user interfaces.",
                "They are the foundation of all web applications and work together with JavaScript.",
                "Understanding HTML and CSS is essential for any web developer."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "HTML et CSS sont les technologies de base utilisées pour créer des pages web.",
                "HTML définit la structure du contenu (titres, paragraphes, images).",
                "CSS permet de styliser et de contrôler l’apparence visuelle des pages.",
                "Ensemble, ils permettent de créer des interfaces modernes et adaptatives.",
                "Ils constituent la base de toutes les applications web.",
                "Maîtriser HTML et CSS est essentiel pour tout développeur web."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "HTML y CSS son las tecnologías base para crear páginas web.",
                "HTML define la estructura del contenido como títulos, textos e imágenes.",
                "CSS permite diseñar y controlar la apariencia visual de la página.",
                "Juntos permiten crear interfaces modernas y responsivas.",
                "Son la base de todas las aplicaciones web.",
                "Dominar HTML y CSS es fundamental para cualquier desarrollador."
            ]
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}>

            <div className="container mt-5 mb-5">

                <h1 className="text-center mb-4">HTML & CSS</h1>

                <div className="text-center mb-4">
                    <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                    <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                    <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                        <h4 className="text-center mb-3">
                            {contentMap[language].title}
                        </h4>

                        <div style={{ textAlign: "justify" }}>
                            {contentMap[language].content.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </motion.div>
    );
}