import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('renders name', () => {
    const { container } = render((
      <RestaurantPage />
    ));

    expect(container).toHaveTextContent('레스토랑');
  });
});
