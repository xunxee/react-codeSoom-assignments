import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch(() => dispatch);

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
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
            {/* {selectedCategory
            && category.id === selectedCategory.id ? '(V)' : null} */}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
