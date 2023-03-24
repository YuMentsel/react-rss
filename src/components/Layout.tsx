import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  public render() {
    return (
      <>
        <header className="header">
          <div className="header__logo">Compoments</div>
          <div className="header__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <a
            className="footer__git"
            href="https://github.com/YuMentsel"
            target={'_blank'}
            rel="noreferrer"
          ></a>
          2023
          <a
            className="footer__rss"
            href="https://rs.school/react/"
            target={'_blank'}
            rel="noreferrer"
          ></a>
        </footer>
      </>
    );
  }
}

export default Layout;
