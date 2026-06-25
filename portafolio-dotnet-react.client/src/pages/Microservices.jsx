import { motion } from "framer-motion";
import { useState } from "react";

export default function Microservices() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "Microservices is an architectural approach that evolved from traditional monolithic applications.",
                "In the past, applications were built as a single large system, which was difficult to maintain and scale.",
                "With .NET Core, developers can build independent microservices, each responsible for a specific business function.",
                "Each microservice exposes APIs that allow communication with other services or frontend applications.",
                "In a modern architecture, a React application interacts with these APIs, consuming data from multiple microservices.",
                "This approach improves flexibility, scalability and makes it easier to maintain and deploy applications."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "Les microservices représentent une évolution des applications monolithiques traditionnelles.",
                "Autrefois, les systèmes étaient construits comme une seule application difficile à maintenir et à faire évoluer.",
                "Avec .NET Core, on peut créer des microservices indépendants, chacun responsable d’une fonctionnalité.",
                "Chaque microservice expose des API pour communiquer avec d’autres services ou avec le front-end.",
                "Dans une architecture moderne, une application React consomme ces API pour afficher les données.",
                "Cette approche apporte plus de flexibilité, de scalabilité et facilite la maintenance des systèmes."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "Los microservicios son una evolución de las aplicaciones monolíticas tradicionales.",
                "Antes, las aplicaciones eran un único sistema grande, difícil de mantener y escalar.",
                "Con .NET Core, es posible crear microservicios independientes, cada uno con una responsabilidad específica.",
                "Cada microservicio expone APIs que permiten la comunicación con otros servicios o aplicaciones frontend.",
                "En una arquitectura moderna, una aplicación React consume estas APIs para obtener y mostrar datos.",
                "Este enfoque mejora la escalabilidad, flexibilidad y facilita el mantenimiento de las aplicaciones."
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

                {/* TITLE */}
                <h1 className="mb-4 text-center">
                    Microservices with .NET Core
                </h1>

                {/* LANGUAGE SELECTOR */}
                <div className="text-center mb-4">
                    <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                    <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                    <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                </div>

                {/* CONTENT CARD */}
                <div className="d-flex justify-content-center">

                    <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                        {/* SUBTITLE */}
                        <h4 className="mb-3 text-center">
                            {contentMap[language].title}
                        </h4>

                        {/* TEXT */}
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