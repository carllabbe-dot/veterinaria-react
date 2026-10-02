import {Link} from 'react-router'
export function CitaAgendada(){
    return(
        <main>
        <section class ="container text-center cita">
            <div class="pt-5 mt-5">
                <div>
                        <img src="/images/perro-mano.jpg" class="imagen-agenda"/>
                        <h3 class="mt-4">¡Su consulta ha sido agendada con exito!<br/>Muchas gracias por su preferencia</h3>
                         <Link type="button" class="btn primary-button mt-3" to='' >Volver Inicio</Link>
                    </div>
                
            </div>
           
            
        </section>
        
    </main>
    )
}