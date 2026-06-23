import { Link } from "react-router-dom";

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
                    <Link className="text-white me-3" to="/">Home</Link>
                    <Link className="text-white me-3" to="/dotnet">.NET</Link>
                    <Link className="text-white" to="/ai">AI</Link>
                </div>
            </div>
        </nav>
    );
}