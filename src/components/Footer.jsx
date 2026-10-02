import { Link } from 'react-router'
export function Footer() {
    return (
        <footer className="text-center mt-5 p-3 bg-light">
            <section>
                <div>
                    <span>📍Region Metropolitana</span>
                    ||
                    <Link to="mailto:carl.labbe@duocuc.cl"> Contacto</Link>
                    ||
                    <Link to="">Volver al inicio</Link>
                    ||🕒 Lunes a Domingo 24hrs
                </div>
            </section>
            Veterinaria San Marcos 2026® Fullstack II
        </footer>
    )
}
export default Footer;