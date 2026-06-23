import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">My Portfolio</span>

                <div>
                    <Link className="text-white me-3" to="/">Home</Link>
                    <Link className="text-white me-3" to="/dotnet">.NET</Link>
                    <Link className="text-white" to="/ai">AI</Link>
                </div>
            </div>
        </nav>
    );
}