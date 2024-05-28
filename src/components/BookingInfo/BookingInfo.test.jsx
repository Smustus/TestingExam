import { render, screen } from '@testing-library/react'
import BookingInfo from './BookingInfo';

describe('Confirmation', () => {
  beforeEach(() => {
    render(<BookingInfo />)
  });

  test('Test if all elements are generated correct', async () => {

    expect(screen.getByRole('heading', { name: /when, what & who/i })).toBeInTheDocument();

    const inputs = await screen.findAllByTestId('input');
    expect(inputs.length).toBe(4);

    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    expect(dateInput.type).toBe('date');
    expect(timeInput.type).toBe('time');
    expect(bowlersInput.type).toBe('number');
    expect(lanesInput.type).toBe('number');
  });
});