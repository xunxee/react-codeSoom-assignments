import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('renders name', () => {
    const params = { id: '1' };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('레스토랑 1');
  });
});
