import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/product-actions'

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err)
            })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
        
    }, [])

    console.log("All Products = ", products)
    return (
        <div className='container mt-3'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing