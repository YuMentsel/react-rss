import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should have headline Home', () => {
    render(
      <BrowserRouter>
        <Header title="Home" />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Home/i);
  });

  it('should have headline About Us', () => {
    render(
      <BrowserRouter>
        <Header title="About Us" />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/About Us/i);
  });

  it('should have headline 404', () => {
    render(
      <BrowserRouter>
        <Header title="404" />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/404/i);
  });
});
