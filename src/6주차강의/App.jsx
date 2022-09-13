import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
      </ul>
    </div>
  );
}

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
