import React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid' 
import Container from './Container/Container'
import Header from './Header/Header'
import Input from './Textfield/Textfield'
import TodoList from './TodoList/TodoList'
import './App.scss'



function App() {
  const ref = useRef()
  const todosArr = [
    {title: 'Do anything, bitch', id: uuidv4(), achieved:false},
    {title: 'Do it right now', id: uuidv4(), achieved: true},
    {title: 'Suka blet', id: uuidv4(), achieved: true}
  ]

  const [todos, setTodos] = useState(todosArr)

  const addTodo = title => {
    const date = new Date().toLocaleString()
    const newTodo = {
      title,
      id: uuidv4(),
      achieved: false,
      created: date
    }

    setTodos(prev => [newTodo,...prev])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(el=>el.id!==id))
  }

  const setAchieved = id => {
    setTodos(prev => prev.map(todo=>todo.id===id?{...todo,achieved:!todo.achieved}:todo))
  }

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      if(ref.current.value!==''){
        addTodo(ref.current.value)
        ref.current.value = ''
      }
    }
    }

  return (
    <div className="App">
      <Header/>
      <Container>
        <Input onKeyPress={onKeyPress} ref={ref}/>
        <TodoList 
        todos={todos}
        removeTodo={removeTodo}
        setAchieved={setAchieved}
        />
      </Container>
      </div>
  );
}

export default App;
