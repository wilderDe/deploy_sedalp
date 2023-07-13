import '../styles/misionvision.css'
import { SeccionAnimationX } from '../../../helpers/Animaciones/SeccionAnimationX'

export const MisionVision = () => {

    return (
        <div className='misionvision'> 
            <div className='contenedor ' >
                <div className="contenedor">
                    <SeccionAnimationX>
                        <div 
                            className="mision" 
                            transition={{delay: 0.2}}
                        >
                            <h2>Misión</h2>
                            <p>
                                El Gobierno Autónomo Departamental de La Paz, busca ser reconocida como una entidad eficiente, transparente, con respaldo social e inclusiva, que encamina el desarrollo económico-social del departamento en la reconquista del liderazgo económico nacional, a través de una gestión concurrente y concertada con los diferentes niveles de gobierno y actores territoriales, uniendo en un solo equipo de trabajo, con sentido de reto y comprometido por el bienestar de la población en general, sin olvidar el Phoqhata Jakaña.
                            </p>
                        </div>
                    </SeccionAnimationX>
                    
                    <br /><br />
                    <SeccionAnimationX>
                        <div 
                            className="mision" 
                            transition={{delay: 0.3}}
                        >
                            <h2>Visión</h2>
                            <p>
                                El Gobierno Autónomo Departamental de La Paz es una entidad pública, autónoma, integradora, con identidad pluricultural y diversidad territorial, constituida por sus órganos: Legislativo y Ejecutivo, que planifica y ejecuta políticas públicas, planes, programas y proyectos que contribuyen al desarrollo de los diferentes sectores existentes del departamento, en armonía con la Pachamama, a fin de consolidar el bienestar y la protección en la población que habita el departamento de La Paz con equidad de género e inclusión social.
                            </p>
                        </div>
                    </SeccionAnimationX>
                    <br /><br />
                    <SeccionAnimationX>
                    <div 
                        className="mision" 
                        transition={{delay: 0.4}}
                    >
                        <h2>Objetivo General</h2>
                        <p> Promover el desarrollo regional desconcentrado a través de la articulación de políticas, planes, estrategias, programas y proyectos concurrentes públicos y privados, así como el ejercicio pleno de las competencias y autonomías de las ETAs mediante el fortalecimiento institucional, para el desarrollo integral del Departamento de La Paz.</p>
                    </div>
                    </SeccionAnimationX>
                   
                </div>
            </div>
        </div>

    )

}
