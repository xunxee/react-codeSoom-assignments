import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantFiled,
  addRestaurant,
} from './actions';

import restaurants from '../../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantFiled', () => {
    it('changes restaurants form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
        restaurants: [],
      };

      const state = reducer(
        initialState,
        changeRestaurantFiled({
          name: 'name',
          value: '마법사주방',
        }),
      );

      expect(state.restaurant.name).toBe('마법사주방');
    });
  });
});
