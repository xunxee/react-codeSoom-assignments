import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
} from './actions';

function get(key) {
  return (obj) => obj[key];
}

export default function CategoriesContainer() {
  const dispatch = useDispatch(() => dispatch);

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector((state) => state.selectedCategory);

  // const categories = useSelector((state) => state.categories);
  // const selectedCategory = useSelector((state) => state.selectedCategory);

  // const { categories, selectedCategory } = useSelector((state) => ({
  //   categories: state.categories,
  //   selectedCategory: state.selectedCategory,
  // }));

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
