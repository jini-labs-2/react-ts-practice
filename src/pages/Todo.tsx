import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const fetchTodos = async (): Promise<Todo[]> => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => (res.data as Todo[]))
  }

  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos()
      setTodos(todosData)
    }

    loadTodos()
  }, [])

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>USER</th>
          <th>TITLE</th>
          <th>COMPLETE</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.userId}</td>
          <td>{todo.title}</td>
          <td>{todo.completed ? 'done': 'doing'}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Todo