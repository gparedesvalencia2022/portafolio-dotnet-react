import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <div className="d-flex align-items-center">

                    {/* Logo animado */}
                    <NavLink to="/">
                        <motion.img
                            src="/logo.svg"
                            alt="logo"
                            className="logo"
                            width="36"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </NavLink>

                    <span className="navbar-brand ms-2">
                        gparedesvalencia ©
                    </span>
                </div>

                <div className="d-flex align-items-center flex-wrap">

                    {["/", "/dotnet", "/ai"].map((path, i) => (
                        <NavLink
                            key={i}
                            to={path}
                            className={({ isActive }) =>
                                "nav-link-custom me-3 " + (isActive ? "active" : "")
                            }
                        >
                            <motion.span
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 8px #2ea043"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {path === "/" && "Home"}
                                {path === "/dotnet" && ".NET"}
                                {path === "/ai" && "AI"}
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

                </div>
            </div>
        </nav>
    );
}