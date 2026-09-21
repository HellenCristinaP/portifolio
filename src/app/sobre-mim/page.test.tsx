import { screen, render } from '@testing-library/react';
import SobreMim from './page';

describe('SobreMim', () => {
    it('renders the page title', () => {
        render(<SobreMim />);
        const titleElement = screen.getByText('Sobre Mim');
        expect(titleElement).toBeInTheDocument();
    });
})