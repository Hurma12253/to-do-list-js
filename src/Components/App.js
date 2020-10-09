import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid' 
import Header from './Header/Header'
import TodoList from './TodoList/TodoList'
import './App.scss'



function App() {
  const todosArr = [
    {title: 'Do anything, bitch', id: uuidv4(), achieved:false},
    {title: 'Do it right now', id: uuidv4(), achieved: true},
    {title: 'Suka blet', id: uuidv4(), achieved: true}
  ]

  const [todos, setTodos] = useState(todosArr)

  const addTodo = title => {
    const newTodo = {
      title,
      id: uuidv4(),
      achieved: false
    }

    setTodos(prev => [newTodo,...prev])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(el=>el.id!==id))
  }

  const setAchieved = id => {
    setTodos(prev => prev.map(todo=>todo.id===id?{...todo,achieved:!todo.achieved}:todo))
  }

  return (
    <div className="App">
      <Header/>
      <TodoList 
      todos={todos}
      removeTodo={removeTodo}
      setAchieved={setAchieved}
      />
    </div>
  );
}

export default App;
