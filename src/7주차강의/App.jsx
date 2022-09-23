import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import LoginPage from './LoginPage';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  // TODO: localStorage 에서 accessToken 가져오기
  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
