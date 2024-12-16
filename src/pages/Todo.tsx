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
    <>
      <div className='todo-inner'>
        <div className='todo-inner-title'>
          <h1>TODO</h1>
        </div>
        <div className='todo-inner-input'>
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
      <style jsx>{`
        .todo-inner {
          width: 800px;
          height: 100vh;
          background-color: #eee;
          margin: 0 auto;
        }
        .todo-inner-title {
          text-align: center;
          padding: 1rem;
        }
        .todo-inner-input {
          text-align: center;
          margin-bottom: 2rem;
        }
        .todo-inner-input input:nth-of-type(1){
          width: 420px;
          padding: .2rem;
        }
        .todo-inner-input input:nth-of-type(2){
          width: 60px;
          padding: 0 .2rem;
        }
      `}</style>
    </>
  )
}

export default Todo