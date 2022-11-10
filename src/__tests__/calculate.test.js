import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Testing calculator', () => {
  test('See if number is multiplying', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', { name: /5/ }));
    await userEvent.click(screen.getByRole('button', { name: 'x' }));
    await userEvent.click(screen.getByRole('button', { name: /5/ }));
    await userEvent.click(screen.getByRole('button', { name: /=/ }));

    const el = screen.getByTestId('testp').innerHTML;
    expect(el).toBe('25');
  });

  test('See if the result of substracting is working', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', { name: /4/ }));
    await userEvent.click(screen.getByRole('button', { name: '-' }));
    await userEvent.click(screen.getByRole('button', { name: /2/ }));
    await userEvent.click(screen.getByRole('button', { name: /=/ }));

    const el = screen.getByTestId('testp').innerHTML;
    expect(el).toBe('2');
  });
});
