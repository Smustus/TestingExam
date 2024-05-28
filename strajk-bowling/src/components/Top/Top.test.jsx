import { render, screen } from '@testing-library/react'
import Top from './Top';

describe('Top', () => {
  
  test('Test if data is tranfered and added correctly', () => {
    render(<Top 
      title="testHeading"
    />);

    const heading = screen.getByRole('heading')
    expect(heading.textContent).toBe('testHeading');
    
  });

  
});