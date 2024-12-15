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
      <h1>TODO</h1>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={inputHandle}
          placeholder='やる事を入力して下さい。'/>
        <input
          type='button'
          value='追加'
          onClick={addHandle} />
      </div>
      <Todolist todoList={todos}/>
    </div>
  )
}

export default Todo