import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
