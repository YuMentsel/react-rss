import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../testUtils';
import Search from '.';

describe('Search', () => {
  beforeEach(() => {
    renderWithProviders(<Search />);
  });

  it('render search input', () => {
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('check search value', async () => {
    const value = 'rick';
    const input = screen.getByTestId<HTMLInputElement>('search');

    await userEvent.type(input, value);
    expect(input.value).toBe(value);
  });
});
