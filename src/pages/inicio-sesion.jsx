
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function InicioSesion() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function iniciarSesion(event) {
        event.preventDefault();
        if (correo.trim() === '' || password === '') {
            setError('Debe completar todos los campos');
            return;
        }
        if (
            correo === 'admin@tienda.cl' &&
            password === 'administrador'
        ) {
            sessionStorage.setItem('demoAdmin', 'true');
            navigate('/administrador', { replace: true });
        } else {
            setError('Correo o contraseña incorrectos');
        }
    }
    return (
        <main className="container mt-5 mb-5">
            <section className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">
                        Inicio de Sesión
                    </h2>
                    <form onSubmit={iniciarSesion}>
                        <div className="mb-3">

                            <label htmlFor="inicio-sesion-mail" className="form-label">
                                Correo electrónico
                            </label>
                            <input
                                id="inicio-sesion-mail"
                                type="email"
                                className="form-control"
                                placeholder="usuario@gmail.com"
                                value={correo}
                                onChange={(e) => {
                                    setCorreo(e.target.value);
                                    setError('');
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inicio-sesion-pswd" className="form-label">
                                Contraseña
                            </label>
                            <input
                                id="inicio-sesion-pswd"
                                type="password"
                                className="form-control"
                                placeholder="********"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <button
                            className="btn w-100 mt-3" id="btn-inicio-sesion" type="submit">
                            Iniciar Sesión
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}
