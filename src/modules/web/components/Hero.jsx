import { motion } from "framer-motion"
import { devuelveAnio, formatoFecha } from "../../../helpers/fechas";
import { container,   animacionDeEntradaText} from "../../../helpers/framerMotion";
import calendar_icon from '../../../assets/icons/calendar.svg'
import '../styles/hero.css'

export const Hero = ( { title, urlImage } ) => {

    return (
        <div className='hero' style={{
            backgroundImage: `url(${urlImage})`,
        }}>
            <div className="content-hero">
                <motion.div 
                    className="hero-title"
                    variants={ container }
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={ animacionDeEntradaText } >{title}</motion.h1>
                    <div className="calendar">
                        <img src={calendar_icon} />
                        <motion.div  variants={ animacionDeEntradaText } className="calendar-text">
                            <p style={{ fontSize: 18 }} >{ formatoFecha() } </p>
                            <p>{ devuelveAnio() }</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}