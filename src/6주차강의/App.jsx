import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
