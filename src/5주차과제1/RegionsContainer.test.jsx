import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { container, getByText } = render((
    <RegionsContainer />
  ));

  expect(container).toHaveTextContent('서울');

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalled();
});
