import React, {
    useEffect
} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/user/user.slice';
import { LoaderSpinner } from '../shared-components/loader-spiner/Loader';

interface PrincipalProps {
    children: React.ReactNode
}

export const Principal: React.FC<PrincipalProps> = ({ children }) => {
    const [loading, setLoading] = React.useState(true)
    const dispatch = useDispatch();
    // Verificar el estado de autenticación al cargar la aplicación
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const { password, username } = JSON.parse(user);

            dispatch(login({ username, password }));
        }
        setLoading(false)
    }, [dispatch])


    return (
        <>
            {loading ? <LoaderSpinner /> : children}
        </>
    )
}
