import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import Booking from './Booking';

describe('Booking', () => {
  beforeEach(() => {
    render(<Booking />)
  });

  //Function to find and fill all input fields
  async function fillInputFields(bowlers){
    const inputs = await screen.findAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: '2024-04-22'} });
    fireEvent.change(timeInput, { target: { value: '22:10'} });
    fireEvent.change(bowlersInput, { target: { value: String(bowlers)} });
    fireEvent.change(lanesInput, { target: { value: '1'} });
  }

  //Function to generate shoe elements
  async function generateShoes(shoes){
    const addShoeBtn = await screen.findByText('+');
    for(let i = 1; i <= shoes; i++){
      fireEvent.click(addShoeBtn);
      const shoeInput = screen.getAllByRole('textbox');
      fireEvent.change(shoeInput[i - 1], { target: { value: '35'} });
    }
    const shoeInputs = await screen.findAllByRole('textbox')
    expect(shoeInputs.length).toBe(shoes);
  }


  test('Test if the user can remove shoes after being added', async () => {
   
    //Add a pair of shoes
    const addShoeBtn = await screen.findByText('+');
    fireEvent.click(addShoeBtn);

    const shoeInput = screen.getByRole('textbox');
    fireEvent.change(shoeInput, { target: { value: '55'} });
    
    const shoeContainer = document.querySelector('.shoes');
    const shoeBtn = await within(shoeContainer).findAllByRole('button')
    expect(shoeBtn.length).toBe(2);
    
    //Click the button and see if the shoes are removed
    fireEvent.click(shoeBtn[0]);
    const shoeBtnsAfter = await within(shoeContainer).findAllByRole('button')
    expect(shoeBtnsAfter.length).toBe(1);
  });


  test('(Full user flow). Test if the user can make a reservation after filling all input fields correctly, and if a price and booking id is returned followed by possibility to navigate back to the booking page', async () => {

    await fillInputFields(3);

    await generateShoes(3);

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);
    
    await waitFor(() => {
      const heading = screen.getAllByRole('heading');
      expect(heading[0]).toHaveTextContent(/see you/i);
    });

    //Check if price and booking id is displayed on the confirmation page after sending a booking request
    const price = screen.getByText(/2560/);
    expect(price).toBeInTheDocument();
    const inputsConfirmpage = await screen.findAllByTestId('input');
    expect(inputsConfirmpage[3].value).toBe('STR82H3LL')

    //Check if the return btn returns you to booking page
    const returnBtn = screen.getByRole('button');
    fireEvent.click(returnBtn);
    await waitFor(() => {
      const heading = screen.getAllByRole('heading');
      expect(heading[0]).toHaveTextContent(/booking/i);
    });
  });


  test('Test if the user can make a reservation even if date input is empty', async () => {

    const inputs = screen.getAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: ''} });
    fireEvent.change(timeInput, { target: { value: '22:10'} });
    fireEvent.change(bowlersInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: '1'} });

    await generateShoes(3)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });


  test('Test if the user can make a reservation even if time input is empty', async () => {

    const inputs = screen.getAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: '2024-04-22'} });
    fireEvent.change(timeInput, { target: { value: ''} });
    fireEvent.change(bowlersInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: '1'} });

    await generateShoes(3)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });


  test('Test if the user can make a reservation even if player input is empty', async () => {

    const inputs = screen.getAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: '2024-04-22'} });
    fireEvent.change(timeInput, { target: { value: '22:10'} });
    fireEvent.change(bowlersInput, { target: { value: '' } });
    fireEvent.change(lanesInput, { target: { value: '1'} });

    await generateShoes(3)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });


  test('Test if the user can make a reservation even if lane input is empty', async () => {

    const inputs = screen.getAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: '2024-04-22'} });
    fireEvent.change(timeInput, { target: { value: '22:10'} });
    fireEvent.change(bowlersInput, { target: { value: '3' } });
    fireEvent.change(lanesInput, { target: { value: ''} });

    await generateShoes(3)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });

  
  test('Test if the user can make a reservation if the amount of people doesnt match the amount of shoes', async () => {

    await fillInputFields(4)

    await generateShoes(3)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });


  test('Test if the user can make a reservation if the amount of people exceeds the maximum amount per lane', async () => {

    await fillInputFields(6) //1 lane stated

    await generateShoes(6)

    const confirmBtn = screen.getByText(/stri/i);
    fireEvent.click(confirmBtn);

    const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
    expect(errorMsg).toBeInTheDocument();
  });
  
});