import React from 'react';
import Todo from './pages/Todo';
import User from './pages/User';
import Photo from './pages/Photo';

function App() {
  return (
    <div className='app'>
      <Todo />
      <User />
      <Photo />
    </div>
  );
}

export default App;