import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

function AboutPage() {
  return (
    <p>About...</p>
  );
}

function NotFoundPage() {
  return (
    <p>NotFoundPage</p>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
