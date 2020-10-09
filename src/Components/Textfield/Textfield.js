import React, {forwardRef} from 'react'
import './Textfield.scss'

function Input({onKeyPress},ref) {
    return (
        <div className='textfield'>
            <input onKeyPress={onKeyPress} maxLength='85' ref={ref} placeholder='Write what to do' type='text' className={'textfield__input'}/>
        </div>
    )
}

export default forwardRef(Input)
