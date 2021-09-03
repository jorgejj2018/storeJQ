import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "../component/card"
import {getAllProduct} from "../actions/productActions"

const Home = () => {

    const products = useSelector(state => state.allProduct.ProductAll)
    const dispatch = useDispatch()

    useEffect(() => {
        const allProduct = async () =>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data)

            dispatch(getAllProduct(data))
        }
        allProduct()
    }, [])

    return (
        <>
           {products.length > 0 ? products.map(el => <Card key={el.id} slug={el.id}title={el.title} img={el.image} category={el.category} price={el.price} description={el.description} rating={el.rating.rate}/>) : <h1>Cargando Producto Home</h1>} 
        </>
    )
}

export default Home
