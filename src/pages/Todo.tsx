import React, { useState } from 'react'
import Todolist from '../components/todo/Todolist';
import { todoList } from '../data/todo.data';
import { TODO } from '../api/todo.type';
import { generateRandom } from '../utils';

const Todo = () => {
  const [todos, setTodos] = useState<TODO[]>(todoList);
  const [inputValue, setInputValue] = useState<string>('');

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const addHandle= () => {
    const newTodo: TODO = {
      userId: generateRandom(),
      id: generateRandom(),
      title: inputValue,
      completed: false,
    }
    setTodos(() => {
      return [...todos, newTodo];
    })
    setInputValue(() => {
      return '';
    })
  }

  return (
    <div className='todo-inner'>
      <div className='todo-header' style={{padding: "2rem 0", backgroundColor: "#a8a", textAlign: "center"}}>
        <h1>TODO</h1>
      </div>
      <div className='todo-input' style={{display: "flex", justifyContent: "center", margin: "2rem 0"}}>
        <input
          type='text'
          value={inputValue}
          onChange={inputHandle}
          placeholder='やる事を入力して下さい。'
          style={{width: "60%", height: "1.5rem", padding: "0.5rem"}}/>
        <input
          type='button'
          value='追加'
          onClick={addHandle}
          style={{width: "80px", height: "1.5rem", }}/>
      </div>
      <Todolist todoList={todos}/>
    </div>
  )
}

export default Todo