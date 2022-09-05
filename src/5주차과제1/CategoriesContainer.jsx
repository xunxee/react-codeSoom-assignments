import { useDispatch, useSelector } from 'react-redux';

import {
  setCategories,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch(() => dispatch);

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(categoryId) {
    // dispatch(setCategories(categoryId));
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory
            && category.id === selectedCategory.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
