import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from '.';

describe('Search', () => {
  it('render search input', () => {
    render(<Search />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});

describe('Search', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should receive input value from local storage', () => {
    const value = 'input value';
    localStorage.setItem('searchValue', value);

    render(<Search />);
    expect(screen.getByTestId('search')).toHaveValue(value);
  });

  it('should receive input value from local storage', () => {
    const value = '';
    localStorage.setItem('searchValue', value);

    render(<Search />);
    expect(screen.getByTestId('search')).toHaveValue(value);
  });
});
