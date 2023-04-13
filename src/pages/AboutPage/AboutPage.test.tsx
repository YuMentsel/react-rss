import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('render About us page', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(screen.getByText('This is the About Us page.')).toBeInTheDocument();
  });
});
