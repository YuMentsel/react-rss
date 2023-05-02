import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorsMessages } from '../../types/enums';
import { renderWithProviders } from '../../../testUtils';
import { getValidDate } from '../../utils/utils';

import FormPage from './FormPage';

describe('FormPage', () => {
  beforeEach(() => {
    renderWithProviders(<FormPage />);
  });

  it('render form', () => {
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

  it('check input value', async () => {
    const inputValue = screen.getByTestId('title');
    await userEvent.type(inputValue, 'Echeveria');
    expect(inputValue).toHaveValue('Echeveria');
  });

  it('check validation', async () => {
    await userEvent.click(screen.getByTestId('submit-form'));

    expect(screen.getByText(ErrorsMessages.title)).toBeInTheDocument();
    expect(screen.getByText(ErrorsMessages.image)).toBeInTheDocument();
    expect(screen.getByText(ErrorsMessages.discount)).toBeInTheDocument();
    expect(screen.getByText(ErrorsMessages.stock)).toBeInTheDocument();
    expect(screen.getByText(ErrorsMessages.date)).toBeInTheDocument();
  });

  it('check validation with invalid values', async () => {
    await userEvent.type(screen.getByTestId('title'), 'Ec');
    await userEvent.type(screen.getByTestId('date'), '2020-08-01');
    await userEvent.click(screen.getByTestId('submit-form'));

    expect(screen.queryByText(ErrorsMessages.titleNotValid)).toBeInTheDocument();
    expect(screen.queryByText(ErrorsMessages.dateNotValid)).toBeInTheDocument();
  });

  it('check validation with valid values', async () => {
    await userEvent.type(screen.getByTestId('title'), 'Echeveria');
    await userEvent.type(screen.getByTestId('date'), getValidDate());
    await userEvent.click(screen.getByTestId('submit-form'));

    expect(screen.queryByText(ErrorsMessages.title)).toBeNull();
    expect(screen.queryByText(ErrorsMessages.titleNotValid)).toBeNull();
    expect(screen.queryByText(ErrorsMessages.date)).toBeNull();
    expect(screen.queryByText(ErrorsMessages.dateNotValid)).toBeNull();
  });

  it('check select', async () => {
    const select = screen.getByTestId('select');

    await userEvent.selectOptions(select, 'Lavender');
    expect(screen.getByText('Lavender')).toBeInTheDocument();

    await userEvent.selectOptions(select, 'Sansevieria');
    expect(screen.getByText('Sansevieria')).toBeInTheDocument();
  });

  it('check radio input', async () => {
    const radio0 = screen.getByTestId('0');
    const radio10 = screen.getByTestId('10');
    const radio20 = screen.getByTestId('20');
    const radio50 = screen.getByTestId('50');

    expect(radio0).not.toBeChecked();
    expect(radio10).not.toBeChecked();
    expect(radio20).not.toBeChecked();
    expect(radio50).not.toBeChecked();

    await userEvent.click(radio10);
    expect(radio10).toBeChecked();

    await userEvent.click(radio50);
    expect(radio50).toBeChecked();
  });

  it('check checkbox input', async () => {
    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('show no confirmation message', async () => {
    await userEvent.click(screen.getByTestId('submit-form'));
    expect(screen.queryByText('Card created!')).toBeNull();
  });
});
