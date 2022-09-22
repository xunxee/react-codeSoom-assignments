import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
      },
    }));
  });

  it('renders name', () => {
    const params = { id: '1' };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  it('renders review write form', () => {
    const params = { id: '1' };

    const { getByLabelText } = render((
      <RestaurantPage params={params} />
    ));

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    fireEvent.change(getByLabelText('리뷰 내용'), {
      target: { value: '정말 최고 :)' },
    });
  });
});
