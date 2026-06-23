import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="d-flex align-items-center">

                    <img
                        src="/logo.svg"
                        alt="gp logo"
                        className="logo"
                        width="36"
                    />

                    <span className="navbar-brand ms-2">
                        gparedesvalencia ©
                    </span>
                </div>

                <div>
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
                        The Technology .NET
                    </NavLink>

                    <NavLink
                        to="/ai"
                        className={({ isActive }) =>
                            "nav-link-custom " + (isActive ? "active" : "")
                        }
                    >
                        Artificial Intelligence
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}