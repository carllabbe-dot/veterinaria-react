import { Link } from 'react-router'
export function Cita(){
    return(
        <main>
        <section className="container">
            <div className="pt-5 form-floating">
                <label id="titulo-cita">Datos del Dueño</label>
            </div>
            <form className="row g-3 pt-4">
                <div className="col-4">
                    <label for="inputEmail4" className="form-label">Nombre Completo Dueño</label>
                    <input type="email" className="form-control" id="nombre-duenio"/>
                </div>

                <div className="col-4">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="mail-cliente" placeholder="cliente@email.com"/>
                </div>
                <div className="col-4">
                    <label for="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="fono-cliente" placeholder="+569XXXXXXXX"/>
                </div>
                <div className="col-4">
                    <label for="inputAddress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="direccion-cliente" placeholder="Av. Siempreviva #123"/>
                </div>
                <div className="col-4">
                    <label for="comuna" className="form-label">Comuna</label>
                    <select id="comuna-cliente" className="form-select">
                        <option selected>Selecciona comuna</option>
                        <option>Cerrillos</option>
                        <option>Cerro Navia</option>
                        <option>Conchalí</option>
                        <option>El Bosque</option>
                        <option>Estación Central</option>
                        <option>Huechuraba</option>
                        <option>Independencia</option>
                        <option>La Cisterna</option>
                        <option>La Florida</option>
                        <option>La Granja</option>
                        <option>La Pintana</option>
                        <option>La Reina</option>
                        <option>Las Condes</option>
                        <option>Lo Barnechea</option>
                        <option>Lo Espejo</option>
                        <option>Lo Prado</option>
                        <option>Macul</option>
                        <option>Maipú</option>
                        <option>Ñuñoa</option>
                        <option>Pedro Aguirre Cerda</option>
                        <option>Peñalolén</option>
                        <option>Providencia</option>
                        <option>Pudahuel</option>
                        <option>Quilicura</option>
                        <option>Quinta Normal</option>
                        <option>Recoleta</option>
                        <option>Renca</option>
                        <option>San Joaquín</option>
                        <option>San Miguel</option>
                        <option>San Ramón</option>
                        <option>Santiago</option>
                        <option>Vitacura</option>
                    </select>
                </div>
                <div className="w-100"></div>
                <div className="col-4">
                    <label for="telefono" className="form-label">Nombre Contacto Emergencia</label>
                    <input type="text" className="form-control" id="nombre-cliente-emergencia"/>
                </div>
                <div className="col-4">
                    <label for="telefono" className="form-label">Teléfono Contacto Emergencia</label>
                    <input type="text" className="form-control" id="fono-cliente-emergencia" placeholder="+569XXXXXXXX"/>
                </div>
            </form>
            <div className="pt-5 form-floating" id="titulo-cita">
                <label id="titulo-cita">Datos de la Mascota</label>
            </div>
            <form className="row g-3 pt-4">
                <div className="col-4">
                    <label for="nombre-paciente" className="form-label">Nombre Mascota</label>
                    <input type="paciente" className="form-control" id="nombre-paciente"/>
                </div>
                <div className="col-4">
                    <label for="inputCity" className="form-label">Edad Mascota</label>
                    <input type="text" className="form-control"/>
            </div>
            <div className="col-4">
                    <label for="inputCity" className="form-label">Peso Mascota</label>
                    <select id="peso-mascota" className="form-select">
                        <option selected>Seleccione Rango</option>
                        <option>0.5-2 Kg</option>
                        <option>2-5 Kg</option>
                        <option>5-10 Kg</option>
                        <option>10-15 Kg</option>
                        <option>15-25 Kg</option>
                        <option>+25 Kg</option>
                    </select>
            </div>
            <div className=" col-4">
                    <label for="tipo-mascota" className="form-label">Tipo Mascota</label>
                    <select id="tipo-mascota" className="form-select">
                        <option selected>Selecciona tipo</option>
                        <option>Perro</option>
                        <option>Gato</option>
                        <option>Exotico</option>
                    </select>
                </div>
                

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                            Deseo recibir novedades al mail
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <Link type="button" className="btn btn-primary" to="/citaagendada">Agendar Cita</Link>
                </div>
            </form>
        </section>
    </main>

    )
}