import { motion } from "framer-motion";
import { useState } from "react";

export default function AngularTech() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "Angular is a front-end framework used to build dynamic and interactive web applications.",
                "It allows developers to create structured and modular architectures for large applications.",
                "Angular uses components and services to organize code in a scalable way.",
                "It connects easily with backend APIs to retrieve and display data.",
                "In modern applications, Angular works with backend technologies like .NET to create full stack solutions.",
                "This framework improves maintainability, performance and development productivity."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "Angular est un framework front-end utilisé pour créer des applications web dynamiques et interactives.",
                "Il permet de structurer les applications de manière modulaire et évolutive.",
                "Angular utilise des composants et des services pour organiser le code.",
                "Il se connecte facilement aux API backend pour récupérer et afficher les données.",
                "Dans les architectures modernes, Angular est souvent utilisé avec des technologies backend comme .NET.",
                "Cela améliore la maintenabilité, les performances et la productivité du développement."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "Angular es un framework frontend utilizado para construir aplicaciones web dinámicas e interactivas.",
                "Permite crear aplicaciones estructuradas y modulares para proyectos grandes.",
                "Angular utiliza componentes y servicios para organizar el código.",
                "Se conecta fácilmente con APIs backend para obtener y mostrar datos.",
                "En aplicaciones modernas, Angular se usa junto con tecnologías backend como .NET.",
                "Este enfoque mejora la escalabilidad, el rendimiento y la productividad del desarrollo."
            ]
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}>

            <div className="container mt-5 mb-5">

                <h1 className="text-center mb-4">Angular Framework</h1>

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