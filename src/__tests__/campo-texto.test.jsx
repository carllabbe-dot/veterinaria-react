import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CampoTexto } from '../components/campo-texto.jsx';

describe('CampoTexto', () => {

    test('muestra el label que recibe por props', () => {
        render(<CampoTexto id="nombre" label="Nombre Mascota" name="nombre" type="text" value="" onChange={() => {}} />);

        expect(screen.getByLabelText('Nombre Mascota')).toBeInTheDocument();
    });

    test('muestra el mensaje de error y la clase is-invalid cuando recibe error', () => {
        render(<CampoTexto id="nombre" label="Nombre" name="nombre" type="text" value="" error="Campo obligatorio" onChange={() => {}} />);

        expect(screen.getByText('Campo obligatorio')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toHaveClass('is-invalid');
    });

    test('no muestra error ni is-invalid cuando no recibe error', () => {
        render(<CampoTexto id="nombre" label="Nombre" name="nombre" type="text" value="" onChange={() => {}} />);

        expect(screen.getByLabelText('Nombre')).not.toHaveClass('is-invalid');
    });

    test('llama a onChange cuando el usuario escribe', async () => {
        const user = userEvent.setup();
        const mockOnChange = vi.fn();
        render(<CampoTexto id="nombre" label="Nombre" name="nombre" type="text" value="" onChange={mockOnChange} />);

        await user.type(screen.getByLabelText('Nombre'), 'Nina');

        expect(mockOnChange).toHaveBeenCalledTimes(4);
    });
});