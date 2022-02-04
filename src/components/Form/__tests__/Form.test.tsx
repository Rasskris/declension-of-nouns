import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../Form';
import { ERROR_MESSAGE } from '../../../constants';

const renderComponent = () => {
  const utils = render(<Form />);

  return { ...utils };
};

describe('Form', () => {
  it('render right value when user typing', async () => {
    const { getByRole } = renderComponent();
    const input = getByRole('textbox');
    userEvent.type(input, 'пушка');

    expect(input).toHaveValue('пушка');
  });

  it('render errors when user typing latin letters', () => {
    const { getByRole, getByText } = renderComponent();
    const input = getByRole('textbox');
    userEvent.type(input, 'test');

    const errors = getByText(ERROR_MESSAGE);
    expect(errors).toBeInTheDocument();
  });

  it('should clean input when user click reset button', () => {
    const { getByRole, getByText } = renderComponent();
    const input = getByRole('textbox');
    const resetButton = getByText(/сбросить/i);

    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    userEvent.click(resetButton);
    expect(input).toHaveValue('');
  });

  it('should show handled word', () => {
    const { getByRole, getByText } = renderComponent();
    const input = getByRole('textbox');
    const instrumentalCaseButton = getByText(/тв.п./i);

    userEvent.type(input, 'кошка');
    userEvent.click(instrumentalCaseButton);

    const handledWord = getByText(/кошкой/i);
    expect(handledWord).toBeInTheDocument();
  });
});
