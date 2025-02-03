import React from 'react';
import Todo from './pages/Todo';
import Counter from './pages/Counter';
import User from './pages/User';
import Career from './pages/Career';
function App() {
  return (
    <div className='app'>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <User />
      <hr />
      <Career />
    </div>
  );
}

export default App;