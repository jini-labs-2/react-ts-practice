import React from 'react'
import { TODO } from '../../api/todo.type';

const Todolist = ({todoList}:{todoList: TODO[]}): React.JSX.Element => {
  return (
    <div className="todo-list" style={{margin: "0 auto", width: "80%"}}>
      <div className="todo-items-header">
        <h3> TODO 一覧</h3>
      </div>
      <table style={{backgroundColor: "#a8a", borderColor: "#000", width: "100%"}}>
        <thead>
          <tr style={{backgroundColor: "#aba"}}>
            <th>ID</th>
            <th>ユーザーID</th>
            <th>題目</th>
            <th>状態</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todoList ? todoList.map(todo => {
            return(
              <tr className="todo-item" key={todo.id} style={{backgroundColor: "#a81"}}>
                <td className='todo-id' style={{textAlign: "center"}}>{todo.id}</td>
                <td className='todo-user' style={{textAlign: "center"}}>{todo.userId}</td>
                <td className='todo-title' style={{paddingLeft: "1rem"}}>{todo.title}</td>
                <td className='todo-completed' style={{textAlign: "center"}}>{todo.completed?'完了':'進行'}</td>
                <td className='todo-action' style={{textAlign: "center"}}> <input type="button" value="button" /> </td> 
              </tr>
          )}) : null}
        </tbody>
      </table>
    </div>
  )
}

export default Todolist