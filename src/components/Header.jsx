import { Link } from 'react-router'

export function Header(){
    return(
    <header>
        <section className="top-bar text-center">
            <div className="container">
                <div className="informacion-contacto">
                    <span className="text-align">📍Av. Siempreviva #123 Santiago, Chile  </span>
                    <a href="mailto:carl.labbe@duocuc.cl">✉️contacto@veterinariasanmarcos.cl  </a>
                    <a href="tel:+56912345678">☎+569 1234 5678  </a>
                    <span>🕒Lunes a Domingo 24hrs</span>
                </div>
            </div>

        </section>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to=''>
                    <img className="logo-navbar" src="/images/logo.png"/>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="inicio-sesion.html">Ingresa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="ubicacion.html">Encuéntranos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button"
                            data-bs-toggle="dropdown">Servicios</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Vacunas</Link></li>
                            <li><Link className="dropdown-item" to="#">Urgencia</Link></li>
                        </ul>

                    </li>
                </ul>

            </div>
        </nav>
    </header>
    )
}
export default Header;