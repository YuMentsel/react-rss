import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from '.';

describe('Search', () => {
  it('render search input', () => {
    const setSearch = vi.fn();
    render(<Search setSearch={setSearch} />);

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

    const setSearch = vi.fn();
    render(<Search setSearch={setSearch} />);

    expect(screen.getByTestId('search')).toHaveValue(value);
  });

  it('should receive input value from local storage', () => {
    const value = '';
    localStorage.setItem('searchValue', value);

    const setSearch = vi.fn();
    render(<Search setSearch={setSearch} />);

    expect(screen.getByTestId('search')).toHaveValue(value);
  });
});
