import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="d-flex align-items-center">

                    <NavLink to="/">
                        <img
                            src="/logo.svg"
                            alt="gp logo"
                            className="logo"
                            width="36"
                        />
                    </NavLink>
                    <span className="navbar-brand ms-2">
                        gparedesvalencia ©
                    </span>
                </div>

                <div className="d-flex align-items-center flex-wrap">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "nav-link-custom me-3 " + (isActive ? "active" : "")
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dotnet"
                        className={({ isActive }) =>
                            "nav-link-custom me-3 " + (isActive ? "active" : "")
                        }
                    >
                        .NET
                    </NavLink>

                    <NavLink
                        to="/ai"
                        className={({ isActive }) =>
                            "nav-link-custom me-3 " + (isActive ? "active" : "")
                        }
                    >
                        AI
                    </NavLink>

                    <a
                        href="https://github.com/gparedesvalencia2022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-custom ms-2 d-flex align-items-center"
                    >
                        <i className="bi bi-github me-1"></i>
                        GitHub
                    </a>

                </div>

            </div>
        </nav>
    );
}