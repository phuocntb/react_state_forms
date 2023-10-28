import React from 'react'
import { randomId } from '@mieuteacher/meomeojs';
export default function ProductForm({setFormControl, handleAddProduct}) {
  return (
    <div className='productForm_component'>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleAddProduct({
                id: randomId(),
                name: e.target.name.value,
                price: +e.target.price.value
            })
            /* Reset o input */
            e.target.name.value = ""
            e.target.price.value = ""
            setFormControl(false)
        }} className='form_content'>
            <button onClick={() => {
                setFormControl(false)
            }} className='btn-form_close btn btn-danger'>X</button>

            <div className='form_fields'>
                <p>Name:</p> <input type="text"  name='name'/>
            </div>
            <div className='form_fields'>
                <p>Price:</p> <input type="text" name='price'/>
            </div>
            <button type='submit' className='btn-submit_form btn btn-primary'>Add</button>
        </form>
    </div>
  )
}
