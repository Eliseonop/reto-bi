import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { UserState } from '../../../store/slices/user/models/user.state';
import { Navigate, redirect } from 'react-router-dom';
import { listUser } from '../login/listUser';
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


const Register: React.FC = () => {
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

  const handleRegister = async () => {


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
      setUsernameError('Nombre de usuario ya existe');
      return;
    } else {
      const user: UserState = {
        username,
        password,
        isLoggedIn: true,
      };
      listUser.push(user);
      redirect('/login');

    }


    // Aquí puedes agregar la lógica de registro
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (

    <Container>
      {
        user.isLoggedIn && <Navigate to="/orders" />
      }
      <h2>Registrarse</h2>
      <Form
        onSubmit={handleRegister}
      >

        {usernameError && <Error>{usernameError}</Error>}
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
        <Button type='submit'>Registrarse</Button>
      </Form>

    </Container>
  );
};

export default Register;



const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 10px;
  }
`;
