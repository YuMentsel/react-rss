import { describe, it, vi } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import { card } from '../../data/fetchedData';

import ModalCard from './ModalCard';

describe('Home page', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => card,
      })
    );

    const setModal = vi.fn();

    await act(async () => {
      render(<ModalCard cardId={0} setModal={setModal} />);
    });
  });

  it('render card', async () => {
    const card = await waitFor(() => screen.getByTestId('modal-card'));

    expect(card).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).toBeNull();
    expect(screen.getByTestId('close')).toBeInTheDocument();

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
  });
});
