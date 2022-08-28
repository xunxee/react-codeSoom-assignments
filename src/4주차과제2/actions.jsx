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
