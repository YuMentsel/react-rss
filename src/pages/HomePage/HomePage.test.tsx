import { describe, it, vi } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { data } from '../../data/fetchedData';

import HomePage from './HomePage';

describe('Home page', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );

    await act(async () => {
      render(<HomePage />);
    });
  });

  it('render cards', async () => {
    const cards = await waitFor(() => screen.getAllByTestId('card'));
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Summer Smith/i)).toBeInTheDocument();

    const firstCard = cards[0];
    const secondCard = cards[1];
    const thirdCard = cards[2];

    expect(firstCard).toBeInTheDocument();
    expect(secondCard).toBeInTheDocument();
    expect(thirdCard).toBeInTheDocument();
  });

  it('render modal', async () => {
    const cards = await waitFor(() => screen.getAllByTestId('card'));
    const firstCard = cards[0];

    await userEvent.click(firstCard);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
