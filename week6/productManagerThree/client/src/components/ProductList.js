import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const { removeFromDom, products, setProducts } = props;
    const deleteProduct = (personId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                products.map((product, index) => {
                return (
                   <div key={index}>
                        <Link to={"/products/" + product._id}>{product.title}, {product.price}, {product.description}</Link>
                        <Link to={"/products/edit/" + product._id}>Edit</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
            )})
    }
       </div>
    )
}
export default ProductList;

