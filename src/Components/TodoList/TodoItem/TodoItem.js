import React from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import './TodoItem.scss'

function TodoItem({children, id, achieved, removeTodo, setAchieved, created}) {
    let cls = ['todoitem__label']
    if(achieved){
        cls.push('todoitem-achieved')
    }
    return (
        <div className='todoitem' onClick={setAchieved.bind(null,id)}>
            <Checkbox onChange={setAchieved.bind(null,id)} checked={achieved} id={id}/>
            <div className={cls.join(' ')}>{children}</div>
            <div className='todoitem__created'>Создано: {created}</div>
            <div onClick={removeTodo.bind(null,id)} className="todoitem__delete">delete</div>
        </div>
    )
}

export default TodoItem
