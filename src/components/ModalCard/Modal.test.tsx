import { describe, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../testUtils';

import ModalCard from './ModalCard';

describe('Home page', () => {
  it('render card', async () => {
    renderWithProviders(<ModalCard id={1} closeModal={vi.fn()} />);
    const card = await waitFor(() => screen.getByTestId('modal-card'));

    expect(card).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).toBeNull();
    expect(screen.getByTestId('close')).toBeInTheDocument();

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
  });
});
