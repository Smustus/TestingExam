import { render, screen } from '@testing-library/react'
import Confirmation from './Confirmation'

describe('Confirmation', () => {
  beforeEach(() => {
    render(<Confirmation confirmationDetails={{ when: "2024-05-24T22:10", lanes: "1", people: "2", shoes: ['25', '55'], price: 400, id: "STR6571SPLY", active: true }}/>)
  });

  test('Test if data is tranfered correctly into each element', () => {

    expect(screen.getByRole('heading', { name: /see you soon!/i })).toBeInTheDocument();

    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields.length).toBe(4);
    expect(inputFields[0]).toHaveValue("2024-05-24 22:10");
    expect(inputFields[1]).toHaveValue("2");
    expect(inputFields[2]).toHaveValue("1");
    expect(inputFields[3]).toHaveValue("STR6571SPLY");

    const price = screen.getByTestId('price')
    expect(price).toHaveTextContent(/400/);
  });
});