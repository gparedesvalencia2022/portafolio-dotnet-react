import { motion } from "framer-motion";
import { useState } from "react";

export default function BootstrapTech() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "Bootstrap is a popular front-end framework used to design responsive and modern web interfaces.",
                "It provides pre-built components such as buttons, navigation bars, and layouts.",
                "Bootstrap uses a grid system that allows developers to create flexible layouts for different screen sizes.",
                "With Bootstrap, websites automatically adapt to mobile, tablet and desktop devices.",
                "This framework reduces development time and ensures consistency in design.",
                "It is often used together with HTML, CSS and JavaScript in modern web applications."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "Bootstrap est un framework front-end populaire utilisé pour créer des interfaces web modernes et adaptatives.",
                "Il offre des composants prêts à l’emploi comme des boutons, des menus et des mises en page.",
                "Bootstrap utilise un système de grille permettant de structurer les pages selon différentes tailles d’écran.",
                "Les sites créés s’adaptent automatiquement aux mobiles, tablettes et ordinateurs.",
                "Il permet de réduire le temps de développement et d’assurer une cohérence visuelle.",
                "Il est souvent utilisé avec HTML, CSS et JavaScript dans les applications web modernes."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "Bootstrap es un framework frontend utilizado para diseñar interfaces web modernas y responsivas.",
                "Ofrece componentes predefinidos como botones, menús y layouts.",
                "Utiliza un sistema de rejilla que permite adaptar el diseño a diferentes tamaños de pantalla.",
                "Las aplicaciones se ajustan automáticamente a móviles, tablets y computadoras.",
                "Ayuda a reducir el tiempo de desarrollo y mantener consistencia visual.",
                "Se utiliza junto con HTML, CSS y JavaScript en aplicaciones modernas."
            ]
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}>

            <div className="container mt-5 mb-5">

                <h1 className="text-center mb-4">Bootstrap Framework</h1>

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