import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <NavLink className="btn btn-secondary" to="/">Button</NavLink>
                    <NavLink className="btn btn-secondary" to="/">Button</NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;