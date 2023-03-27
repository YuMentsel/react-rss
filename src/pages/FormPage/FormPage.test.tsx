import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import FormPage from './FormPage';

describe('FormPage', () => {
  it('render form', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Create a new card')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/Create card/i);

    expect(screen.getByPlaceholderText('Add title')).toBeInTheDocument();

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Discount')).toBeInTheDocument();
    expect(screen.getByText('In stock')).toBeInTheDocument();
    expect(screen.getByText('Delivery date')).toBeInTheDocument();

    expect(screen.queryByText('Echeveria SC-092')).toBeNull();
  });
});

describe('Form', () => {
  it('show error messages', async () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId('submit-form'));
    expect(screen.getByText('Enter minimum 3 characters.')).toBeInTheDocument();
    expect(screen.getByText('Select a card type.')).toBeInTheDocument();
    expect(screen.getByText('Add an image.')).toBeInTheDocument();
    expect(screen.getByText('Confirm stock status.')).toBeInTheDocument();
  });

  it('check validation', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    userEvent.type(screen.getByTestId('title'), 'Echeveria');
    userEvent.type(screen.getByTestId('date'), '2023-04-01');
    userEvent.click(screen.getByTestId('submit-form'));

    expect(screen.queryByText('Enter minimum 3 characters.')).toBeNull();
    expect(screen.queryByText('Select the delivery date not earlier than tomorrow.')).toBeNull();

    fireEvent.click(screen.getByTestId('submit-form'));
    expect(screen.getByText('Enter minimum 3 characters.')).toBeInTheDocument();
  });

  it('check select', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    userEvent.selectOptions(screen.getByTestId('select'), 'Lavender');
    expect(screen.getByText('Lavender')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId('select'), 'Sansevieria');
    expect(screen.getByText('Sansevieria')).toBeInTheDocument();
  });

  it('show confirmation message', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );

    userEvent.click(screen.getByTestId('submit-form'));
    expect(screen.queryByText('Card created!')).toBeNull();
  });
});
