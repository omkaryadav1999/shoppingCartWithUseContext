import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, } from "react"

function SingleProduct() {
    const [state, setState] = useState("")
    const navigate = useNavigate()
    const data = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${data.id}`)
            .then((value) => { return value.json() })
            .then((value) => setState(value))
    }, [data.id])

    return (

        <div className="singleProductContainer">
            <button onClick={() => navigate("/")}><b>Back</b></button>
            <div className="sub_singleProductContainer">
                <div className="imgContainer">
                    <img src={state.image} alt="img" className="subimagesCart" />

                </div>
                <div className="info">
                    <div className="subtitleD">
                        <h6> <b>title:</b>{state.title}</h6>
                        <h6> <b>category:</b>{state.category}</h6>
                        <h6><b>description:</b>{state.description}</h6>
                    </div>
                    <div className="subpriccontainer">
                        <h6><b>price:</b>{state.price}</h6>
                        <button className="addbtn">addCart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct