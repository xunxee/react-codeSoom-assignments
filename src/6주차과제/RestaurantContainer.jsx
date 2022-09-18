import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

function RestaurantDetail({ restaurant }) {
  return (
    <div>
      {restaurant.name}
      {' '}
      {restaurant.id}
    </div>
  );
}

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
