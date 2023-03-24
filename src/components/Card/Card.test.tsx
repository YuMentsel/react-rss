import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import cardData from '../../data/plants.json';

import Card from './Card';

describe('Card', () => {
  it('render card - Echeveria SC-092', () => {
    render(<Card {...cardData[0]} />);
    expect(screen.getByText('Echeveria SC-092')).toBeInTheDocument();
    expect(screen.getByText('Succulent')).toBeInTheDocument();
    expect(screen.getByText('Add to card')).toBeInTheDocument();
    expect(screen.getByText('20$')).toBeInTheDocument();
    expect(screen.queryByText('Cactus')).toBeNull();
  });

  it('render card - Sansevieria SV-01', () => {
    render(<Card {...cardData[6]} />);
    expect(screen.getByText('Sansevieria SV-01')).toBeInTheDocument();
    expect(screen.getByText('Sansevieria')).toBeInTheDocument();
    expect(screen.getByText('Add to card')).toBeInTheDocument();
    expect(screen.getByText('30$')).toBeInTheDocument();
    expect(screen.queryByText('Clusia')).toBeNull();
  });
});
