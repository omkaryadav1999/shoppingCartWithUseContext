import React, { useState, useEffect, useContext } from 'react'
import Product from './Product'
import Store from '../store'

const Home = () => {
    const { name } = useContext(Store)
    const [data, setData] = useState([])

    const getData = async () => {
        const respon = await fetch("https://fakestoreapi.com/products")
        const data = await respon.json()
        setData(data)
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div><h5><b>Products {name}</b></h5> <br /></div>
            <div className="productContainer">
                {data.map((value) => <Product data={value} key={value.id} />)}
            </div>
        </>
    )

}

export default Home