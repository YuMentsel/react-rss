import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
