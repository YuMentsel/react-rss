import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('render footer', () => {
    render(<Footer />);
    expect(screen.getByText(/2023/)).toBeInTheDocument();
    expect(screen.getByTestId('link')).toHaveAttribute('href', 'https://rs.school/react/');
  });
});
