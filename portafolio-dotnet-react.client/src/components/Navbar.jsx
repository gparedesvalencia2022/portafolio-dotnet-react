import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { path: "/", label: "Home" },
        { path: "/dotnet", label: ".NET" },
        { path: "/ai", label: "AI" },
        { path: "/react", label: "React" },
        { path: "/microservices", label: "Microservices" },
        { path: "/angular", label: "AngularTech" },
        { path: "/devops", label: "DevOpsTech" },
        { path: "/bootstrap", label: "BootstrapTech" },
        { path: "/html-css", label: "HtmlCssTech" },
    ];

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                {/* LEFT SIDE */}
                <div className="d-flex align-items-center">

                    <NavLink to="/">
                        <motion.img
                            src="/logo.svg"
                            alt="logo"
                            className="logo"
                            width="36"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        />
                    </NavLink>

                    <span className="navbar-brand ms-2">
                        gparedesvalencia ©
                    </span>
                </div>

                {/* HAMBURGER BUTTON (mobile only) */}
                <button
                    className="navbar-toggler d-lg-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`navbar-menu d-lg-flex align-items-center ${isOpen ? "show" : ""}`}
                >


                    {routes.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            onClick={() => setIsOpen(false)} // close menu on click
                            className={({ isActive }) =>
                                "nav-link-custom me-3 " + (isActive ? "active" : "")
                            }
                        >
                            <motion.span
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 8px #2ea043"
                                }}
                            >
                                {item.label}
                            </motion.span>
                        </NavLink>
                    ))}

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/gparedesvalencia2022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-custom ms-2 d-flex align-items-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.i
                            className="bi bi-github me-1"
                            whileHover={{ rotate: 15 }}
                        />
                        GitHub
                    </motion.a>

                </motion.div>

            </div>
        </nav>
    );
}

