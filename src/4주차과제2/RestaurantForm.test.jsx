// 이 컴포넌트는 프레젠테이션 컨테이너기 때문에 리덕스의 존재를 몰라야함

import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

test('RestaurantForm', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <RestaurantForm
      onClick={handleClick}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
