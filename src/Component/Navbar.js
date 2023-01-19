import { NavLink, Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <div className="containerNav">
                <div className="logo">
                    <Link to="/">
                        <img src="./images/Maggie.jpg" style={{ width: "45px " }} alt="ed" />
                    </Link>
                </div>
                <ul className="navContainer" >
                    <li><NavLink to="/" className="link" style={{ textDecoration: "none" }}>Home</NavLink></li>
                    <li><NavLink to="/Allproducts" className="link" style={{ textDecoration: "none" }}>Allproducts</NavLink></li>
                    <li>
                        <NavLink to="/Cart"><i className="bi bi-cart2" style={{ textDecoration: "none" }}></i></NavLink>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Navbar