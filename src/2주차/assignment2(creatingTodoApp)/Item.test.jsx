import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Item from './Item';

test('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  const handleClickDeleteTask = jest.fn();

  const { container, getByText } = render((
    <Item task={task} handleClickDeleteTask={handleClickDeleteTask} />
  ));

  expect(container).toHaveTextContent('뭐라도 하기');
  expect(container).toHaveTextContent('완료');

  expect(handleClickDeleteTask).not.toBeCalled();

  fireEvent.click(getByText('완료'));

  expect(handleClickDeleteTask).toBeCalledWith(1);
});
