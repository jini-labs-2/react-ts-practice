import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Throttle from './pages/Throttle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/throttle" element={<Throttle />} />

        <Route path="/*" element={<h2>Not found page</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);