import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { card } from '../../data/fetchedData';

import Card from './Card';

describe('Card', () => {
  beforeEach(async () => {
    const openModal = vi.fn();
    render(<Card data={card} openModal={openModal} />);
  });

  it('render card', () => {
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('render card - Rick Sanchez', () => {
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.queryByText('Citadel of Ricks')).toBeNull();
    expect(screen.queryByText('Earth (C-137)')).toBeNull();
    expect(screen.queryByText('Cactus')).toBeNull();
  });
});
