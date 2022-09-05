const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    return {
      ...state,
      selectedRegion: state.regions.find((region) => region.id === regionId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
