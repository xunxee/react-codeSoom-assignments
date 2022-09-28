import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem } from './services/storage';

import { actions } from './slice';

export const {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) { return; }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });

    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant({ reviews: [] }));

    const restaurant = await fetchRestaurant({ restaurantId });
    dispatch(setRestaurant(restaurant));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();
    try {
      const accessToken = await postLogin({ email, password });
      // TODO: 로그인 성공하면 -> localStorage 에 저장
      saveItem('accessToken', accessToken);

      dispatch(setAccessToken(accessToken));
    } catch (e) {
      console.error(e);
    }
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const {
      accessToken, reviewFields: { score, description },
    } = getState();

    // 1. 먼저 지운다.

    await postReview({
      accessToken, restaurantId, score, description,
    });

    // 2. 완료가 되면 지운다.

    await dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());

    // 3. 업데이트가 끝나면 지운다.
  };
}
