import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cita } from '../pages/cita.jsx';

// 1. Creamos una función falsa (espía) que reemplazará a navigate
const mockNavigate = vi.fn();

// 2. Reemplazamos el módulo 'react-router' por una versión falsa
vi.mock('react-router', async (importOriginal) => {
    const original = await importOriginal();   // traemos todo lo real...
    return {
        ...original,                            // ...lo dejamos igual...
        useNavigate: () => mockNavigate,        // ...menos useNavigate, que devuelve nuestro espía
    };
});

describe('Formulario de Cita', () => {

    // 3. Antes de cada test, limpiamos el espía
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test('con el formulario vacío muestra errores y NO navega', async () => {
        const user = userEvent.setup();
        render(<Cita />);

        await user.click(screen.getByRole('button', { name: /agendar cita/i }));

        expect(screen.getByText('Ingrese un nombre de al menos 3 caracteres')).toBeInTheDocument();
        expect(screen.getByText('Seleccione una comuna')).toBeInTheDocument();
        expect(mockNavigate).not.toHaveBeenCalled();
    });

    test('con todos los datos válidos navega a /citaagendada', async () => {
        const user = userEvent.setup();
        render(<Cita />);

        await user.type(screen.getByLabelText(/nombre completo/i), 'Carlos Labbé');
        await user.type(screen.getByLabelText(/correo/i), 'carlos@mail.com');
        await user.type(screen.getByLabelText(/^teléfono$/i), '+56912345678');
        await user.type(screen.getByLabelText(/dirección/i), 'Av. Siempreviva 123');
        await user.selectOptions(screen.getByLabelText(/comuna/i), 'Macul');
        await user.type(screen.getByLabelText(/nombre contacto emergencia/i), 'María Pérez');
        await user.type(screen.getByLabelText(/teléfono contacto emergencia/i), '+56987654321');
        await user.type(screen.getByLabelText(/nombre mascota/i), 'Nina');
        await user.type(screen.getByLabelText(/edad mascota/i), '3');
        await user.selectOptions(screen.getByLabelText(/peso mascota/i), '5-10 Kg');
        await user.selectOptions(screen.getByLabelText(/tipo mascota/i), 'Perro');

        await user.click(screen.getByRole('button', { name: /agendar cita/i }));

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/citaagendada');
    });

    test('con un email inválido muestra el error y NO navega', async () => {
        const user = userEvent.setup();
        render(<Cita />);

        await user.type(screen.getByLabelText(/correo/i), 'correo-sin-arroba');
        await user.click(screen.getByRole('button', { name: /agendar cita/i }));

        expect(screen.getByText('Ingrese un correo electrónico válido')).toBeInTheDocument();
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});