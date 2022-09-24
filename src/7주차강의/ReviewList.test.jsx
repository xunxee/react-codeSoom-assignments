import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewList from './ReviewList';

jest.mock('react-redux');

describe('ReviewList', () => {
  it('renders reviews', () => {
    const { getByText } = render((
      <ReviewList />
    ));

    expect(getByText('리뷰')).not.toBeNull();
  });
});
