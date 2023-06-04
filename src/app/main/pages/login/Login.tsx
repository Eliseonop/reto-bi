import { useState } from 'react';
import { Container, Form, Input, Button, Error } from './login.styles';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/slices/user/models/user.state';
import { Navigate, redirect } from 'react-router-dom';
import { login } from '../../../store/slices/user/user.slice';
import { IRootState } from '../../../store/store';



const Login: React.FC = () => {
  const dispatch = useDispatch()

  const user = useSelector<IRootState, UserState>((state) => state.user)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateUsername = (value: string): boolean => {
    return value.length > 0;
  };

  const validatePassword = (value: string): boolean => {
    return value.length > 0;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');
    if (!validateUsername(username)) {
      setUsernameError('Nombre de usuario inválido');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError('Contraseña inválida');
      return;
    }

    dispatch(login({
      username,
      password
    }));

  }
  if (user?.user?.isLoggedIn) return <Navigate to='/'></Navigate>


  return (
    <Container>

      <h2>Iniciar Session</h2>
      {usernameError && <Error>{usernameError}</Error>}

      <Form onSubmit={(e) => handleLogin(e)}>
        <Input
          type="text"
          placeholder="Nombre de usuario"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {passwordError && <Error>{passwordError}</Error>}

        <Input
          required
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>login</Button>
      </Form>

    </Container>
  );
};

export default Login;



