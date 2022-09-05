import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  const { container } = render((
    <RegionsContainer />
  ));

  expect(container).toHaveTextContent('regions');
});
