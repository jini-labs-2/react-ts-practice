import React from 'react';
import { Provider } from 'react-redux';
import Todo from './pages/Todo';
import store from './stores/store';
import Counter from './pages/Counter';
import User from './pages/User';
import Career from './pages/Career';
function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Counter />
        <hr />
        <Todo />
        <hr />
        <User />
        <hr />
        <Career />
      </div>
    </Provider>
  );
}

export default App;