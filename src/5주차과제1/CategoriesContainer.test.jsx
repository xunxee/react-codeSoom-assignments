import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const { container, getByText } = render((
    <CategoriesContainer />
  ));

  expect(container).toHaveTextContent('한식');

  // fireEvent.click(getByText('한식'));

  // expect(dispatch).toBeCalled();
});
