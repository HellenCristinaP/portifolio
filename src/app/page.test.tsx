import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the home page', () => {
    render(Home());
    const heading = screen.getByRole('heading', { name: /Welcome to My Portfolio/i });
    expect(heading).toBeInTheDocument();
  });
});