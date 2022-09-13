import RestaurantsPage from './RestaurantsPage';

export default function App() {
  const { location: { pathname } } = window;

  if (pathname === '/') {
    return (
      <p>Home</p>
    );
  }

  return (
    <RestaurantsPage />
  );
}
