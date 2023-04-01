import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should have headline Home', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Home/i);
  });
});
