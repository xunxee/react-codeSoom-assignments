import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch(() => dispatch);

  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
