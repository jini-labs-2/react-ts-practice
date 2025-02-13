import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import App from '../App';

export const Layout = () => {
  return (
    <>
      <Header />
      <App />
      <Outlet />
      <Footer />
    </>
  )

}
