
import { useNavigate } from 'react-router';

export function Administrador() {

    const navigate = useNavigate();

    function cerrarSesion() {
        sessionStorage.removeItem('demoAdmin');
        navigate('/inicio-sesion', { replace: true });
    }

    return (
        <main className="container mt-5 mb-5">
            <h1>Panel de Administración</h1>
            <p>
                Bienvenido al sistema de administración
                de Veterinaria San Marcos.
            </p>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <div className="card p-3">
                        <h3>Administrar citas</h3>
                        <p>Consultar las citas de los pacientes.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card p-3">
                        <h3>Administrar usuarios</h3>
                        <p>Consultar los usuarios registrados.</p>
                    </div>
                </div>

            </div>

            <button className="btn btn-danger mt-4" onClick={cerrarSesion}>
                Cerrar sesión
            </button>

        </main>
    );
}
