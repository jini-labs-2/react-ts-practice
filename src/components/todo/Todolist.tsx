import React from 'react'
import { TODO } from '../../api/todo.type';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  .todo-item-header {
    display: grid;
    grid-template-columns: 10% 10% 50% 10% 10%;
    border-bottom: 1px solid #ccc;
  }
  .todo-item {
    display: grid;
    grid-template-columns: 10% 10% 60% 10% 10%;
    border-bottom: 1px solid #ccc;
  }
`;

const Todolist = ({todoList}:{todoList: TODO[]}) => {
  return (
    <TodoListWrapper>
      <div className="todo-list">
        <div className="todo-item-header">
          <div className='todo-id'>ID</div>
          <div className='todo-user'>ユーザーID</div>
          <div className='todo-title'>題目</div>
          <div className='todo-completed'>状態</div>
          <div className='todo-action'>アクション</div>
        </div>
        {todoList ? todoList.map(todo => {
          return (
            <div className="todo-item" key={todo.id}>
              <div className='todo-id'>{todo.id}</div>
              <div className='todo-user'>{todo.userId}</div>
              <div className='todo-title'>{todo.title}</div>
              <div className='todo-completed'>{String(todo.completed)}</div>
              <div className='todo-action'> abc</div>
            </div>
          )
        }) : null}
      </div>
    </TodoListWrapper>
  )
}

export default Todolist