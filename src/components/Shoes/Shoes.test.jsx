import { render, screen, waitFor } from '@testing-library/react'
import Shoes from './Shoes';


describe('Shoes', () => {
  
  test('Test if shoes are maped', async () => {
    render(<Shoes 
      updateSize={() => {}}
      addShoe={() => {}}
      removeShoe={() => {}}
      shoes={[
        { id: '1', size: '10' },
        { id: '2', size: '20' },
        { id: '3', size: '30' },
      ]}
    />);
    await waitFor(() => {
      const shoes = screen.getAllByRole('textbox');
      expect(shoes.length).toBe(3);
    });

  });    
});