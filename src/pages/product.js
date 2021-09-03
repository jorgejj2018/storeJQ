import React ,{ useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductActionsDetail} from '../actions/productActions'
import { Redirect,Route, useParams } from "react-router"


const Product = ({ match }) => {

    let { slug } = useParams();
    let id = slug.replace(':','')
    console.log(id)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(ProductActionsDetail(id))
    }, [])

    const product= useSelector(state => state.allProduct.Product)

      return (
          <>
            <h1>Detalles</h1>
          </>
      );
   

};
export default Product
