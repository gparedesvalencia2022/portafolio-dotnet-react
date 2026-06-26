import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {

    // Centralized route configuration (path + label)
    const routes = [
        { path: "/", label: "Home" },
        { path: "/dotnet", label: ".NET" },
        { path: "/ai", label: "AI" },
        { path: "/react", label: "React" },
        { path: "/microservices", label: "Microservices" },
        { path: "/angular", label: "AngularTech" },
        { path: "/devops", label: "DevOpsTech" }
    ];

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <div className="d-flex align-items-center">

                    {/* 
                    Logo that navigates to home page.
                    Includes animation on hover using Framer Motion.
                    */}
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

                    {/* Brand text */}
                    <span className="navbar-brand ms-2">
                        gparedesvalencia ©
                    </span>
                </div>

                <div className="d-flex align-items-center flex-wrap">

                    {/* 
                    Navigation links generated dynamically from the routes array.
                    NavLink automatically applies "active" class when the route matches the current URL.
                    */}
                    {routes.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            className={({ isActive }) =>
                                "nav-link-custom me-3 " + (isActive ? "active" : "")
                            }
                        >
                            {/* 
                            Animated label using Framer Motion for hover effects
                            */}
                            <motion.span
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 8px #2ea043"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.label}
                            </motion.span>
                        </NavLink>
                    ))}

                    {/* 
                    External GitHub link (opens in new tab)
                    */}
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
