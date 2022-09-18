import { render } from '@testing-library/react';

import MenuItems from './6주차과제/MenuItems';

describe('MenuItems', () => {
  context('with menu items', () => {
    it('renders menu items', () => {
      const menuItems = [
        { id: 1, name: '공기밥' },
      ];

      const { container } = render(
        <MenuItems menuItems={menuItems} />,
      );

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('without menu items', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((menuItems) => {
        const { container } = render(<MenuItems menuItems={menuItems} />);

        expect(container).toHaveTextContent('없어요!');
      });

      // const menuItems = [];

      // const { container } = render(
      //   <MenuItems menuItems={menuItems} />,
      // );

      // expect(container).toHaveTextContent('없어요!');
    });
  });
});
