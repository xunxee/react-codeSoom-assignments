import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  function handleClick() {
    // TODO
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
