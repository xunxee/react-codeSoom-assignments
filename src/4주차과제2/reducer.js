const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  restaurants: [],
  restaurant: {
    restaurant: initialRestaurant,
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'changeRestaurantFiled') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { restaurant, restaurants } = state;

    return {
      ...state,
      restaurants: [...restaurants, restaurant],
      restaurant: initialRestaurant,
    };
  }

  return state;
}
