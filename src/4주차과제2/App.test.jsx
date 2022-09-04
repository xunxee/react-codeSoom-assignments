import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
    categories: [], // 이거 안하면 Categories 컴포넌트에서 에러 발생
  }));

  const { queryByText } = render((
    <App />
  ));

<<<<<<< HEAD
  expect(dispatch).toBeCalledTimes(2);

=======
  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants: [] },
  });

  // get은 못찾으면 에러를 발생하기 때문에, query로 바꾼다
  // query는 못찾으면 null을 반환하기 때문에 이를 이용한다.
>>>>>>> main
  expect(queryByText(/김밥제국/)).toBeNull();
});
