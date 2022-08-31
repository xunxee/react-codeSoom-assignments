import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import {
  setRestaurants,
  setCategories,
} from './actions';

function loadCategories({ dispatch }) {
  const categories = [];
  dispatch(setCategories(categories));
}

function loadRestaurants({ dispatch }) {
  const restaurants = [];
  // TODO: load restaurants from API server.
  // 1. API server 확보
  // 2. fetch
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
    loadRestaurants({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
