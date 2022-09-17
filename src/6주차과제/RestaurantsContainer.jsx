import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch(() => dispatch);

  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/restaurants/1">
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
