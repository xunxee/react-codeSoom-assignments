import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Log-in title', () => {
    const { container } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Log in');
  });

  it('renders input control', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
  });
});
