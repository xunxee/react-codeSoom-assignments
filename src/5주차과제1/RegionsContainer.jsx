import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch(() => dispatch);

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

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
            {selectedRegion
              && region.id === selectedRegion.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
