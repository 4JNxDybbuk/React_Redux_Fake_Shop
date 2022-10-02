import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)

    const cardStyle = {
        widtth: "22rem"
    }

    const imageSize = {
        height: "350px"
    }

    const renderingProducts = products.map((product) => {
        const { id, title, price, category, image } = product
        return (
            <div className='row' key={id}>
                <div className='col-4'>
                    <div className="card mt-3" style={cardStyle}>
                        <div className='card-header'>
                            <h3> {category} </h3>
                        </div>
                        <img src={image} style={imageSize} className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title"> {title}</h4>
                            <h5> Price:  <span> Rs.{price} </span> </h5>
                            <Link to={`product/${id}`} className="btn btn-primary">View Product</Link>
                        </div>
                    </div >
                </div>
            </div>
        );
    });

    return (
        <>
            {renderingProducts}
        </>
    )
}

export default ProductComponent