import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="site-header">
            <nav className="navbar-custom">
                <Link className="link-logo" to="/">
                    <h1 className="logo">
                        GamExperience
                    </h1>
                </Link>
                <div className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Lista Giochi
                    </NavLink>
                    <NavLink
                        to="/favourites"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Preferiti
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}