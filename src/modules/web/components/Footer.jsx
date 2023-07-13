import { Link } from 'react-router-dom'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import { devuelveAnio } from '../../../helpers/fechas'
import facebook from '../../../assets/icons/facebook.svg'
import instagram from '../../../assets/icons/instagram.svg'
import tiktok from '../../../assets/icons/tiktok.svg'
import twitter from '../../../assets/icons/twitter.svg'
import '../styles/footer.css'

export const Footer = () => {

    return (
        <SeccionAnimatrionY>
            <div className='contenedor footer'>
                <h4>Servicio Departamental de Autonomías de La Paz</h4>
                <br />
                <div className="foo">
                    <div className="foo-left">
                        <p>
                            <span style={{ fontWeight: 700 }} >Dirreción: </span>
                            <span>AV. ARCE 2529 EDIF. SANTA ISABEL, 2DO MEZZANINE BLOQUE A</span>
                        </p>
                        <p>
                            <span style={{ fontWeight: 700 }} >Email: </span>
                            <Link to="mailto:autonomiaslapaz@gmail.com" style={{ textDecoration: 'underline' }} >autonomiaslapaz@gmail.com</Link>
                        </p>
                        <p>
                            <span style={{ fontWeight: 700 }} >Telefono: </span>
                            <Link to="tel:22431319" style={{ textDecoration: 'underline' }}>22431319</Link>
                        </p>

                    </div>
                    <div className="foo-right">
                        <Link to="https://www.facebook.com/AutonomiasLaPaz" target='_blank' ><img src={facebook} alt="" /></Link>
                        <Link to="https://twitter.com/SEDALP68223501" target='_blank'><img src={twitter} alt="" /> </Link>
                        <Link to="https://www.instagram.com/sedalapaz/" target='_blank'><img src={instagram} alt="" /></Link>
                        <Link to="https://www.tiktok.com/@sedalapaz?lang=es" target='_blank'><img src={tiktok} alt="" /></Link>
                    </div>
                </div>
                <br /><br />
                <p className='copy' >@{ devuelveAnio() } SEDALP. Todos los derechos reservados</p>
            </div>
        </SeccionAnimatrionY>
    )
}
