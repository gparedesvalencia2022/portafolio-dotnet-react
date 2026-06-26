import { motion } from "framer-motion";
import { useState } from "react";

export default function DevOpsTech() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "Docker is a platform that allows applications to run inside containers.",
                "These containers package the application with all its dependencies.",
                "Kubernetes is a system used to manage and orchestrate these containers.",
                "It automatically handles deployment, scaling and monitoring of applications.",
                "In modern architectures, microservices are deployed using Docker and managed by Kubernetes.",
                "This approach ensures high availability, scalability and efficient resource management."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "Docker est une plateforme qui permet d’exécuter des applications dans des conteneurs.",
                "Ces conteneurs incluent toutes les dépendances nécessaires au fonctionnement des applications.",
                "Kubernetes est utilisé pour orchestrer et gérer ces conteneurs.",
                "Il permet de gérer le déploiement, la mise à l’échelle et la surveillance des applications.",
                "Dans les architectures modernes, les microservices sont déployés avec Docker et gérés par Kubernetes.",
                "Cette approche garantit haute disponibilité, scalabilité et optimisation des ressources."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "Docker es una plataforma que permite ejecutar aplicaciones en contenedores.",
                "Estos contenedores incluyen todas las dependencias necesarias.",
                "Kubernetes es un sistema que gestiona y orquesta estos contenedores.",
                "Permite automatizar el despliegue, escalado y monitoreo de aplicaciones.",
                "En arquitecturas modernas, los microservicios se despliegan con Docker y se gestionan con Kubernetes.",
                "Este enfoque garantiza alta disponibilidad, escalabilidad y optimización de recursos."
            ]
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}>

            <div className="container mt-5 mb-5">

                <h1 className="text-center mb-4">Docker & Kubernetes</h1>

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