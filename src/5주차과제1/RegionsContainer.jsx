import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch(() => dispatch);

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(regionId) {
    // TODO
    dispatch(selectRegion(regionId));
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion && region.id === selectedRegion.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
