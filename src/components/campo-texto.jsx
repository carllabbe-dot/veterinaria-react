export function CampoTexto({ id, type, label, name, placeholder, value, onChange, min, step, error }) {
    return (
        <div className="col-12 col-md-4">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`form-control ${error ? "is-invalid" : ""}`}
                min={min}
                step={step}

            />
            {error && <div className="invalid-feedback">{error}</div>}

        </div>
    );
}