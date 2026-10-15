import {Link} from 'react-router'
export function CitaAgendada(){
    return(
        <main>
        <section className ="container text-center cita">
            <div className="pt-5 mt-5">
                <div>
                        <img src="/images/perro-mano.jpg" className="imagen-agenda"/>
                        <h3 className="mt-4">¡Su consulta ha sido agendada con exito!<br/>Muchas gracias por su preferencia</h3>
                         <Link type="button" className="btn primary-button mt-3" to='' >Volver Inicio</Link>
                    </div>
                
            </div>
           
            
        </section>
        
    </main>
    )
}