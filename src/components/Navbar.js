import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Shop</h1>
                </Link>
                <nav>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/cart">
                        <h1>Cart</h1>
                    </Link>
                </nav>
            </div>
        </header>
    )
}