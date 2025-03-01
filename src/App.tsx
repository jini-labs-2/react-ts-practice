import React from 'react';
import Todo from './pages/Todo';
import styled from 'styled-components';
import { Layout } from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import './index.css';

const Wrapper = styled.section`
  width: 800px;
  height: 100vh;
  background-color: #eee;
  margin: 0 auto;
`;

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
      <Wrapper>
        <Todo />
      </Wrapper>
    </div>
  );
}

export default App;