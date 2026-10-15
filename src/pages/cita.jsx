
import { useState } from "react";
import { useNavigate } from "react-router";
import { CampoTexto } from "../components/campo-texto";
import { CampoSelect } from "../components/campo-select";

export function Cita() {
    const pesos = ["0.5-2 Kg", "2-5 Kg", "5-10 Kg", "10-15 Kg", "15-25 Kg", "+25 Kg"];
    const tipos = ["Perro", "Gato", "Exótico"];
    const comunas = ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura"]
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({
        nombreDuenio: "",
        email: "",
        telefono: "",
        direccion: "",
        comuna: "",
        nombreEmergencia: "",
        telefonoEmergencia: "",
        nombreMascota: "",
        edadMascota: "",
        pesoMascota: "",
        tipoMascota: "",
        novedades: false
    });
    const [errores, setErrores] = useState({});
    const actualizarFormulario = (e) => {

        const { name, value, type, checked } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: type === "checkbox" ? checked : value
        }));

        setErrores((anterior) => ({
            ...anterior,
            [name]: ""
        }));
    };

    // Validaciones
    const validarFormulario = () => {
        const nuevosErrores = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefono = /^\+569\d{8}$/;
        if (formulario.nombreDuenio.trim().length < 3) {
            nuevosErrores.nombreDuenio =
                "Ingrese un nombre de al menos 3 caracteres";
        }
        if (!regexEmail.test(formulario.email.trim())) {
            nuevosErrores.email =
                "Ingrese un correo electrónico válido";
        }
        if (!regexTelefono.test(formulario.telefono.trim())) {
            nuevosErrores.telefono =
                "Ingrese un teléfono válido (+569XXXXXXXX)";
        }
        if (formulario.direccion.trim() === "") {
            nuevosErrores.direccion =
                "Ingrese su dirección";
        }
        if (formulario.comuna === "") {
            nuevosErrores.comuna =
                "Seleccione una comuna";
        }
        if (formulario.nombreEmergencia.trim().length < 3) {
            nuevosErrores.nombreEmergencia =
                "Ingrese el nombre del contacto de emergencia";
        }
        if (!regexTelefono.test(formulario.telefonoEmergencia.trim())) {
            nuevosErrores.telefonoEmergencia =
                "Ingrese un teléfono de emergencia válido (+569XXXXXXXX)";
        }
        if (formulario.nombreMascota.trim() === "") {
            nuevosErrores.nombreMascota =
                "Ingrese el nombre de su mascota";
        }
        if (
            formulario.edadMascota.trim() === "" ||
            !Number.isFinite(Number(formulario.edadMascota)) ||
            Number(formulario.edadMascota) < 0
        ) {
            nuevosErrores.edadMascota =
                "Ingrese una edad válida (0 o mayor)";
        }
        if (formulario.pesoMascota === "") {
            nuevosErrores.pesoMascota =
                "Seleccione el peso de su mascota";
        }
        if (formulario.tipoMascota === "") {
            nuevosErrores.tipoMascota =
                "Seleccione un tipo de mascota";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const agendarCita = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            navigate("/citaagendada");
        }
    };

    return (
        <main>
            <section className="container">
                <form onSubmit={agendarCita} noValidate>
                    <div className="pt-5" id="titulo-cita">
                        <h2>Datos del Dueño</h2>
                    </div>
                    <div className="row g-3 pt-4">
                        <CampoTexto
                            id="nombre-duenio"
                            label="Nombre completo dueño"
                            name="nombreDuenio"
                            type="text"
                            placeholder=""
                            value={formulario.nombreDuenio}
                            error={errores.nombreDuenio}
                            onChange={actualizarFormulario}
                        />
                        <CampoTexto
                            id="mail-cliente"
                            label="Correo electronico"
                            name="email"
                            type="email"
                            placeholder="cliente@email.com"
                            value={formulario.email}
                            error={errores.email}
                            onChange={actualizarFormulario}
                        />
                        <CampoTexto
                            id="fono-cliente"
                            label="Teléfono"
                            name="telefono"
                            type="tel"
                            placeholder="+569XXXXXXXX"
                            value={formulario.telefono}
                            error={errores.telefono}
                            onChange={actualizarFormulario}
                        />
                        <CampoTexto
                            id="direccion-cliente"
                            label="Dirección"
                            name="direccion"
                            type="text"
                            placeholder="Av. Siempreviva #123"
                            value={formulario.direccion}
                            error={errores.direccion}
                            onChange={actualizarFormulario}
                        />
                        <div className="w-100"></div>
                        <CampoTexto
                            id="nombre-cliente-emergencia"
                            label="Nombre Contacto Emergencia"
                            name="nombreEmergencia"
                            type="text"
                            placeholder=""
                            value={formulario.nombreEmergencia}
                            error={errores.nombreEmergencia}
                            onChange={actualizarFormulario}
                        />
                        <CampoTexto
                            id="fono-cliente-emergencia"
                            label="Teléfono Contacto Emergencia"
                            name="telefonoEmergencia"
                            type="tel"
                            placeholder="+569XXXXXXXX"
                            value={formulario.telefonoEmergencia}
                            error={errores.telefonoEmergencia}
                            onChange={actualizarFormulario}
                        />
                        <CampoSelect
                            id="comuna-cliente"
                            label="Comuna"
                            name="comuna"
                            texto="Selecciona comuna"
                            opciones={comunas}
                            value={formulario.comuna}
                            error={errores.comuna}
                            onChange={actualizarFormulario}
                        />
                    </div>
                    <div className="pt-5" id="titulo-cita-mascota">
                        <h2>Datos de la Mascota</h2>
                    </div>
                    <div className="row g-3 pt-4">
                        <CampoTexto
                            id="nombre-mascota"
                            label="Nombre Mascota"
                            name="nombreMascota"
                            type="text"
                            value={formulario.nombreMascota}
                            error={errores.nombreMascota}
                            onChange={actualizarFormulario}
                        />
                        <CampoTexto
                            id="edad-mascota"
                            label="Edad Mascota"
                            name="edadMascota"
                            type="number"
                            value={formulario.edadMascota}
                            error={errores.edadMascota}
                            onChange={actualizarFormulario}
                            min={0}
                            step={1}
                        />
                        <CampoSelect
                            id="peso-mascota"
                            label="Peso Mascota"
                            name="pesoMascota"
                            texto="Selecciona Rango"
                            opciones={pesos}
                            value={formulario.pesoMascota}
                            error={errores.pesoMascota}
                            onChange={actualizarFormulario}
                        />
                        <CampoSelect
                            id="tipo-mascota"
                            label="Tipo Mascota"
                            name="tipoMascota"
                            texto="Selecciona Tipo"
                            opciones={tipos}
                            value={formulario.tipoMascota}
                            error={errores.tipoMascota}
                            onChange={actualizarFormulario}
                        />
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    name="novedades"
                                    checked={formulario.novedades}
                                    onChange={actualizarFormulario}
                                />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Deseo recibir novedades al mail
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-center pb-5">
                            <button type="submit" className="btn btn-primary">
                                Agendar Cita
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}
