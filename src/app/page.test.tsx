import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the home page', () => {
    render(Home());
    const heading = screen.getByRole('heading', { name: /Hellen Cristina/i });
    expect(heading).toBeInTheDocument();
  });
});