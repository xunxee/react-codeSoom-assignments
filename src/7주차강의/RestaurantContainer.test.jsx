import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
      },
    }));
  });

  it('renders name add address', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('renders review write form', () => {
    const { queryByLabelText } = render(
      <RestaurantContainer restaurantId="1" />,
    );

    expect(queryByLabelText('평점')).not.toBeNull();
  });
});
