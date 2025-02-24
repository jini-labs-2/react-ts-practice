import React from 'react';
import { Layout } from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div id='main' className='app'>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<h2>Not found page</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;