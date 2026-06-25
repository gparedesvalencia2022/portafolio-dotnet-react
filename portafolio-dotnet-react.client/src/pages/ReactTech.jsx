import { motion } from "framer-motion";
import { useState } from "react";

export default function ReactTech() {

    const [language, setLanguage] = useState("en");

    const contentMap = {
        en: {
            title: "🇺🇸 English",
            content: [
                "React is a JavaScript library created by Facebook in 2013 to build user interfaces.",
                "It was designed to simplify front-end development using reusable components and a virtual DOM for better performance.",
                "Over time, React evolved with modern features such as hooks, functional components and a strong ecosystem.",
                "Today, React is widely used to build dynamic web applications and scalable front-end architectures.",
                "React integrates easily with REST APIs and microservices, allowing front-end applications to consume data from distributed backend systems."
            ]
        },
        fr: {
            title: "🇫🇷 Français",
            content: [
                "React est une bibliothèque JavaScript créée par Facebook en 2013 pour construire des interfaces utilisateur.",
                "Elle a été conçue pour simplifier le développement front-end grâce à des composants réutilisables et un DOM virtuel.",
                "Au fil du temps, React a évolué avec des fonctionnalités modernes comme les hooks et les composants fonctionnels.",
                "Aujourd’hui, React est largement utilisé pour créer des applications web dynamiques et évolutives.",
                "React s’intègre facilement avec des API REST et des microservices, permettant de consommer des données provenant de systèmes distribués."
            ]
        },
        es: {
            title: "🇪🇸 Español",
            content: [
                "React es una librería de JavaScript creada por Facebook en 2013 para construir interfaces de usuario.",
                "Fue diseñada para simplificar el desarrollo frontend usando componentes reutilizables y un DOM virtual.",
                "Con el tiempo, React evolucionó incorporando funcionalidades modernas como hooks y componentes funcionales.",
                "Hoy en día, React se utiliza ampliamente para crear aplicaciones web dinámicas y escalables.",
                "React se integra fácilmente con APIs REST y microservicios, permitiendo consumir datos desde sistemas backend distribuidos."
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
                    React — Modern Frontend Technology
                </h1>

                {/* SELECTOR */}
                <div className="text-center mb-4">
                    <button onClick={() => setLanguage("en")} className="btn btn-outline-success me-2">EN</button>
                    <button onClick={() => setLanguage("fr")} className="btn btn-outline-success me-2">FR</button>
                    <button onClick={() => setLanguage("es")} className="btn btn-outline-success">ES</button>
                </div>

                {/* CARD */}
                <div className="d-flex justify-content-center">

                    <div className="card bg-dark text-white p-4" style={{ maxWidth: "750px" }}>

                        {/* SUBTÍTULO */}
                        <h4 className="mb-3 text-center">
                            {contentMap[language].title}
                        </h4>

                        {/* CONTENIDO */}
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