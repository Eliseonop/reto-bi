import React, { useState } from 'react';
import { Container, Form, Input, Button, Error } from './register.styles';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/slices/user/models/user.state';
import { Navigate } from 'react-router-dom';
import { IRootState } from '../../../store/store';
import { register } from '../../../store/slices/user/user.slice';



const Register: React.FC = () => {
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

    if (username && password) {
      dispatch(register({
        username,
        password
      }));



    }


    // Aquí puedes agregar la lógica de registro
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (

    <Container>
      {
        user.user.isLoggedIn && <Navigate to="/orders" />
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

