import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

const TEST_VALUE = '';
const TEST_LABEL = 'test label';
const TEST_TYPE = 'text';
const TEST_PLACEHOLDER = 'test placeholder';
const TEST_ERROR = '';

const renderComponent = () => {
  const handleChange = jest.fn();
  const utils = render(
    <Input
      value={TEST_VALUE}
      label={TEST_LABEL}
      type={TEST_TYPE}
      placeholder={TEST_PLACEHOLDER}
      error={TEST_ERROR}
      onChange={handleChange}
    />,
  );

  return {
    handleChange,
    ...utils,
  };
};

describe('Input', () => {
  it('should invoke change handler', () => {
    const { getByRole, handleChange } = renderComponent();
    const input = getByRole('textbox');
    userEvent.type(input, 'test');

    expect(handleChange).toBeCalledTimes(4);
  });
});
