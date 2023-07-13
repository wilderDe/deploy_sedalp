
import { Link } from 'react-router-dom'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import { dbRegiones } from '../../../helpers/DBregiones'
import '../styles/cardsregiones.css'

export const CardsRegiones = () => {
    return (
        <div className="contenedor">
            <div className="regiones">

            {dbRegiones.map(item => (
                <SeccionAnimatrionY key={ item.id}>
                    <div className="card-region">
                        <div className="card-region_left">
                            <h2>{item.title}</h2>
                            <p>{ item.parrafo}</p>
                            <Link to={item.path} className="enlace-secc">
                                <div className="relleno"></div>
                                <p className='enlace-link'> Ver más</p>
                            </Link>

                        </div>        
                        <div className="card-region-right">
                            <iframe 
                                src={ item.ruta } 
                                title="Contenido HTML">
                                
                            </iframe>
                        </div>
                    </div>
                </SeccionAnimatrionY>
            ))}
            
            </div>
        </div>
    )
}
