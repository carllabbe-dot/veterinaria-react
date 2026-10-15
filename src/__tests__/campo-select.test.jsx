import { render, screen } from '@testing-library/react';
import { CampoSelect } from '../components/campo-select.jsx';

describe('CampoSelect', () => {

    test('crea una opción por cada elemento del arreglo, más la opción inicial', () => {
        render(<CampoSelect id="tipo" label="Tipo" name="tipo" texto="Selecciona tipo"
            opciones={['Perro', 'Gato', 'Exótico']} value="" onChange={() => {}} />);

        expect(screen.getAllByRole('option')).toHaveLength(4);
        expect(screen.getByRole('option', { name: 'Selecciona tipo' })).toBeInTheDocument();
    });
});