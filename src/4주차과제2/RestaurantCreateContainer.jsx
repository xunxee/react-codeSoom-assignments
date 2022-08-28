import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  addRestaurant,
  changeRestaurantFiled,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }
  ));

  function handleChange({ name, value }) {
    dispatch(changeRestaurantFiled({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <RestaurantForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}
