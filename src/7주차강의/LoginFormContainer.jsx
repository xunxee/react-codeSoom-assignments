import { useDispatch, useSelector } from 'react-redux';

import {
  requestLogin,
  changeLoginField,
} from './actions';

import { get } from './utils';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector(get('loginFields'));

  function handleChange({ name, value }) {
    dispatch(changeLoginField(({ name, value })));
  }

  function handleSubmit() {
    dispatch(requestLogin());
  }

  return (
    <LoginForm
      fileds={{ email, password }}
      onClick={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
