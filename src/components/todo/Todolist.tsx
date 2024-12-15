import React from 'react'
import { TODO } from '../../api/todo.type';

const Todolist = ({todoList}:{todoList: TODO[]}) => {
  return (
    <div className="todo-list">
    {todoList ? todoList.map(todo => {
      return (
        <div className="todo-item" key={todo.id}>
          <div className='todo-id'>{todo.id}</div>
          <div className='todo-user'>{todo.userId}</div>
          <div className='todo-title'>{todo.title}</div>
          <div className='todo-completed'>{todo.completed}</div>
          <div className='todo-action'> abc</div>
        </div>
      )
    }) : null}
  </div>
  )
}

export default Todolist