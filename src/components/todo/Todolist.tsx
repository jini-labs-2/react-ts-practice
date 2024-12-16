import React from 'react'
import { TODO } from '../../api/todo.type';

const Todolist = ({todoList}:{todoList: TODO[]}) => {
  return (
    <>
      <div className="todo-list">
        <div className="todo-item-head">
          <div className='todo-id'>ID</div>
          <div className='todo-user'>ユーザーID</div>
          <div className='todo-title'>題目</div>
          <div className='todo-completed'>完了</div>
          <div className='todo-action'>アクション</div>
        </div>
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
    <style jsx>{`
      .todo-item-head {
        display: grid;
        grid-template-columns: 10% 10% 60% 10% 10%;
      }
      .todo-item-head div {
        text-align: center;
      }
      .todo-item {
        display: grid;
        grid-template-columns: 10% 10% 60% 10% 10%;
      }
      .todo-item div {
        border-bottom: 1px solid #000;
        padding: .2rem
    `}</style>
    </>
  )
}

export default Todolist