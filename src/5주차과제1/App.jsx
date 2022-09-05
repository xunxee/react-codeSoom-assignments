import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  loadInitialData,
} from './actions';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API
// 2. 분류 선택 - Category <- API
// 3. 식당 목록 - Restaurants <- API (with region, category)

function CategoriesContainer() {
  return null;
}

function RestaurantsContainer() {
  return null;
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData(dispatch));
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
