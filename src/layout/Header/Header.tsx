import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderTitle {
  title: string;
}

class Header extends React.Component<HeaderTitle> {
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">Components</h1>
        <div className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/form">Form</NavLink>
        </div>
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}

export default Header;
