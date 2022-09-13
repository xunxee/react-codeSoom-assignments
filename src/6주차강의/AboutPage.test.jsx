import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  render(<AboutPage />);
});
