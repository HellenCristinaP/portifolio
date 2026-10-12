import { screen, render } from '@testing-library/react';
import Carreira from './page';

describe('Carreira Page', () => {
  it('renders the Carreira page correctly', () => {
    render(<Carreira />);
    expect(screen.getByText('Carreira')).toBeInTheDocument();
  });
});