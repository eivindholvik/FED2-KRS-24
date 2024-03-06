import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            This is the header
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Watch me count</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
