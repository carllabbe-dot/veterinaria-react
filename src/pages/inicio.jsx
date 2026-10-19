
import { Link } from 'react-router'
export function Inicio() {
    return (
        <main id="inicio" className="container mt-5">

            <section className="urgencias-banner container">
                <div className="urgencias-contenido">
                    <h2>
                        URGENCIAS
                        <br />
                        VETERINARIAS 24/7
                    </h2>

                    <p>
                        Sabemos lo importante que es tu mascota y lo impredecible que es un accidente,
                        por lo que en Veterinaria San Marcos estamos las 24 horas de la semana abiertos
                        y dispuestos para ayudar a tu cachorro.
                        <br />

                        Agenda tu hora con nosotros y deja en nuestras manos a quien más amas.
                    </p>
                </div>
            </section>

            <div className="d-grid gap-2 d-md-block p-5 text-center">
                <Link className="btn" to="/cita">
                    Agenda Su Evaluación Médica
                </Link>
            </div>

            <section className="container my-1">
                <div className="row g-4">

                    <div className="col-12 col-md-5">
                        <div className="bloque-info">
                            <h2>
                                <strong>Servicios disponibles</strong>
                            </h2>

                            <ul>
                                <li>Control preventivo</li>
                                <li>Radiografías</li>
                                <li>Ecografías</li>
                                <li>Hospitalización</li>
                                <li>Tratamientos dentales</li>
                                <li>Cardiología</li>
                                <li>Nutrición y control de peso</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="cuadro-imagen">
                            <img
                                src="/images/saculitis-gato-768x768.png"
                                alt="Gato en atención veterinaria"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="container p-5">
                <h1>¿Por qué elegirnos?</h1>

                <div className="col-12 col-md-6">
                    <h2>🩺</h2>
                    <p>Contamos con un equipo de profesionales 100% disponibles</p>

                    <h2>🐾</h2>
                    <p>Atención cercana</p>

                    <h2>📍</h2>
                    <p>Fácil ubicación</p>

                    <h2>🕒</h2>
                    <p>Atención 24/7</p>
                </div>
            </section>

        </main>
    )
}