import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar'
import Home from "./Component/Home"
import Cart from "./Component/Cart"
import Allproducts from './Component/Allproducts'
import SingleProduct from "./Component/SingleProduct"
import Store from "./store"

function App() {
    const [cart, setCart] = useState({})
    useEffect(() => {
        const cart = window.localStorage.getItem("cart")
    }, [])

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])

    return (
        <div>
            <Store.Provider value={{ cart, setCart }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Allproducts" element={<Allproducts />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/SingleProduct/:id" element={<SingleProduct />} />
                </Routes>
            </Store.Provider>

        </div>
    )
}

export default App