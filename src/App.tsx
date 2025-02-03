import React from 'react';
import { Provider } from 'react-redux';
import Todo from './pages/Todo';
import store from './stores/store';
import Counter from './pages/Counter';
import User from './pages/User';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Counter />
        <hr />
        <Todo />
        <hr />
        <User />
      </div>
    </Provider>
  );
}

export default App;