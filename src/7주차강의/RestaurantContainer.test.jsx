import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

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

  it('renders review write fields', () => {
    const { queryByLabelText } = render(
      <RestaurantContainer restaurantId="1" />,
    );

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 설명')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = render(
      <RestaurantContainer restaurantId="1" />,
    );

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      {
        label: '리뷰 설명',
        name: 'description',
        value: '정말 최고 :)',
      },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name, value },
      });
    });
  });
});
