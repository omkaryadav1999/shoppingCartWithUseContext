import { NavLink } from "react-router-dom"
import Store from "../store"
import { useContext } from "react"




const Product = ({ data }) => {
    const { cart, setCart } = useContext(Store)
    const { image, title, id, price, category, description } = data


    const addtoCart = (e, product) => {
        e.preventDefault()
        const _cart = { ...cart }  // empty object

        if (!_cart.items) {
            _cart.items = {}
        }

        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1
        } else {
            _cart.items[product.id] = 1

        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0
        }
        _cart.totalItems = 1

        setCart(_cart)
    }
    return (

        <NavLink to={`/SingleProduct/${id}`} style={{ textDecoration: "none", color: "black" }}>
            <div className="products" >
                <img src={image} alt="img" className="imagesCart" />
                <div className="titleD">
                    <h6> title:{title}</h6>
                    <h6> category:{category}</h6>
                </div>
                <div className="priccontainer">
                    <h6>price:{price}</h6>
                    <button onClick={(e) => { addtoCart(e, data) }} className="addbtn">add</button>
                </div>
            </div>
        </NavLink>

    )
}

export default Product