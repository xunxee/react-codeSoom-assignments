import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './7주차강의/App';

// import App from './2주차/assignment1(creatingCounterApp)/App';
// import App from './2주차/assignment2(creatingTodoApp)/App';
// import App from './4주차강의/App';
// import store from './4주차강의/store';
// import store from './4주차과제2/store';
// import store from './5주차과제1/store';
// import store from './6주차강의/store';
// import store from './6주차과제/store';
import store from './7주차강의/store';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
