import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Testing operators', () => {
  test('See if passing the multiply operator works properly', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', { name: /2/ }));
    await userEvent.click(screen.getByRole('button', { name: 'x' }));
    await userEvent.click(screen.getByRole('button', { name: /7/ }));
    await userEvent.click(screen.getByRole('button', { name: /=/ }));

    const el = screen.getByTestId('testp').innerHTML;
    expect(el).toBe('14');
    expect(el).not.toBe(null);
  });

  test('See if passing the substracting operator works properly', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByRole('button', { name: /9/ }));
    await userEvent.click(screen.getByRole('button', { name: '-' }));
    await userEvent.click(screen.getByRole('button', { name: /5/ }));
    await userEvent.click(screen.getByRole('button', { name: /=/ }));

    const el = screen.getByTestId('testp').innerHTML;
    expect(el).toEqual('4');
    expect(el).not.toBe(null);
  });
});
