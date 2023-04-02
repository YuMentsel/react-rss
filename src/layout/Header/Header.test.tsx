import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should have headline Home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Home/i);
  });

  it('should have headline About Us', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/About Us/i);
  });

  it('should have headline Form', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Form/i);
  });

  it('should have headline 404', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('404');
  });
});
