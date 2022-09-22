import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review write fields', () => {
    const handleChange = jest.fn();

    const { queryByLabelText } = render(
      <ReviewForm onChange={handleChange} />,
    );

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });
});
