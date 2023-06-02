import  { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/slices/user/models/user.state';
import { listUser } from '../login/listUser';
import { Navigate, redirect } from 'react-router-dom';
import { login } from '../../../store/slices/user/user.slice';
import { IRootState } from '../../../store/store';

const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  height: calc(100vh - 140px);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 2px;
`;

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const user = useSelector<IRootState, UserState>((state) => state.user)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateUsername = (value: string): boolean => {
    // Implementa tu lógica de validación de nombre de usuario aquí
    return value.length > 0;
  };

  const validatePassword = (value: string): boolean => {
    // Implementa tu lógica de validación de contraseña aquí
    return value.length > 0;
  };

  const handleLogin = async () => {
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
    const userFind = listUser.find((user) => user.username === username && user.password === password);

    if (userFind) {
      console.log(userFind)
      dispatch(login({
        username: userFind.username,
        password: userFind.password,

      }));
      localStorage.setItem('user', JSON.stringify(userFind));
      redirect('/orders')
    }
  };

  return (
    <Container>
      {
        user.isLoggedIn && <Navigate to="/orders" />
      }
      <h2>Iniciar Session</h2>
      {usernameError && <Error>{usernameError}</Error>}

      <Form onSubmit={handleLogin}>
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




const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 10px;
  }
`;
