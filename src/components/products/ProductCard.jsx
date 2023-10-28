import React from 'react'
import meoMeoJs from '@mieuteacher/meomeojs'
export default function ProductCard({product, index, handleDeleteProduct}) {
  return (
    <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.name}</td>
        <td>{meoMeoJs.convertToVND(product.price)}</td>
        <td>
            <button onClick={() => {
              handleDeleteProduct(product.id)
            }} className='btn btn-primary'>Delete</button>
        </td>
    </tr>
  )
}
