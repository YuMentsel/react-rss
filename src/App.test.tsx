import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../testUtils';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('render page', async () => {
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/RSS-React/i);
  });
});
