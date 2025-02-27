import React from 'react';
import { Layout } from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import UseCallback from './pages/testhooks/UseCallback';
import UseState from './pages/testhooks/UseState';
import UseReducer from './pages/testhooks/UseReducer';
import UseForm from './pages/testhooks/UseForm';

function App() {
  return (
    <div id='main' className='app'>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/hooks">
            <Route path="useform" element={<UseForm />} />
            <Route path="usecallback" element={<UseCallback />} />
            <Route path="usestate" element={<UseState />} />
            <Route path="usereducer" element={<UseReducer />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h2>Not found page</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;