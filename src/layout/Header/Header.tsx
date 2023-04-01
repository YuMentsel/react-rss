import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const title = pathname === '/about' ? 'about us' : pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <header className="header">
      <h1 className="header__logo">Components</h1>
      <div className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/form">Form</NavLink>
      </div>
      <h2>{title}</h2>
    </header>
  );
}

export default Header;
