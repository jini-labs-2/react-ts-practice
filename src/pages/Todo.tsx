import React, { useState } from 'react'
import Todolist from '../components/todo/Todolist';
import { todoList } from '../data/todo.data';
import { TODO } from '../api/todo.type';
import { generateRandom } from '../utils';
import styled from 'styled-components';

const TodoTitleWrapper = styled.div`
  margin-bottom: 1rem;
  text-align: center; 
`;

const InputContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const InputTextField = styled.input`
  width: 320px;
  padding: .2rem 0;
`;
const Button = styled.input`
  padding: .0rem 1rem;
  margin: 1rem 0;
`;

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
      <TodoTitleWrapper>
        <h1>TODO</h1>
      </TodoTitleWrapper>
      <InputContainer>
        <InputTextField
            type='text'
            value={inputValue}
            onChange={inputHandle}
            placeholder='やる事を入力して下さい。'/>
        <Button
          type='button'
          value='追加'
          onClick={addHandle} />
      </InputContainer>
      <Todolist todoList={todos}/>
    </div>
  )
}

export default Todo