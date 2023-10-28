import React from 'react'
import ProductCard from './ProductCard'
export default function ProductTable({products}) {
    return (
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
                        return <ProductCard key={Date.now() * Math.random()} product={product} index={index}/>
                    })
                }
            </tbody>
        </table>
    )
}
