import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import './TodoList.scss'

function TodoList({todos = [],removeTodo, setAchieved}) {
    return (
        <div className='todolist'>
            {todos.map(el=>{
                return <TodoItem 
                key={'key'+el.id} 
                id={el.id}
                achieved={el.achieved}
                removeTodo={removeTodo}
                setAchieved={setAchieved}
                >{el.title}</TodoItem>
            })}
        </div>
    )
}

export default TodoList
