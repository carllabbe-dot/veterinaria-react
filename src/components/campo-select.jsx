export function CampoSelect({ id, label, name, value, error, onChange, opciones, texto }) {
    return (
        <div className="col-12 col-md-4">
            <label htmlFor={id} className="form-label">{label}</label>

            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`form-select ${error ? "is-invalid" : ""}`}
            >
                <option value="">{texto}</option>
                {opciones.map((opcion) => (
                    <option key={opcion} value={opcion}>
                        {opcion}
                    </option>
                ))}
            </select>

            {error && <div className="invalid-feedback">{error}</div>}
        </div>


    );
}