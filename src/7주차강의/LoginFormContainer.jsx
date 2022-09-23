import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
  setAccessToken,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

function LogoutForm({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
}

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField(({ name, value })));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleClickLogout() {
    dispatch(setAccessToken(''));
  }

  return (
    <>
      { accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
