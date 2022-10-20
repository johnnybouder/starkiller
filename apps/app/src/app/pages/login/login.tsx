import {
  Alert,
  AlertType,
  Button,
  ButtonGroup,
  ButtonVariant,
  ErrorMessages,
  Form,
  FormGroup,
  Label,
  TextInput,
} from '@starkiller/base';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REQUIRED_FIELD_MESSAGE } from '../../constants';
import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/user-slice';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasLoginError, setHasLoginError] = useState(false);
  const [usernameErrors, setUsernameErrors] = useState([] as string[]);
  const [passwordErrors, setPasswordErrors] = useState([] as string[]);
  const { login } = useAuth();
  const navigate = useNavigate();
  const currentUser = useSelector(selectUserData);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    username === ''
      ? setUsernameErrors([REQUIRED_FIELD_MESSAGE])
      : setUsernameErrors([]);
    password === ''
      ? setPasswordErrors([REQUIRED_FIELD_MESSAGE])
      : setPasswordErrors([]);

    if (username.length === 0 || password.length === 0) {
      setHasLoginError(true);
      return;
    } else {
      setHasLoginError(false);
      login();
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  });

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Sign In</h1>
          {hasLoginError && (
            <Alert id="loginAlert" type={AlertType.Error} heading="Error">
              Incorrect email or password was entered.
            </Alert>
          )}
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <ErrorMessages errors={usernameErrors} />
              <TextInput
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <ErrorMessages errors={passwordErrors} />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <ButtonGroup>
              <Button
                id="cancel"
                variant={ButtonVariant.Secondary}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button id="submit" type="submit">
                Sign In
              </Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
