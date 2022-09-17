import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');
});
