import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'
import './product.scss'
export default function ProductTable() {
    const [products, setProducts] = useState([
        {
          id: 1,
          name: "SP 1",
          price: 50000
        },
        {
          id: 2,
          name: "SP 2",
          price: 50000
        },
        {
          id: 3,
          name: "SP 3",
          price: 50000
        }
      ])
    const [formControl, setFormControl] = useState(false);

    function handleAddProduct(newProduct) {
        // spread
        setProducts([...products, newProduct])
    }

    function handleDeleteProduct(productId) {
        // let tempProducts = [...products];
        // for(let i in tempProducts) {
        //     if(tempProducts[i].id == productId) {
        //         tempProducts.splice(i, 1);
        //         break;
        //     }
        // }
        // setProducts(tempProducts)
        setProducts(products.filter(product => product.id != productId))
    }
    return (
        <>
            <button onClick={() => {
                setFormControl(true)
            }} className='btn btn-success'>Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <ProductCard handleDeleteProduct={handleDeleteProduct} key={Date.now() * Math.random()} product={product}  index={index}/>
                        })
                    }
                </tbody>
            </table>
            {
                formControl && <ProductForm handleAddProduct={handleAddProduct} setFormControl={setFormControl}/>
            }
        </>
    )
}
