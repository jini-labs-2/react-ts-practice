import React from 'react'
import Todolist from '../components/todo/Todolist';
import { todoList } from '../data/todo.data';
import InputTodo from '../components/todo/inputTodo';

const Todo = () => {
  return (
    <div className='todo-inner'>
      <h1>TODO</h1>
      <InputTodo />
      <Todolist todoList={todoList}/>
    </div>
  )
}

export default Todo