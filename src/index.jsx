import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

// import App from './2주차/assignment1(creatingCounterApp)/App';
// import App from './2주차/assignment2(creatingTodoApp)/App';
import App from './4주차강의/App';

import store from './4주차강의/store';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
