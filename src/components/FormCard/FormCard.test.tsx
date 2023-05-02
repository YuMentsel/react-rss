import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormData } from '../../types/interfaces';
import FormCard from './FormCard';

const card: FormData<string> = {
  id: 123456789,
  title: 'Echeveria',
  type: 'Succulent',
  date: '2023-04-01',
  discount: '20',
  stock: '✓',
  image: 'blob:http://localhost:5173/c63b39a0',
};

describe('FormCard', () => {
  it('render card', () => {
    render(<FormCard key={card.id} card={card} />);
    expect(screen.getByText(/Echeveria/i)).toBeInTheDocument();
    expect(screen.getByText('Succulent')).toBeInTheDocument();
    expect(screen.getByText('2023-04-01')).toBeInTheDocument();
    expect(screen.getByText('✓')).toBeInTheDocument();
    expect(screen.getByAltText('form-card-img')).toBeInTheDocument();
    expect(screen.queryByText('Cactus')).toBeNull();
  });
});
