import React from 'react';
import Todo from './pages/Todo';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 800px;
  height: 100vh;
  background-color: #eee;
  margin: 0 auto;
`;


function App() {
  return (
    <Wrapper>
      <Todo />
    </Wrapper>
  );
}

export default App;