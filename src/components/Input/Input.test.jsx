import { render, screen } from '@testing-library/react'
import Input from './Input';

describe('Input', () => {

  test('Test if data is transferred and added correctly', () => {
    render(<Input 
      label="testLabel"
      type="text"
      customClass="testClass"
      name="testName"
      handleChange={() => {}}
      defaultValue="testDefault"
      disabled={true}
    />);

    const input = screen.getByRole('textbox');
    expect(screen.getByText('testLabel'));
    expect(input).toHaveClass('testClass');
    expect(input.name).toBe('testName');
    expect(input).toHaveValue('testDefault');
    expect(input).toBeDisabled();
  });
});