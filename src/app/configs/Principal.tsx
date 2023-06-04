import React, {
    useEffect
} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/user/user.slice';

interface PrincipalProps {
    children: React.ReactNode
}

export const Principal: React.FC<PrincipalProps> = ({ children }) => {

    const dispatch = useDispatch();
    // Verificar el estado de autenticación al cargar la aplicación
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch(login(JSON.parse(user)));
        }
        console.log('user', user)
    }, []);


    return (
        <div>{children}</div>
    )
}
