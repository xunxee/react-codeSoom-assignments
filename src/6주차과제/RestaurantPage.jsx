import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

export default function RestaurantPage() {
  return (
    <div>
      레스토랑
    </div>
  );
}
