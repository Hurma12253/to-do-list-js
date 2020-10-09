import React from 'react'
import './Checkbox.scss'

function Checkbox({id, onChange, checked}) {
    return (
        <div className='checkbox'>
            <input checked={checked} onChange={onChange} id={id} name={id} type="checkbox"/>
            <label htmlFor={id}></label>
        </div>
    )
}

export default Checkbox
