import { useParams } from 'react-router-dom';

import { fetchRestaurant } from './services/api';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <div>
      레스토랑
      {' '}
      {id}
    </div>
  );
}
