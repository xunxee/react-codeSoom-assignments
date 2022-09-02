import { fetchCategories } from './services/api';

// action creator
export function changeRestaurantFiled({ name, value }) {
  return {
    type: 'changeRestaurantFiled',
    payload: {
      name,
      value,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function loadRestaurants() {
  return async (dispatch) => {
    // TODO: fetch......
    const restaurants = [];
    dispatch(setRestaurants(restaurants));
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
