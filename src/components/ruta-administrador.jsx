import { Navigate } from 'react-router';

export function RutaAdministrador({ children }) {

    const sesion = sessionStorage.getItem('demoAdmin');

    if (sesion !== 'true') {
        return <Navigate to="/inicio-sesion" replace />;
    }

    return children;
}